import Head from "next/head";
import Header from "@/header";
import Box from "@/box";
import { styled } from "@/theme";
import Glyphs from "g/list";
import SVGMap from "u/svg";

const Noise = styled("div", {
  mixBlendMode: "multiply",
  filter: "url(#noise) grayscale(100)",
  zIndex: "100",
  position: "fixed",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  pointerEvents: "none",
  opacity: 0.4,
  backgroundSize: "300px 300px",
});

export default function Home() {
  return (
    <>
      <Box
        css={{
          padding: "$4",
        }}
      >
        <Head>
          <title>⌘ glfs. — Copy & Paste</title>
        </Head>
        <Header />
        <SVGMap />
        <main>
          <Noise />
          <section>
            <h1>Glyphs</h1>
            <p>A list of glyphs from the makers of CSS.GG</p>
          </section>
          <Glyphs />
        </main>
      </Box>
    </>
  );
}
