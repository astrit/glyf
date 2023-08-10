import React from "react";
import { styled } from "@/theme";
import Box from "@/box";
import Carbon from "u/ads";
import { style } from "$/global";
// import Button from "@/button";

const Aside = styled("aside", {
  display: "flex",
  // padding: "40px",
  borderRadius: "18px",
  position: "fixed",
  top: "40px",
  right: "40px",
  bottom: "40px",
  backdropFilter: "blur(120px)",
  background: "rgba(255, 255, 255, 0.06)",
  border: "3px solid rgba(255, 255, 255, 0.07)",
  color: "hsla(0, 0%, 100%, 1.0)",
  width: "460px",
  zIndex: "10000",
  opacity: "0",
  transition: "all 420ms",
  transform: "translate3d(100px, 0, 0)",
  boxSizing: "border-box",
  fontSize: "14px",
  fontWeight: "300",
  fontFamily: "Inter var, sans-serif",
  flexDirection: "column",
  letterSpacing: "normal",
  boxShadow: `
    rgba(0, 0, 0, 0.06) 2px 3px 8px, 
    rgba(0, 0, 0, 0.04) 0px 28px 12px -8px, 
    0 0 0 10px rgba(255, 255, 255, 0.02)
  `,

  "#ads": {
    width: "100%",
    height: "60px",
    // backgroundColor: "rgba(255, 255, 255, 0.06)",
    position: "relative",
    boxShadow: "none",

    inset: "unset",
    // bottom: "10px",
    // right: "10px",
    // width: "100%",
    // borderRadius: 0,

    ".carbon-wrap": {
      flexDirection: "row",
      position: "relative",
    },

    ".carbon-img": {
      width: "60px",
      height: "40px",
      aspectRatio: "16/9",

      img: {
        aspectRatio: "16/9",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
      },
    },

    ".carbon-text": {
      display: "flex",
      alignItems: "center",
    },

    ".carbon-poweredby": {
      position: "absolute",
      bottom: "0",
      right: "0",
      opacity: "0",
      visibility: "hidden",
    },
  },
});

const Header = styled("header", {
  display: "flex",
  flexDirection: "column",
  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  padding: "28px 40px",
  minHeight: "90px",
  gap: "4px",
  span: {
    opacity: "0.5",
    fontSize: "10px",
  },
  p: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    // display: "flex",
    width: "100%",
    height: "1lh",
    margin: "unset",
  },
});

const Glyph = styled("div", {
  display: "flex",
  flexDirection: "column",
  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  justifyItems: "center",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "80px",
  lineHeight: "1",
  padding: "40px",
  height: "240px",
  maxHeight: "240px",
  fontFamily: "Inter var, sans-serif",
  // background: "hsla(261, 80%, 54%, 0.4)",
});

const Actions = styled("div", {
  padding: "28px 40px",
  paddingBlockEnd: "40px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  gap: "10px",
  marginBottom: "auto",
});

const Button = styled(Box, {
  display: "flex",
  borderRadius: "8px",
  // background: "rgba(255, 255, 255, 0.1)",
  background: "hsla(360,100%,100%,0.1)",
  color: "hsla(260, 100%, 100%, 0.8)",
  border: "2px solid hsla(360,100%,100%, 0.02)",
  boxShadow: "rgb(0 0 0 / 2%) 2px 3px 8px, rgb(0 0 0 / 1%) 0px 8px 6px -3px",

  alignItems: "center",
  justifyContentc: "center",
  fontSize: "12px",
  padding: "12px 24px",
  cursor: "pointer",
  flexDirection: "column",
  flex: "1",
  // boxShadow: `rgba(0, 0, 0, 0.06) 2px 3px 8px, rgba(0, 0, 0, 0.04) 0px 28px 12px -8px`,

  "&:after": {
    content: "attr(data-label)",
    textTransform: "uppercase",
    display: "flex",
    fontSize: "10px",
    opacity: "0.5",
    position: "absolute",
    bottom: "-20px",
  },

  "&:active": {
    transform: "translateY(1px)",
    borderColor: "hsla(360,100%,100%, 0.2)",
  },
});

const Pattern = styled("div", {
  padding: "20px",
  borderRadius: "12px",
  border: "1px solid hsla(360,100%,100%, 0.1)",
  margin: "14px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(24px, 1fr))",
  fontFamily: "Inter var, sans-serif",
  gap: "20px",
  overflow: "hidden",
  height: "260px",
  pointerEvents: "none",
  userSelect: "none",
  maskImage: "linear-gradient(to top, black 10%, transparent 100%)",

  span: {
    display: "flex",
    width: "28px",
    height: "28px",
    alignItems: "center",
    justifyContent: "center",
  },
});

function toUni(char) {
  return `U+${char.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`;
}

function toHtml(char) {
  return `&#${char.toString().charCodeAt(0)};`;
}

function toCSS(char) {
  const codePoint = char.toString().codePointAt(0).toString(16);
  return `\\${codePoint} `;
}

function charToUrlEscapeCode(char) {
  return encodeURIComponent(char.toString());
}

const Sidebar = ({
  children,
  css,
  // handleClick,
  // getCategoryOfSelectedGlyph,
  copyToClipboardSymbol,
  copyToClipboardUnicode,
  selectedGlyph,
  currentGlyph,
  symbolsData,
  isContentVisible,
  pattern,
  ...props
}) => {
  function getCategoryOfSelectedGlyph() {
    if (symbolsData && selectedGlyph) {
      for (const category of symbolsData.categories.category) {
        const matchingSymbol = category.symbols.find(
          (symbol) => symbol.symbol === selectedGlyph
        );
        if (matchingSymbol) {
          return category.title;
        }
      }
    }
    return "";
  }

  // Generate the SVG
  function generateSVGContent() {
    const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
    <circle cx="12" cy="12" r="10" fill="red" />
  </svg>`;

    return svgString;
  }

  function downloadSVG() {
    // Generate the SVG content as a string
    const svgContent = generateSVGContent();

    // Create a Blob from the SVG content
    const blob = new Blob([svgContent], { type: "image/svg+xml" });

    // Create a downloadable URL
    const url = URL.createObjectURL(blob);

    // Create an anchor element
    const a = document.createElement("a");

    // Set the URL as the href attribute of the anchor element
    a.href = url;

    // Set the filename for download
    a.download = selectedGlyph + ".svg"; // Change the filename as desired

    // Trigger the click event programmatically
    a.dispatchEvent(new MouseEvent("click"));

    // Clean up
    URL.revokeObjectURL(url);
  }

  // function createSvgPatternFromChar(char) {
  //   const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  //   const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  //   const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
  //   svg.setAttribute("width", "64");
  //   svg.setAttribute("height", "64");
  //   rect.setAttribute("width", "100%");
  //   rect.setAttribute("height", "100%");
  //   rect.setAttribute("fill", "transparent");
  //   text.setAttribute("fill", "hsla(0, 100%, 100%, 0.08)");
  //   text.setAttribute("x", "50%");
  //   text.setAttribute("y", "50%");
  //   text.setAttribute("font-size", "48");
  //   text.setAttribute("font-weight", "normal");
  //   text.setAttribute("text-anchor", "middle");
  //   text.setAttribute(
  //     "font-family",
  //     '"Inter var", -apple-system, BlinkMacSystemFont, "Segoe UI"'
  //   );
  //   text.setAttribute("dominant-baseline", "central");
  //   text.textContent = char;
  //   svg.appendChild(rect);
  //   svg.appendChild(text);
  //   const svgString = new XMLSerializer().serializeToString(svg);
  //   const encodedSvg = encodeURIComponent(svgString);
  //   return `url('data:image/svg+xml;charset=utf-8,${encodedSvg}')`;
  // }
  // const pattern = createSvgPatternFromChar(currentGlyph);
  // console.log(pattern);

  function fakePattern(selectedGlyph, repeatCount) {
    const repeatedGlyphs = selectedGlyph.repeat(repeatCount);
    return Array.from(repeatedGlyphs).map((glyph, index) => {
      return <span key={index}>{glyph}</span>;
    });
  }

  return (
    <Aside css={css} {...props}>
      <Header>
        <p>{currentGlyph}</p>
        {selectedGlyph && <span>{getCategoryOfSelectedGlyph()}</span>}
      </Header>
      <Glyph>{selectedGlyph ? selectedGlyph : ""}</Glyph>
      <Actions>
        <Button
          data-label="⌘ c"
          onClick={(e) => copyToClipboardSymbol(selectedGlyph)}
        >
          Copy
        </Button>
        <Button
          data-label="⌘ ⇧ c"
          onClick={(e) => copyToClipboardUnicode(selectedGlyph)}
        >
          Unicode
        </Button>
        <Button data-label="⌘ s" onClick={(e) => downloadSVG()}>
          Download
        </Button>
      </Actions>
      <Pattern>{selectedGlyph ? fakePattern(selectedGlyph, 80) : ""}</Pattern>
      {/* <Box
        css={{
          backgroundImage: pattern,
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
          backgroundSize: "34px",
          borderRadius: "12px",
          // width: "100%",
          height: "200px",
          padding: "8px",
          margin: "14px",
          backgroundClip: "content-box",
          boxSizing: "border-box",
          border: "2px solid hsla(0, 100%, 100%, 0.1)",
        }}
      >
        Pattern
      </Box> */}

      {/* <textarea name="" id="" cols="30" rows="10"> */}
      {/* {pattern} */}
      {/* </textarea> */}
      {/* <div>pattern</div> */}
      {/* {!selectedGlyph && (
        <>
          {toUni(selectedGlyph)} <br />
          {toHtml(selectedGlyph)} <br />
          {toCSS(selectedGlyph)} <br />
          {charToUrlEscapeCode(selectedGlyph)} <br />
        </>
      )} */}
      <Box
        css={{
          padding: "14px",
          position: "relative",
          minHeight: "60px",
          // background: "hsla(260, 100%, 100%, 0.1)",
          // marginTop: "100%",
        }}
      >
        {isContentVisible && <Carbon />}
      </Box>
    </Aside>
  );
};

Sidebar.displayName = "Sidebar";

export default Sidebar;
