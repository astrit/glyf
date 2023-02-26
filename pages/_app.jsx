import React from "react";
import { style } from "$/global";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "sonner";

export default function gona({ Component, pageProps }) {
  style();
  splitbee.init();
  return (
    <>
      <Component {...pageProps} />
      <Toaster
        richColors
        position="bottom-right"
        expand={true}
        toastOptions={{
          style: {
            width: "280px",
            paddingLeft: "26px",
            right: "0px",
            display: "flex",
            alignItems: "center",
            fontFamily: "Inter var, sans-serif",
            color: "hsla(260, 74%, 50%, 1.0)",
            boxShadow:
              "2px 3px 8px rgba(0, 0, 0, 0.06), 0px 28px 12px -8px rgba(0, 0, 0, 0.04)",
          },
        }}
      />
      <Analytics />
    </>
  );
}
