import React from "react";
import { style } from "$/global";
// import Scroll from "u/lenis";
// import Noise from "u/noise";

export default function gona({ Component, pageProps }) {
  style();
  return (
    <>
      <Component {...pageProps} />
      {/* <Scroll /> */}
      {/* <Noise /> */}
    </>
  );
}

// export default gona;
