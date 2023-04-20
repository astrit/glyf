import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import Header from "@/header";
import Box from "@/box";
import { styled } from "@/theme";
import SVGMap from "g/svg/svg";
import Footer from "@/footer";
import Carbon from "u/ads";
import Search from "@/search";
import Hero from "@/hero";
import { toast } from "sonner";
import Card from "@/search/card";
import Toaster from "@/search/toaster";
import CardSkeleton from "@/search/loader";
import List from "@/search/list";

const Main = styled("main", {
  margin: "0 auto",
  width: "clamp(64vw, 80vw, 1620px)",
  padding: "1.5rem",

  "@md": {
    width: "calc(100% - 10px)",
  },
});

function Symbol() {
  const router = useRouter();
  const { name } = router.query;
  const [isLoading, setIsLoading] = useState(true);
  const [symbolData, setSymbolData] = useState(null);
  const [categoryData, setCategoryData] = useState(null);
  const isDev = process.env.NODE_ENV === "development";

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const response = await fetch("./data.json");
      const data = await response.json();
      const matchingData = data.categories.category.flatMap((category) =>
        category.symbols.filter(
          (symbolData) =>
            symbolData.name.toLowerCase().replace(/ /g, "-") === name
        )
      );
      setSymbolData(matchingData[0]);
      const category = data.categories.category.find((category) =>
        category.symbols.some(
          (symbolData) =>
            symbolData.name.toLowerCase().replace(/ /g, "-") === name
        )
      );
      setCategoryData(category);
      setIsLoading(false);
    }
    fetchData();
  }, [name]);

  if (!symbolData) {
    return null;
  }

  const categorySymbols = categoryData.symbols;

  const symbolIndex = categorySymbols.findIndex(
    (symbolData) => symbolData?.name.toLowerCase().replace(/ /g, "-") === name
  );

  const previousSymbol =
    symbolIndex > 0
      ? categorySymbols[symbolIndex - 1].name.toLowerCase().replace(/ /g, "-")
      : null;
  const nextSymbol =
    symbolIndex < categorySymbols.length - 1
      ? categorySymbols[symbolIndex + 1].name.toLowerCase().replace(/ /g, "-")
      : null;

  function toUnicode(e) {
    return `U+${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`;
  }

  function toHtml(char) {
    return `&#${char.charCodeAt(0)};`;
  }

  function toCSS(char) {
    const codePoint = char.codePointAt(0).toString(16);
    return `\\${codePoint} `;
  }

  function charToUrlEscapeCode(char) {
    return encodeURIComponent(char);
  }

  function textToPath(text) {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    // Set the path's `d` attribute to a series of SVG path commands that draw the text as a path
    let d = "";
    const characters = text.split("");
    let x = 0;
    let y = 0;
    characters.forEach((char) => {
      const glyph = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
      );
      glyph.setAttribute("x", x);
      glyph.setAttribute("y", y);
      glyph.setAttribute("font-size", "48");
      glyph.setAttribute("font-weight", "normal");
      glyph.setAttribute("text-anchor", "left");
      glyph.setAttribute("dominant-baseline", "alphabetic");
      glyph.textContent = char;
      const bbox = glyph.getBBox();
      const width = bbox.width;
      const height = bbox.height;
      const pathCommands = `M ${x},${
        y - height
      } v ${height} h ${width} v ${-height} h ${-width} Z `;
      d += pathCommands;
      x += width;
    });

    path.setAttribute("d", d);
    return path;
  }

  function createSvgPatternFromText(text) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    const path = textToPath(text);
    svg.setAttribute("width", "64");
    svg.setAttribute("height", "64");
    rect.setAttribute("width", "100%");
    rect.setAttribute("height", "100%");
    rect.setAttribute("fill", "transparent");
    path.setAttribute("fill", "hsla(0, 100%, 100%, 0.08)");
    svg.appendChild(rect);
    svg.appendChild(path);
    const svgString = new XMLSerializer().serializeToString(svg);
    const encodedSvg = encodeURIComponent(svgString);
    return `url('data:image/svg+xml;charset=utf-8,${encodedSvg}')`;
  }

  // function createSvgPatternFromChar(char) {
  //   const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  //   const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  //   const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
  //   svg.setAttribute("width", "64");
  //   svg.setAttribute("height", "64");
  //   rect.setAttribute("width", "100%");
  //   rect.setAttribute("height", "100%");
  //   rect.setAttribute("fill", "transparent");
  //   text.setAttribute("fill", "hsla(0, 100%, 100%, 0.08)");
  //   text.setAttribute("x", "50%");
  //   text.setAttribute("y", "50%");
  //   text.setAttribute("font-size", "48");
  //   text.setAttribute("font-weight", "normal");
  //   text.setAttribute("text-anchor", "middle");
  //   text.setAttribute(
  //     "font-family",
  //     '"Inter var", -apple-system, BlinkMacSystemFont, "Segoe UI"'
  //   );
  //   text.setAttribute("dominant-baseline", "central");
  //   text.textContent = char;
  //   svg.appendChild(rect);
  //   svg.appendChild(text);
  //   const svgString = new XMLSerializer().serializeToString(svg);
  //   const encodedSvg = encodeURIComponent(svgString);
  //   return `url('data:image/svg+xml;charset=utf-8,${encodedSvg}')`;
  // }

  const pattern = createSvgPatternFromChar(symbolData.symbol);
  console.log(pattern);
  return (
    <>
      <Box>
        <Head>
          <title>{symbolData.name} — Glyphs from CSS.GG</title>
          <meta
            name="description"
            content="5000+ cool glyphs at your fingertips! Courtesy of CSS.GG, easy to find and copy to your clipboard."
          />
        </Head>
        <Header />
        <SVGMap />
        <Main
          css={{
            "--bg": pattern,
            backgroundImage: "var(--bg)",
            backgroundRepeat: "repeat-x",
          }}
        >
          <Hero />
          <div>
            <h1>{symbolData.name}</h1>
            <Box
              css={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                aspectRatio: "1/1",
                width: "260px",
                height: "260px",
                fontSize: "44px",
                lineHeight: "1",
                userSelect: "none",
                position: "relative",
                borderRadius: "18px",
                background: `hsla(260, 74%, 53%, 0.2)`,
                border: "2px solid hsla(259, 73%, 56%, 1.0)",
                backdropFilter: "blur(8px)",
                boxShadow:
                  "2px 3px 8px rgba(0, 0, 0, 0.06), 0px 28px 12px -8px rgba(0, 0, 0, 0.04)",
                boxSizing: "border-box",
              }}
            >
              {symbolData.symbol}
            </Box>
            <pre>
              <code>
                {symbolData.symbol} <br />
                {toUnicode(symbolData.symbol)} <br />
                {toHtml(symbolData.symbol)} <br />
                {toCSS(symbolData.symbol)} <br />
                {charToUrlEscapeCode(symbolData.symbol)} <br />
              </code>
            </pre>
            <button onClick={() => navigator.clipboard.writeText(pattern)}>
              Copy Pattern
            </button>
            <Box
              css={{
                display: "flex",
                margin: "80px 0",
                padding: "40px",
                background: `hsla(260, 74%, 53%, 8)`,
                border: "2px solid hsla(259, 73%, 56%, 1.0)",
                backdropFilter: "blur(8px)",
                boxShadow:
                  "2px 3px 8px rgba(0, 0, 0, 0.06), 0px 28px 12px -8px rgba(0, 0, 0, 0.04)",
                borderRadius: "18px",
                fontSize: "14px",
                textTransform: "uppercase",
                gap: "20px",
              }}
            >
              {previousSymbol && <a href={`/${previousSymbol}`}>← prev</a>}
              {previousSymbol && nextSymbol && " • "}
              {nextSymbol && <a href={`/${nextSymbol}`}>next →</a>}
            </Box>

            {isLoading || !categorySymbols ? (
              <CardSkeleton />
            ) : (
              <List className="glyphs">
                {categorySymbols.map((symbolData, index) => (
                  <Card
                    key={index + "searchk"}
                    title={symbolData.name}
                    data-symbol={symbolData.symbol}
                    href={`/${symbolData.name
                      .toLowerCase()
                      .replace(/ /g, "-")}`}
                    onClick={(e) => {
                      if (e.shiftKey) {
                        e.preventDefault();
                        navigator.clipboard.writeText(symbolData.symbol);
                        handleCopySymbol(symbolData.symbol);
                        toast.custom(() => (
                          <Toaster>
                            Copied <span>{symbolData.symbol}</span> to
                            clipboard!
                          </Toaster>
                        ));
                      }
                    }}
                  >
                    <span>{symbolData.symbol}</span>
                  </Card>
                ))}
              </List>
            )}
          </div>
          {/* <Search /> */}
          <Footer />
          {!isDev && <Carbon />}
        </Main>
      </Box>
    </>
  );
}

export default Symbol;
