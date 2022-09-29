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
  position: "fixed",
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
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "18px",
  fontSize: "8px",
  padding: "26px 34px 26px 80px",
  fontSize: "24px",
  lineHeight: "1",
  background: `rgba(255,255,255,0.06) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M18.319 14.433A8.001 8.001 0 0 0 6.343 3.868a8 8 0 0 0 10.564 11.976l.043.045 4.242 4.243a1 1 0 1 0 1.415-1.415l-4.243-4.242a1.116 1.116 0 0 0-.045-.042Zm-2.076-9.15a6 6 0 1 1-8.485 8.485 6 6 0 0 1 8.485-8.485Z' fill='white'/%3E%3C/svg%3E") no-repeat left 26px center/28px 28px`,
  backdropFilter: "blur(100px)",
  color: "white",
  border: "none",
  fontWeight: "300",
  outline: "none",
  fontFamily: `"Inter var", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
  border: "2px solid rgba(255,255,255,0.07)",

  boxShadow:
    "2px 3px 8px rgba(0, 0, 0, 0.06), 0px 28px 12px -8px rgba(0, 0, 0, 0.04)",
  transition:
    "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275), background 0.4s",

  "&::placeholder": {
    color: "rgba(255,255,255,0.4)",
  },
  "&:focus:placeholder": {
    color: "transparent",
  },
  "&:focus": {
    backgroundColor: "rgba(255,255,255,0.09)",
    borderColor: "rgba(255,255,255,0.2)",
    backgroundPosition: "left 30px center",
    backgroundSize: "30px 30px",
  },
  // "&:not(:placeholder-shown)": {},
});

const Link = styled("a", {
  textDecoration: "underline",
});

const Main = styled("main", {
  zIndex: "3",
  padding: "clamp(1.8rem, 2.5vw, 2.8rem)",
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
          <section>
            <h1>Glyphs</h1>
            <p>
              From — <Link href="//css.gg">CSS.GG ↗</Link>
            </p>
          </section>
          <Search
            // onKeyup="appSearch()"
            placeHolder="e.g heart ♥"
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
          {/* <button type="reset"><i class="gg-close"></i></button> */}
          <Glyphs />
          <Footer />
          {/* <Carbon /> */}
        </Main>
      </Box>
    </>
  );
}
