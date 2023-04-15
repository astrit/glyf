import React, { useState, useEffect, useRef } from "react";
import SelectionArea from "@viselect/vanilla";
import { toast } from "sonner";
import { styled } from "@/theme";
import Box from "@/box";
import Scroll from "@/search/scroll/scroll";

const Form = styled("form", {
  display: "flex",
  flexDirection: "column",
  position: "sticky",
  top: "20px",
  zIndex: "1",
});

const Input = styled("input", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "18px",
  fontSize: "8px",
  padding: "26px 34px 26px 80px",
  fontSize: "24px",
  lineHeight: "1",
  background: `rgba(255,255,255,0.06) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M18.319 14.433A8.001 8.001 0 0 0 6.343 3.868a8 8 0 0 0 10.564 11.976l.043.045 4.242 4.243a1 1 0 1 0 1.415-1.415l-4.243-4.242a1.116 1.116 0 0 0-.045-.042Zm-2.076-9.15a6 6 0 1 1-8.485 8.485 6 6 0 0 1 8.485-8.485Z' fill='white'/%3E%3C/svg%3E") no-repeat left 26px center/28px 28px`,
  backdropFilter: "blur(20px)",
  color: "white",
  border: "none",
  fontWeight: "300",
  outline: "none",
  fontFamily: `"Inter var", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
  border: "3px solid rgba(255,255,255,0.07)",
  userSelect: "none",

  boxShadow:
    "2px 3px 8px rgba(0, 0, 0, 0.06), 0px 28px 12px -8px rgba(0, 0, 0, 0.04)",
  transition:
    "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275), background 0.4s",

  "&::placeholder": {
    color: "rgba(255,255,255,0.3)",
  },
  "&:focus:placeholder": {
    color: "transparent",
  },
  "&:focus": {
    backgroundColor: "rgba(255,255,255,0.09)",
    borderColor: "rgba(255,255,255,0.2)",
    backgroundPosition: "left 30px center",
    paddingLeft: "86px",
  },
});

const List = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
  gap: "24px",
  marginTop: "48px",
});

const Card = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  aspectRatio: "1/1",
  objectFit: "cover",
  objectPosition: "center",
  fontSize: "24px",
  lineHeight: "1",
  color: "#0e0c1b",
  position: "relative",
  color: "$white_alpha10",
  userSelect: "none",
  position: "relative",
  cursor: "pointer",
  borderRadius: "18px",
  "--opacity": "0",
  background: `hsla(260, 74%, 53%, 1.0)`,
  border: "2px solid hsla(259, 73%, 56%, 1.0)",
  transition: "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  boxShadow:
    "2px 3px 8px rgba(0, 0, 0, 0.06), 0px 28px 12px -8px rgba(0, 0, 0, 0.04)",
  boxSizing: "border-box",

  span: {
    transition: "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  },

  "&:hover, &.selected": {
    color: "$white_alpha100",
    backgroundColor: "hsla(260, 74%, 56%, 1.0)",
    borderColor: "hsla(209, 99%, 67%, 0.2)",
    borderRadius: "24px",

    span: {
      transform: "scale3d(1.3,1.3,1.3)",
    },
  },

  "&:active": {
    borderWidth: "12px",
    borderRadius: "28px",
    boxShadow:
      " 0px 1px 6px rgba(0, 0, 0, 0.06), 0px 20px 8px -4px rgba(0, 0, 0, 0.04)",

    span: {
      transform: "scale3d(1.1,1.1,1.1)",
    },
  },

  "&::after": {
    content: " ",
    position: "absolute",
    display: "flex",
    borderRadius: "18px",
    boxShadow:
      "2px 3px 8px rgba(0, 0, 0, 0.06), 0px 28px 12px -8px rgba(0, 0, 0, 0.04)",
    transition: "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    background:
      "linear-gradient(90deg, hsla(209, 99%, 67%, 1.0) 0%, #b447eb 95%)",
    width: "100%",
    height: "100%",
    zIndex: "-1",
    "@sm": {},
    willChange: "transform, opacity, border-radius, border-width, box-shadow",
    // display: "none",
    visibility: "hidden",
  },

  "&:hover::after, &.selected::after": {
    // display: "flex",
    visibility: "visible",
    transform: "scale3d(1.12,1.12,1.12)",
    borderRadius: "24px",
    cursor: "pointer",
  },
  "&:active::after": {
    transform: "scale3d(1.02, 1.02, 1.02)",
    borderRadius: "24px",
  },
});

const Toaster = styled("div", {
  display: "flex",
  gap: "10px",
  alignItems: "center",

  span: {
    lineHeight: "1",
    position: "relative",
    borderRadius: "4px",
    background: "hsla(260, 74%, 59%, 0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: "1",
    padding: "8px 16px",
  },
});

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [symbolsData, setSymbolsData] = useState(null);
  const [numResults, setNumResults] = useState(0);
  const [numSymbols, setNumSymbols] = useState(0);
  const [copiedSymbols, setCopiedSymbols] = useState([]);
  const [isSelected, setSelected] = useState(false);

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
      if (wordRegex.test(category.title)) {
        numResults += category.symbols.length;
        return category.symbols;
      } else {
        const categoryResults = category.symbols.filter((symbol) => {
          const symbolName = symbol.name.replace(/\s+/g, "");
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
  }, [searchTerm, symbolsData]);

  const handleSlashKey = (event) => {
    if (event.key === "/") {
      event.preventDefault();
      const input = document.getElementById("s");
      input.focus();
    } else if (event.key === "Escape") {
      const input = document.getElementById("s");
      input.blur();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleSlashKey);
    return () => {
      document.removeEventListener("keydown", handleSlashKey);
    };
  }, []);

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
      selectables: [".glyphs > div"],
      boundaries: ["body"],
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
          // stored.map((el) => (selectedState ? el.innerHTML : null))
          stored.map((el) =>
            selectedState ? el.getAttribute("data-symbol") : null
          )
        );
      });
    // return () => {
    //   selection.destroy();
    // };
  }, []);

  return (
    <>
      <Form>
        <Input
          id="s"
          placeholder={`${
            numSymbols
              ? "Search " + numSymbols + " glyphs — press / to start searching"
              : "Loading..."
          }`}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          pattern="[A-Za-z0-9\-]+"
          value={searchTerm}
          onChange={handleChange}
        />
        {/* <button type="button" onClick={() => setSearchTerm("")}>
          ✗
        </button> */}
        <Scroll />
      </Form>

      <Box
        css={{
          display: "flex",
          fontSize: "0.8rem",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {copiedSymbols && copiedSymbols.length > 0 ? (
          <Box
            css={{
              display: "flex",
              gap: "10px",
              padding: "14px 20px",
              borderRadius: "200px",
              backgroundColor: "hsla(0, 0%, 0%, 0.1)",
              alignItems: "center",
              backdropFilter: "blur(10px)",

              ul: {
                display: "flex",
                margin: 0,
                padding: 0,
                gap: "10px",
                alignItems: "center",

                li: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "20px",
                  height: "20px",
                },
              },

              button: {
                display: "flex",
                borderRadius: "20px",
                backgroundColor: "hsla(0, 0%, 0%, 0.1)",
                border: "none",
                color: "white",
                cursor: "pointer",
                fontSize: "12px",
                textTransform: "uppercase",
                fontFamily: "inherit",
                width: "26px",
                height: "26px",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "10px",
                transition: "all 0.2s ease-in-out",
                userSelect: "none",

                "&:hover": {
                  color: "hsla(0, 0%, 0%, 1)",
                  backgroundColor: "white",
                },
              },
            }}
          >
            <ul>
              {copiedSymbols.map((symbol, index) => (
                <li key={index}>{symbol}</li>
              ))}
              <button onClick={handleClearCopiedSymbols}>✗</button>
            </ul>
          </Box>
        ) : null}

        {searchTerm && (
          <Box>
            {numResults} result{numResults !== 1 ? "s" : ""}
          </Box>
        )}
      </Box>
      {isLoading || !symbolsData ? (
        <>Loading...</>
      ) : (
        <List className="glyphs">
          {searchResults.map((item, index) => (
            <Card
              key={index + "searchk"}
              title={item.name}
              data-symbol={item.symbol}
              onClick={(e) => {
                if (e.shiftKey) {
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
