import Head from "next/head";
import Header from "@/header";
import Box from "@/box";
import { styled } from "@/theme";
import Glyphs from "g/list";
import SVGMap from "u/svg";
import Footer from "@/footer";

const Noise = styled("div", {
  mixBlendMode: "multiply",
  filter: "url(#noise) grayscale(100)",
  zIndex: "1",
  position: "fixed",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  pointerEvents: "none",
  opacity: 0.6,
  backgroundSize: "300px 300px",
});

const Search = styled("input", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "18px",
  fontSize: "8px",
  padding: "20px 34px",
  fontSize: "34px",
  lineHeight: "1",
  background: "rgba(255,255,255,0.04)",
  backdropFilter: "blur(100px)",
  color: "white",
  border: "none",
  fontWeight: "300",
  outline: "none",
  boxShadow:
    "2px 3px 8px rgba(0, 0, 0, 0.06), 0px 28px 12px -8px rgba(0, 0, 0, 0.04)",
  transition: "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  "&::placeholder": {
    color: "white",
    fontWeight: "200",
  },
});

const Link = styled("a", {
  textDecoration: "underline",
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
            <p>
              From — <Link href="//css.gg">CSS.GG</Link>
            </p>
          </section>
          <Search placeholder="test" />
          <Glyphs />
          <Footer />
        </main>
      </Box>
    </>
  );
}
