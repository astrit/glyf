import Head from "next/head";
import React, { useEffect, useState } from "react";
import { style } from "$/global";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "sonner";
import Carbon from "u/ads";
import Header from "@/header";
import { styled } from "@/theme";
import Footer from "@/footer";
import Search from "@/search";
import Hero from "@/hero";
import SVGMap from "g/svg/svg";
import { useRouter } from "next/router";
import { SymbolsProvider } from "@/SymbolsContext";

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
  top: "20px",
  backdropFilter: "blur(20px)",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  height: "calc(100vh - 40px)",
  zIndex: "200",
  borderRadius: "10px",
  minWidth: "420px",
  padding: "40px",
  boxSizing: "border-box",
});

export default function Glyphs({ Component, pageProps }) {
  const [content, setContent] = useState(null);
  const router = useRouter();
  style();
  const isDev = process.env.NODE_ENV === "development";

  useEffect(() => {
    // Fetch new content when navigating to a new page
    const handleRouteChange = async (url) => {
      const res = await fetch(url);
      const newContent = await res.json();
      setContent(newContent);
    };

    // Update the content when navigating between pages
    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <SymbolsProvider>
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
      </Main>

      <Aside>
        {content && (
          <>
            <h2>{content.title}</h2>
            <p>{content.body}</p>
          </>
        )}
      </Aside>

      <Toaster
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
    </SymbolsProvider>
  );
}
