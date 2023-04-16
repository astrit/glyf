import React, { useState, useEffect, useRef } from "react";
import SelectionArea from "@viselect/vanilla";
import { toast } from "sonner";
import Box from "@/box";
import Scroll from "@/search/scroll/scroll";
import CardSkeleton from "@/search/loader";
import Slash from "@/search/slash";
import Form from "@/search/form";
import Input from "@/search/input";
import List from "@/search/list";
import Card from "@/search/card";
import Toaster from "@/search/toaster";
import Drawer from "@/search/drawer";
import Clear from "@/search/clear";
import Filter from "@/search/filter";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [symbolsData, setSymbolsData] = useState(null);
  const [numResults, setNumResults] = useState(0);
  const [numSymbols, setNumSymbols] = useState(0);
  const [copiedSymbols, setCopiedSymbols] = useState([]);
  const [isSelected, setSelected] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        setSymbolsData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  useEffect(() => {
    if (!symbolsData) return;
    setIsLoading(true);
    let numResults = 0;
    const escapedSearchTerm = escapeRegExp(searchTerm);
    const words = escapedSearchTerm.split(/\s+/).map(escapeRegExp);
    const wordRegex = new RegExp(words.join(".*"), "i");
    const results = symbolsData.categories.category.flatMap((category) => {
      if (selectedCategory && selectedCategory !== category) {
        return [];
      } else if (wordRegex.test(category.title)) {
        numResults += category.symbols.length;
        return category.symbols;
      } else {
        const categoryResults = category.symbols.filter((symbol) => {
          const symbolName =
            typeof symbol.name === "string"
              ? symbol.name.replace(/\s+/g, "")
              : "";
          const symbolWords = symbolName.split(/(?=[A-Z])/).map(escapeRegExp);
          const symbolRegex = new RegExp(
            words.map((word) => `(?=.*${word})`).join("") + ".*",
            "i"
          );
          return symbolRegex.test(symbolWords.join(""));
        });
        numResults += categoryResults.length;
        return categoryResults;
      }
    });

    const numSymbols = symbolsData.categories.category.reduce(
      (acc, category) => acc + category.symbols.length,
      0
    );

    setSearchResults(results);
    setNumResults(numResults);
    setNumSymbols(numSymbols);
    setIsLoading(false);
    // setSearchTerm(selectedCategory);
  }, [searchTerm, symbolsData, selectedCategory]);

  useEffect(() => {
    const handleSlashKey = (event) => {
      // if (event.key === "/") {
      if (
        event.key === "/" ||
        ((event.keyCode === 191 || event.keyCode === 75) &&
          (event.metaKey || event.ctrlKey))
      ) {
        // if (event.key === "/") {
        event.preventDefault();
        const input = document.getElementById("s");
        input.focus();
      } else if (event.key === "Escape") {
        const input = document.getElementById("s");
        searchTerm && setSearchTerm("");
        input.blur();
      }
    };

    document.addEventListener("keydown", handleSlashKey);
    return () => {
      document.removeEventListener("keydown", handleSlashKey);
    };
  }, [searchTerm]);

  const handleCopySymbol = (symbol) => {
    setCopiedSymbols((prevCopiedSymbols) => [
      symbol,
      ...prevCopiedSymbols.slice(0, 9),
    ]);
  };

  useEffect(() => {
    localStorage.setItem("copiedSymbols", JSON.stringify(copiedSymbols));
  }, [copiedSymbols]);

  useEffect(() => {
    const storedCopiedSymbols =
      JSON.parse(localStorage.getItem("copiedSymbols")) || [];
    setCopiedSymbols(storedCopiedSymbols);

    const handleUnload = () => {
      localStorage.removeItem("copiedSymbols");
    };

    window.addEventListener("beforeunload", handleUnload);
    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);

  const handleClearCopiedSymbols = () => {
    localStorage.removeItem("copiedSymbols");
    setCopiedSymbols([]);
  };

  useEffect(() => {
    const selection = new SelectionArea({
      selectables: [".glyphs > a"],
      boundaries: ["body"],
      behaviour: {
        overlap: "invert",
      },
      features: {
        touch: false,
      },
      singleTap: {
        allow: false,
        intersect: "native",
      },
      quite: true,
    })
      // .on("beforestart", (event) => {})
      .on("start", ({ store, event }) => {
        if (!event.ctrlKey && !event.metaKey) {
          for (const el of store.stored) {
            el.classList.remove("selected");
          }
          selection.clearSelection();
        }
      })
      .on(
        "move",
        ({
          store: {
            changed: { added, removed },
          },
        }) => {
          for (const el of added) {
            el.classList.add("selected");
          }
          for (const el of removed) {
            el.classList.remove("selected");
          }
        }
      )
      .on("stop", ({ store, store: { stored } }) => {
        document.body.addEventListener("keydown", (event) => {
          if (event.key === "Escape") {
            for (const el of store.stored) {
              el.classList.remove("selected");
            }
            setSelected(false);
            selection.clearSelection();
          }
        });
        const selectedState = selection._selection.stored.length;
        setSelected(selectedState);
        // .slice(0, 9)
        // setCopiedSymbols(
        //   stored.map((el) =>
        //     selectedState ? el.getAttribute("data-symbol") : null
        //   )
        // );
        setCopiedSymbols(
          stored
            .map((el) =>
              selectedState ? el.getAttribute("data-symbol") : null
            )
            .slice(0, 10)
        );
      });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 20000);
  }, []);

  return (
    <>
      <Form>
        <Input
          id="s"
          placeholder={`${numSymbols ? "e.g arrow →" : "Loading..."}`}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          pattern="[A-Za-z0-9\-]+"
          value={searchTerm}
          onChange={handleChange}
        />
        <Clear
          type="reset"
          onClick={() => setSearchTerm("") && setSelected(" ")}
        />
        <Scroll />
        <Slash />
        {!isLoading && symbolsData ? (
          <Filter
            value={selectedCategory ? selectedCategory.title : ""}
            onChange={(event) => {
              const title = event.target.value;
              setSelectedCategory(
                symbolsData.categories.category.find(
                  (category) => category.title === title
                )
              );
            }}
          >
            <option value="">All categories</option>
            {symbolsData.categories.category.map((category) => (
              <option key={category.title} value={category.title}>
                {`${category.symbols[0].symbol} ${category.title} (${category.symbols.length})`}
              </option>
            ))}
          </Filter>
        ) : null}
      </Form>

      <Box
        css={{
          display: "flex",
          fontSize: "0.8rem",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: "58px",
          paddingLeft: "28px",
        }}
      >
        <Box
          css={{
            color: "rgba(255,255,255,0.4)",
            fontSize: "18px",
            fontFeatureSettings: '"kern", "ss02"',
          }}
        >
          {(isSelected && (
            <>
              {isSelected} Selected {" / "}{" "}
            </>
          )) ||
            (searchTerm && (
              <>
                {numResults} result{numResults !== 1 ? "s" : ""} {" / "}
              </>
            ))}
          {numSymbols ? numSymbols : "0000"} Glyphs
        </Box>
        {copiedSymbols && copiedSymbols.length > 0 ? (
          <Drawer>
            {copiedSymbols.map((symbol, index) => (
              <li key={index}>{symbol}</li>
            ))}
            <button onClick={() => handleClearCopiedSymbols("")}>✗</button>
          </Drawer>
        ) : null}
      </Box>
      {isLoading || !symbolsData ? (
        <CardSkeleton />
      ) : (
        <List className="glyphs">
          {searchResults.map((item, index) => (
            <Card
              key={index + "searchk"}
              title={item.name}
              data-symbol={item.symbol}
              href={`/${item.symbol}`}
              onClick={(e) => {
                if (e.shiftKey) {
                  // router.push("/" + item.symbol);
                  e.preventDefault();
                  navigator.clipboard.writeText(item.symbol);
                  handleCopySymbol(item.symbol);
                  toast.custom(() => (
                    <Toaster>
                      Copied <span>{item.symbol}</span> to clipboard!
                    </Toaster>
                  ));
                }
              }}
            >
              <span>{item.symbol}</span>
            </Card>
          ))}
        </List>
      )}
    </>
  );
}
