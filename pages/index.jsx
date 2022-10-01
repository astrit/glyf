import Head from "next/head";
import Header from "@/header";
import Box from "@/box";
import { styled } from "@/theme";
import Glyphs from "g/list";
import SVGMap from "g/svg/svg";
import Footer from "@/footer";
import Carbon from "u/ads";
import Button from "@/button";
import Search from "@/search/search";
import Hero from "@/hero";

const Noise = styled("div", {
  mixBlendMode: "multiply",
  filter: "url(#noise) grayscale(100)",
  zIndex: "-1",
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  pointerEvents: "none",
  opacity: 0.8,
  backgroundSize: "300px 300px",
});

const Main = styled("main", {
  zIndex: "3",
  margin: "0 auto",
  width: "clamp(80vw, 80vw, 1920px)",
  padding: "1.5rem",
  paddingTop: "clamp(10vw, 24vh, 44vh)",
  // paddingTop: "clamp(10vw, 24vh, 44vh)",

  // "@md": {
  //   paddingTop: "clamp(5vw, 14vh, 14vh)",
  // },
});

export default function Home() {
  return (
    <>
      <Box
      // css={{
      //   padding: "$4",
      // }}
      >
        <Head>
          <title>Glyphs — Copy & Paste — CSS.GG</title>
        </Head>
        <Header />
        <SVGMap />
        <Noise />
        <Main>
          <Hero />
          <Search />
          <Glyphs />
          <Footer />
          {/* {!process.env.NODE_ENV ||
            (process.env.NODE_ENV === "development" ? "" : <Carbon />)} */}
        </Main>
      </Box>
    </>
  );
}
