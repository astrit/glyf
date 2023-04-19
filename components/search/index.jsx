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
import Action from "@/search/action";

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
  }, [searchTerm, symbolsData, selectedCategory]);

  useEffect(() => {
    const handleSlashKey = (event) => {
      if (
        event.key === "/" ||
        ((event.keyCode === 191 || event.keyCode === 75) &&
          (event.metaKey || event.ctrlKey))
      ) {
        event.preventDefault();
        const input = document.getElementById("s");
        input.focus();
      } else if (event.key === "Escape") {
        const input = document.getElementById("s");
        searchTerm && setSearchTerm("");
        copiedSymbols && setCopiedSymbols("");
        selectedCategory && setSelectedCategory("");
        input.blur();
      }
    };

    document.addEventListener("keydown", handleSlashKey);
    return () => {
      document.removeEventListener("keydown", handleSlashKey);
    };
  }, [searchTerm, copiedSymbols, selectedCategory]);

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
    if (1 == 2) {
      // THIS IS DISABLED FOR NOW
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
          setCopiedSymbols(
            stored
              .map((el) =>
                selectedState ? el.getAttribute("data-symbol") : null
              )
              .slice(0, 10)
          );
        });
    }
  }, []);

  function toURL(e) {
    return e.toLowerCase().replace(/ /g, "-");
  }

  function toUnicode(e) {
    return `U+${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`;
  }

  function copyToClipboardSymbol(symbol) {
    navigator.clipboard.writeText(symbol);
    handleCopySymbol(symbol);
    toast.custom(() => (
      <Toaster>
        Copied <span>{symbol}</span> to clipboard!
      </Toaster>
    ));
  }

  function copyToClipboardUnicode(symbol) {
    navigator.clipboard.writeText(toUnicode(symbol));
    handleCopySymbol(symbol);
    toast.custom(() => (
      <Toaster>
        Copied <span>{toUnicode(symbol)}</span> for <span>{symbol}</span> to
        clipboard!
      </Toaster>
    ));
  }

  function handleClick(e, { symbol }) {
    if (e.altKey) {
      e.preventDefault();
      copyToClipboardUnicode(symbol);
    } else if (e.shiftKey) {
      e.preventDefault();
      copyToClipboardSymbol(symbol);
    } else {
      // handle regular click behavior
    }
  }

  return (
    <>
      <Form>
        <Input
          id="s"
          placeholder={`${numSymbols ? "e.g arrow →" : "loading..."}`}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          pattern="[A-Za-z0-9\-]+"
          value={searchTerm}
          onChange={handleChange}
          css={{
            fontFamily: isLoading ? "Flow Circular" : "",

            "&::placeholder": {
              color: isLoading ? "hsla(257, 72%, 69%, 1.0)" : "",
              paddingLeft: isLoading ? "10px" : "",
            },
          }}
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
        ) : (
          <Filter
            css={{
              fontFamily: "'Flow Circular', cursive",
            }}
          >
            <option value="">Load all categories</option>
          </Filter>
        )}
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
        <Action
          isLoading={isLoading}
          isSelected={isSelected}
          searchTerm={searchTerm}
          numResults={numResults}
          numSymbols={numSymbols}
        />

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
              href={`/${toURL(item.name)}`}
              onClick={(e) => handleClick(e, item)}
              onMouseEnter={(e) => {
                e.currentTarget.setAttribute("title", item.name);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.removeAttribute("title", item.name);
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
