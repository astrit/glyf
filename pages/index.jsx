import Head from "next/head";
import Header from "@/header";
import Box from "@/box";
import { styled } from "@/theme";
import Glyphs from "g/list";
import SVGMap from "g/svg/svg";
import Footer from "@/footer";
import Carbon from "u/ads";
import Search from "@/search/search";
import Hero from "@/hero";

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
  return (
    <>
      <Box>
        <Head>
          <title>Glyphs — Copy & Paste — CSS.GG</title>
        </Head>
        <Header />
        <SVGMap />
        {/* <Noise /> */}
        <Main>
          <Hero />
          <Search />
          <Glyphs />
          <Footer />

          {/* Check for DEV ONLY LOAD */}
          {/* Check for DEV ONLY LOAD */}
          {/* Check for DEV ONLY LOAD */}
          {/* Check for DEV ONLY LOAD */}
          {/* Check for DEV ONLY LOAD */}
          {/* <Carbon /> */}
        </Main>
      </Box>
    </>
  );
}
