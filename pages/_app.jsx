import React from "react";
import { style } from "$/global";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "sonner";
import Carbon from "u/ads";

export default function Glyphs({ Component, pageProps }) {
  style();
  // console.log("Analytics", Analytics);
  const isDev = process.env.NODE_ENV === "development";
  return (
    <>
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
        duration={2428}
        toastOptions={{
          style: {
            borderRadius: "20px",
          },
        }}
      />
      <Analytics />
      <Carbon />
    </>
  );
}
