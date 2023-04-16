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
  const { symbol } = router.query;
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
        category.symbols.filter((symbolData) => symbolData.symbol === symbol)
      );
      setSymbolData(matchingData[0]);
      const category = data.categories.category.find((category) =>
        category.symbols.some((symbolData) => symbolData.symbol === symbol)
      );
      setCategoryData(category);
      setIsLoading(false);
    }
    fetchData();
  }, [symbol]);

  if (!symbolData) {
    return <div>Loading...</div>;
  }

  // const categorySymbols = isData.categories.category[0].symbols;
  const categorySymbols = categoryData.symbols;

  console.log(categorySymbols);
  console.log(symbolData);

  const symbolIndex = categorySymbols.findIndex(
    (symbolData) => symbolData.symbol === symbol
  );

  console.log(symbolIndex);

  // return;

  const previousSymbol =
    symbolIndex > 0 ? categorySymbols[symbolIndex - 1].symbol : null;
  const nextSymbol =
    symbolIndex < categorySymbols.length - 1
      ? categorySymbols[symbolIndex + 1].symbol
      : null;

  console.log(categorySymbols);

  return (
    <>
      <Box>
        <Head>
          <title>{symbol} — Glyphs from CSS.GG</title>
          <meta
            name="description"
            content="5000+ cool glyphs at your fingertips! Courtesy of CSS.GG, easy to find and copy to your clipboard."
          />
        </Head>
        <Header />
        <SVGMap />
        <Main>
          <Hero />
          <div>
            <h1>{symbol}</h1>
            <pre>
              <code>
                {symbolData.symbol} <br />
                {symbolData.html_entity} <br />
                {symbolData.html_entity_decimal} <br />
                {symbolData.html_entity_hex} <br />
                {symbolData.c} <br />
                {symbolData.javascript} <br />
              </code>
            </pre>
            <p>
              {previousSymbol && <a href={`/${previousSymbol}`}>← prev</a>}
              {previousSymbol && nextSymbol && " • "}
              {nextSymbol && <a href={`/${nextSymbol}`}>next →</a>}
            </p>
            <p>
              {/* <small>From same category</small> */}
              {isLoading || !categorySymbols ? (
                <CardSkeleton />
              ) : (
                <List className="glyphs">
                  {categorySymbols.map((symbolData, index) => (
                    <Card
                      key={index + "searchk"}
                      title={symbolData.name}
                      data-symbol={symbolData.symbol}
                      href={`/${symbolData.symbol}`}
                      onClick={(e) => {
                        if (e.shiftKey) {
                          // router.push("/" + item.symbol);
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
              {/* {categorySymbols.map((symbolData, index) => (
                <span key={index}>
                  <a href={`/${symbolData.symbol}`}>{symbolData.symbol}</a>
                  {index < categorySymbols.length - 1 && ", "}
                </span>
              ))} */}
            </p>
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