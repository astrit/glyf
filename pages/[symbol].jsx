import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import data from "../public/data.json";
import { toURL } from "@/search/utils";
import Head from "next/head";
import Header from "@/header";
import Box from "@/box";
import { styled } from "@/theme";
import SVGMap from "g/svg/svg";
import Footer from "@/footer";
import Carbon from "u/ads";
import Search from "@/search";
import Hero from "@/hero";

const Main = styled("main", {
  margin: "0 auto",
  width: "clamp(64vw, 80vw, 1620px)",
  padding: "1.5rem",

  "@md": {
    width: "calc(100% - 10px)",
  },
});

export default function Home() {
  const isDev = process.env.NODE_ENV === "development";
  const router = useRouter();
  const { symbol } = router.query;
  const [matchedSymbol, setMatchedSymbol] = useState(null);

  useEffect(() => {
    if (symbol) {
      const formattedSymbol = symbol.replace(/-/g, " ");

      const matchedSymbol = data.categories.category.flatMap((category) =>
        category.symbols.find(
          (item) => item.name.toLowerCase() === formattedSymbol.toLowerCase()
        )
      );

      if (matchedSymbol) {
        setMatchedSymbol(matchedSymbol[0]);
      }
    }
  }, [symbol]);

  return (
    <>
      <Box>
        <Head>
          <title>{matchedSymbol.symbol} → CSS.GG</title>
          <meta
            name="description"
            content="600 + cool glyphs at your fingertips! Courtesy of CSS.GG, easy to find and copy to your clipboard."
          />
        </Head>
        <Header />
        <SVGMap />
        <Main>
          <Hero />
          {matchedSymbol && <Search selected={matchedSymbol.symbol} />}
          <Footer />
        </Main>
      </Box>
    </>
  );
}
