import Head from "next/head";
import Header from "@/header";
import Box from "@/box";
import { styled } from "@/theme";
import SVGMap from "g/svg/svg";
import Footer from "@/footer";
import Carbon from "u/ads";
import Search from "@/search";
import Hero from "@/hero";
import PromoBar from "@/promobar";

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

  return (
    <>
      <Box>
        <Head>
          <title>Glyphs → CSS.GG</title>
          <meta
            name="description"
            content="6000+ cool glyphs at your fingertips! Courtesy of CSS.GG, easy to find and copy to your clipboard."
          />
        </Head>
        <PromoBar />
        <Header />
        <SVGMap />
        <Main>
          <Hero />
          <Search />
          <Footer />
          {/* {!isDev && <Carbon />} */}
        </Main>
      </Box>
    </>
  );
}
