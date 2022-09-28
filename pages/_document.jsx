import Document, { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "$/stitches.config";
import SVGMap from "u/svg";
// import Noise from "u/noise";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="" />
          <link
            rel="icon"
            type="image/svg+xml"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2250%22 fill=%22%23000000%22></rect><path d=%22M63.13 63.13L44.38 63.13L44.38 59.38L40.63 59.38L40.63 55.63L36.88 55.63L36.88 44.38L40.63 44.38L40.63 40.63L44.38 40.63L44.38 36.88L63.13 36.88L63.13 40.63L48.13 40.63L48.13 44.38L44.38 44.38L44.38 55.63L48.13 55.63L48.13 59.38L55.63 59.38L55.63 51.88L51.88 51.88L51.88 48.13L63.13 48.13L63.13 63.13Z%22 fill=%22%23fff%22></path></svg>"
          />
          {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
            rel="stylesheet"
          /> */}
          {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,1000&display=swap"
            rel="stylesheet"
          /> */}
          <link
            href="assets/fonts/roboto.woff2"
            as="font"
            rel="preload prefetch"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* <Noise /> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
