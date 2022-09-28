/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import Header from "@/header";
import Box from "@/box";
import Logo from "g/logo";
import SVGMap from "u/svg";
import { styled } from "@/theme";

const Noise = styled("div", {
  mixBlendMode: "multiply",
  filter: "url(#noise)",
  zIndex: "2000",
  position: "fixed",
  width: "8000px",
  height: "8000px",
  top: 0,
  left: 0,
  pointerEvents: "none",
  opacity: 0.6,
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
          <title>glf</title>
        </Head>
        <Header />
        <main>
          <SVGMap />
          <Box>
            <Noise />
            <Logo />
            <h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h1>
          </Box>
        </main>
      </Box>
    </>
  );
}
