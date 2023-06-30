import React from "react";
import { style } from "$/global";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "sonner";
import Carbon from "u/ads";
import { ContentLoader } from "@/ContentLoader";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
// import Link from 'next/link';

import Head from "next/head";
import Header from "@/header";
import Box from "@/box";
import { styled } from "@/theme";
import SVGMap from "g/svg/svg";
import Footer from "@/footer";
// import Carbon from "u/ads";
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

const Aside = styled("aside", {
  position: "fixed",
  right: "20px",
  bottom: "20px",
  top: "20px",
  width: "420px",
  height: "calc(100vh - 40px)",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(20px)",
  zIndex: "1000",
  borderRadius: "8px",
});

export default function Glyphs({ Component, pageProps }) {
  const { pathname } = useRouter();
  style();
  // console.log("Analytics", Analytics);
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
        <Main>
          <Hero />
          <Search />
          <Footer />
          {/* {!isDev && <Carbon />} */}
        </Main>
      </Box>

      <Aside>
        <ContentLoader path={pathname}>
          {(content) => <Component {...pageProps} content={content} />}
        </ContentLoader>
      </Aside>

      <Component {...pageProps} />
      <Toaster
        // richColors
        // position="bottom-center"
        // expand={false}

        richColors
        theme="light"
        position="bottom-center"
        expand={false}
        closeButton={true}
        offset="40px"
        duration={10000}
        toastOptions={{
          style: {
            borderRadius: "10px",
          },
        }}
      />
      <Analytics />
      <Carbon />
    </>
  );
}
