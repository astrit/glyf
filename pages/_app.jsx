import React from "react";
import { style } from "$/global";
import splitbee from "@splitbee/web";

export default function gona({ Component, pageProps }) {
  style();
  splitbee.init();
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
