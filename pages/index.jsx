import Head from "next/head";
import Header from "@/header";
import Box from "@/box";
import { styled } from "@/theme";
import Glyphs from "g/list";
import SVGMap from "g/svg/svg";
import Footer from "@/footer";
import Carbon from "u/ads";
// import Search from "@/search/three";
import Search from "@/search/search";
import Old from "@/search/old";
import Hero from "@/hero";
import Scroll from "@/search/scroll/scroll";

const Main = styled("main", {
  margin: "0 auto",
  width: "clamp(64vw, 80vw, 1620px)",
  padding: "1.5rem",
  // paddingTop: "clamp(10vw, 14vh, 44vh)",

  "@md": {
    width: "calc(100% - 10px)",
  },
});

export default function Home() {
  const isDev = process.env.NODE_ENV === "development";

  return (
    <>
      <Box>
        <Head>
          <title>Glyphs → CSS.GG</title>
          <meta
            name="description"
            content="5000+ cool glyphs at your fingertips! Courtesy of CSS.GG, easy to find and copy to your clipboard."
          />
        </Head>
        <Header />
        <SVGMap />
        {/* <Noise /> */}
        <Main>
          <Hero />
          {/* <Scroll /> */}
          {/* <Old /> */}
          <Search />
          {/* <Glyphs /> */}
          <Footer />

          {!isDev && <Carbon />}
        </Main>
      </Box>
    </>
  );
}
