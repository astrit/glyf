import Head from "next/head";
import Header from "@/header";
import Box from "@/box";
import { styled } from "@/theme";
import Glyphs from "g/list";
import SVGMap from "g/svg/svg";
import Footer from "@/footer";
import Carbon from "u/ads";
import Button from "@/button";
import Search from "@/search/search";

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

const Link = styled("a", {
  textDecoration: "underline",
});

const Main = styled("main", {
  zIndex: "3",
  // maxWidth: "1920px",
  margin: "0 auto",
  width: "clamp(80vw, 80vw, 1920px)",
  padding: "1.5rem",
  paddingTop: "clamp(10vw, 24vh, 44vh)",
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
          <title>Glyphs — Copy & Paste — CSS.GG</title>
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
              // marginTop: "$6",
            }}
          >
            <div>
              <Box
                as="h1"
                css={{
                  marginBlockEnd: "0.64em",
                }}
              >
                Glyphs
              </Box>
              <Box
                as="span"
                css={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  fontSize: "16px",
                  letterSpacing: "normal",
                }}
              >
                ©
                <Box
                  css={{
                    display: "flex",
                    width: "60px",
                    height: "2px",
                    background: "hsla(360,100%,100%,0.2)",
                    borderRadius: "4px",
                  }}
                />
                <Link href="//css.gg">CSS.GG ↗</Link>
              </Box>
            </div>
            <Box
              css={{
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
              }}
            >
              <Button
                to="https://raycast.com/astrit"
                title="Raycast"
                svg="raycast"
              />
              <Button
                to="https://github.com/astrit/css.gg"
                title="8.7K+ GitHub stars"
                svg="github"
              />
            </Box>
          </Box>
          <Search />
          <Glyphs />
          <Footer />
          {/* {!process.env.NODE_ENV ||
            (process.env.NODE_ENV === "development" ? "" : <Carbon />)} */}
        </Main>
      </Box>
    </>
  );
}
