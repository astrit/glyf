import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
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
import Sidebar from "@/search/sidebar";
import { Shimmer } from "@/search/shimmer";
// import Utils from "@/search/utils";
import {
  toURL,
  toUnicode,
  levenshteinDistance,
  handleClearCopiedSymbols,
} from "@/search/utils";

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
  const [selectedGlyph, setSelectedGlyph] = useState(null);
  const [isContentVisible, setIsContentVisible] = useState(false);

  const router = useRouter();

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
          if (symbol.symbol === searchTerm) {
            return true;
          }
          const distance = levenshteinDistance(searchTerm, symbolName);
          return distance <= 4 || symbolRegex.test(symbolWords.join(""));

          // return symbolRegex.test(symbolWords.join(""));
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
        setSelectedGlyph(null);
        setIsContentVisible(false);
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

  function copyToClipboardSymbol(symbol) {
    navigator.clipboard.writeText(symbol);
    handleCopySymbol(symbol);
    toast.custom(() => (
      <Toaster>
        <span>{symbol}</span> Copied to clipboard!
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

  function handleClick(e, { symbol, name }) {
    if (e.altKey) {
      e.preventDefault();
      copyToClipboardUnicode(symbol);
    } else if (e.shiftKey) {
      e.preventDefault();
      copyToClipboardSymbol(symbol);
    } else {
      e.preventDefault();
      // handle regular click behavior
      // const contentDiv = document.getElementById("contentHere");
      // if (contentDiv) {
      //   // Load the content inside the #contentHere div
      //   contentDiv.innerHTML = `Content for ${symbol}`;
      // }
      setSelectedGlyph(symbol);
      setIsContentVisible(true);

      // Navigate to the dynamic route for the clicked card
      // const url = `${toURL(name)}`; // Generate the URL using toURL function and the name property
      // router.push(url);
      // router.push(url);
      // router.push(url);
      // router.push(url);
      // router.push(url);
      // router.push(url);
      // router.push(url);
      // router.push(`/[name]`, `/${name}`);
    }
  }

  return (
    <>
      <Form>
        <Input
          id="s"
          // placeholder={`${numSymbols ? "e.g arrow →" : "loading..."}`}
          placeholder="e.g arrow →"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          pattern="[A-Za-z0-9\-]+"
          value={searchTerm}
          onChange={handleChange}
          css={{
            // fontFamily: isLoading ? "Flow Circular" : "",

            "&::placeholder": {
              // fontDisplay: "block",
              // color: isLoading ? "hsla(257, 72%, 69%, 1.0)" : "",
              // paddingLeft: isLoading ? "10px" : "",
            },
          }}
        />
        <Clear
          type="reset"
          onClick={() => setSearchTerm("") && setSelected(" ")}
        />
        <Scroll />
        <Slash />
        {/* <Shimmer /> */}
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
                {`${category.title} (${category.symbols.length})`}
              </option>
            ))}
          </Filter>
        ) : (
          <Filter>
            <option value="">All categories</option>
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
      {isContentVisible && (
        <Box
          css={{
            display: "flex",
            position: "fixed",
            width: "100vw",
            height: "100vh",
            inset: "0",
            zIndex: "10",
            // backgroundColor: "hsla(0, 0%, 0%, 0.2)",
            backdropFilter: "blur(20px)",
            opacity: isContentVisible ? "1" : "0",
            transition: "all 0.2s ease-in-out",
            cursor: "zoom-out",
            "-webkit-mask-image": `linear-gradient(
              to left,
              hsla(300, 90%, 52%, 1) 40%,
              hsla(300, 90%, 52%, 0)
            )`,
            "mask-image": `linear-gradient(
              to left,
              hsla(300, 90%, 52%, 1) 40%,
              hsla(300, 90%, 52%, 0)
            )`,
          }}
          onClick={(e) => {
            setSelectedGlyph(null);
            setIsContentVisible(false);
          }}
        ></Box>
      )}
      <Sidebar
        css={{
          opacity: isContentVisible ? "1" : "0",
          pointerEvents: isContentVisible ? "auto" : "none",
          transform: isContentVisible
            ? "translate3d(0, 0, 0)"
            : "translate3d(10px, 0, 0)",
        }}
      >
        {selectedGlyph}
      </Sidebar>
      {isLoading || !symbolsData ? (
        <CardSkeleton />
      ) : (
        <List className="glyphs">
          {searchResults.map((item, index) => (
            <Card
              key={index + "searchk"}
              href={`/${toURL(item.name)}`}
              // href={`/[name]`}
              // as={`/${toURL(item.name)}`}
              // passHref
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
