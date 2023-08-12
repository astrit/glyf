import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

import { getCssText } from "$/stitches.config";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Copy & Paste glyphs from CSS.GG" />
          <link
            rel="icon"
            type="image/svg+xml"
            href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='42' height='42' fill='none'%3E%3Ccircle cx='21' cy='21' r='20' fill='%235F19DD'/%3E%3Cpath d='M27 12a3 3 0 0 0-3 3v12a3 3 0 1 0 3-3H15a3 3 0 1 0 3 3V15a3 3 0 1 0-3 3h12a3 3 0 0 0 0-6Z' stroke='%23fff' stroke-width='2'/%3E%3C/svg%3E"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Caveat&display=swap&family=Flow+Circular&display=swap"
            rel="stylesheet"
          />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <Script
            src="https://m.servedby-buysellads.com/monetization.js"
            strategy="beforeInteractive"
          />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
