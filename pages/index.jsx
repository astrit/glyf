import Head from "next/head";
import Header from "@/header";
import Box from "@/box";
import { styled } from "@/theme";
import Glyphs from "g/list";
import SVGMap from "u/svg";
import Footer from "@/footer";
import Carbon from "u/ads";

// https://www.designcise.com/web/tutorial/how-to-get-the-unicode-code-points-of-a-javascript-character
// https://www.designcise.com/web/tutorial/how-to-get-the-unicode-code-points-of-a-javascript-character
// https://www.designcise.com/web/tutorial/how-to-get-the-unicode-code-points-of-a-javascript-character
// https://www.designcise.com/web/tutorial/how-to-get-the-unicode-code-points-of-a-javascript-character
// https://www.designcise.com/web/tutorial/how-to-get-the-unicode-code-points-of-a-javascript-character
// https://www.designcise.com/web/tutorial/how-to-get-the-unicode-code-points-of-a-javascript-character

const Noise = styled("div", {
  mixBlendMode: "multiply",
  filter: "url(#noise) grayscale(100)",
  zIndex: "-1",
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  pointerEvents: "none",
  opacity: 0.8,
  backgroundSize: "300px 300px",
});

const Search = styled("input", {
  display: "flex",
  position: "sticky",
  top: "10px",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "18px",
  fontSize: "8px",
  padding: "26px 34px 26px 80px",
  fontSize: "24px",
  lineHeight: "1",
  background: `rgba(255,255,255,0.06) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M18.319 14.433A8.001 8.001 0 0 0 6.343 3.868a8 8 0 0 0 10.564 11.976l.043.045 4.242 4.243a1 1 0 1 0 1.415-1.415l-4.243-4.242a1.116 1.116 0 0 0-.045-.042Zm-2.076-9.15a6 6 0 1 1-8.485 8.485 6 6 0 0 1 8.485-8.485Z' fill='white'/%3E%3C/svg%3E") no-repeat left 26px center/28px 28px`,
  backdropFilter: "blur(200px)",
  color: "white",
  border: "none",
  fontWeight: "300",
  outline: "none",
  fontFamily: `"Inter var", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
  border: "3px solid rgba(255,255,255,0.07)",

  boxShadow:
    "2px 3px 8px rgba(0, 0, 0, 0.06), 0px 28px 12px -8px rgba(0, 0, 0, 0.04)",
  transition:
    "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275), background 0.4s",

  "&::placeholder": {
    color: "rgba(255,255,255,0.3)",
  },
  "&:focus:placeholder": {
    color: "transparent",
  },
  "&:focus": {
    backgroundColor: "rgba(255,255,255,0.09)",
    borderColor: "rgba(255,255,255,0.2)",
    backgroundPosition: "left 30px center",
    paddingLeft: "86px",
  },
  "&:not(:placeholder-shown)": {
    // color: "red",
  },
});

const Link = styled("a", {
  textDecoration: "underline",
});

const Main = styled("main", {
  zIndex: "3",
  // maxWidth: "1920px",
  margin: "0 auto",
  width: "clamp(80vw, 80vw, 1920px)",
  padding: "1.5rem",
});

// function appSearch() {
//   var appInput, inputValue, appGrid, appIcon, iconName, i, searchKey;
//   appInput = document.getElementById("s");
//   inputValue = appInput.value.toUpperCase();
//   appGrid = document.getElementsByTagName("app-grid");
//   appIcon = appGrid[0].getElementsByTagName("app-icon");

//   for (i = 0; i < appIcon.length; i++) {
//     iconName = appIcon[i].getAttribute("class");
//     iconTag = appIcon[i].getAttribute("data-tag");

//     iconKey = iconName.replace("-", " ") + iconTag;

//     searchKey = iconKey;

//     if (searchKey.toUpperCase().indexOf(inputValue) > -1) {
//       appIcon[i].style.display = "";
//     } else {
//       appIcon[i].style.display = "none";
//     }
//   }
// }

export default function Home() {
  return (
    <>
      <Box
        css={{
          padding: "$4",
        }}
      >
        <Head>
          <title>⌘ glfs. — Copy & Paste</title>
        </Head>
        <Header />
        <SVGMap />
        <Noise />
        <Main>
          <Box
            as={"section"}
            css={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginTop: "$6",
            }}
          >
            <div>
              <h1>
                Glyphs <sup>268</sup>
              </h1>
              <span>
                From — <Link href="//css.gg">CSS.GG ↗</Link>
              </span>
            </div>

            <Box
              as="a"
              href="https://github.com/astrit/css.gg"
              css={{
                borderRadius: "8px",
                background: "hsla(360,100%,100%,0.04)",
                color: "hsla(260, 100%, 100%, 0.8)",
                fontSize: "15px",
                border: "2px solid hsla(360,100%,100%, 0.02)",
                padding: "16px 20px",
                display: "flex",
                backdropFilter: "blur(10px)",
                fontWeight: "300",
                letterSpacing: "initial",
                fontSize: "12px",
                gap: "10px",
                boxShadow:
                  "rgb(0 0 0 / 2%) 2px 3px 8px, rgb(0 0 0 / 1%) 0px 8px 6px -3px",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.02751 0.333496C3.34571 0.333496 0.333332 3.40836 0.333332 7.16653C0.333332 10.1845 2.23002 12.7468 4.90769 13.6579C5.2424 13.7149 5.35397 13.4871 5.35397 13.3163C5.35397 13.1454 5.35397 12.7468 5.35397 12.1774C3.51307 12.576 3.12257 11.2664 3.12257 11.2664C2.84365 10.4692 2.39737 10.2414 2.39737 10.2414C1.72795 9.8428 2.39737 9.8428 2.39737 9.8428C3.06679 9.89974 3.4015 10.5261 3.4015 10.5261C4.01513 11.5511 4.96347 11.2664 5.35397 11.0955C5.40975 10.64 5.57711 10.3553 5.80024 10.1845C4.29405 10.0136 2.73208 9.44421 2.73208 6.82488C2.73208 6.08463 3.011 5.45827 3.4015 5.00274C3.4015 4.77497 3.12257 4.09166 3.51307 3.18059C3.51307 3.18059 4.07091 3.00977 5.35397 3.8639C5.91181 3.69307 6.46966 3.63613 7.02751 3.63613C7.58536 3.63613 8.14321 3.69307 8.70105 3.8639C9.98411 2.95283 10.542 3.18059 10.542 3.18059C10.9324 4.14861 10.6535 4.83191 10.5977 5.00274C11.044 5.45827 11.2672 6.08463 11.2672 6.82488C11.2672 9.44421 9.70518 10.0136 8.19899 10.1845C8.42213 10.4122 8.64527 10.8108 8.64527 11.4372C8.64527 12.3482 8.64527 13.0885 8.64527 13.3163C8.64527 13.4871 8.75684 13.7149 9.09155 13.6579C11.7692 12.7468 13.6659 10.1845 13.6659 7.16653C13.7217 3.40836 10.7093 0.333496 7.02751 0.333496Z"
                  fill="white"
                ></path>
              </svg>
              8.7K+ GitHub stars
            </Box>
          </Box>
          <Search
            // onKeyup="appSearch()"
            placeholder="e.g love → ♥"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            pattern="[A-Za-z0-9\-]+"
            // onFocusOut={() => {
            //   console.log("Focus out");
            //   this.placeholder("test");
            // }}
            // onBlur={() => {
            //   console.log("Focus out");
            // }}
            // onFocus={() => {
            //   console.log("Focus out");
            // }}
          />
          {/* <Box>
            <Box
              css={{
                display: "flex",
                background: "white",
                position: "absolute",
                right: "0",
                color: "black",
              }}
            >
              268
            </Box>
          </Box> */}

          {/* <button type="reset"><i class="gg-close"></i></button> */}
          <Glyphs />
          <Footer />
          {/* <Carbon /> */}
          <Box
            className="spotlight"
            css={{
              background:
                "linear-gradient(45deg, hsla(228, 60%, 44%, 1) 0%, hsl(265, 76%, 55%,0.6) 50%, hsl(257, 100%, 64%, 0.6) 100%)",
              filter: "blur(20vh)",
              height: "50vh",
              bottom: "-40vh",
              position: "fixed",
              bottom: "0",
              width: "100%",
              pointerEvents: "none",
              zIndex: "0",
              // display: "none",
              // mixBlendMode: "multiply",
              // opacity: "0.4",
            }}
          ></Box>
        </Main>
      </Box>
    </>
  );
}
