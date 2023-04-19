import React from "react";
import { style } from "$/global";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "sonner";

export default function Glyphs({ Component, pageProps }) {
  style();
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
        duration={10000}
        toastOptions={{
          style: {
            borderRadius: "10px",
          },
        }}
      />
      <Analytics />
    </>
  );
}
