import React from "react";
import { styled } from "@/theme";
import Box from "@/box";
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
});

const Button = styled(Box, {
  display: "flex",
  borderRadius: "8px",
  background: "rgba(255, 255, 255, 0.1)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  alignItems: "center",
  justifyContentc: "center",
  fontSize: "12px",
  padding: "12px 24px",
  cursor: "pointer",
  flexDirection: "column",
  flex: "1",
  boxShadow: `rgba(0, 0, 0, 0.06) 2px 3px 8px, rgba(0, 0, 0, 0.04) 0px 28px 12px -8px`,

  "&:after": {
    content: "attr(data-label)",
    textTransform: "uppercase",
    display: "flex",
    fontSize: "10px",
    opacity: "0.5",
    position: "absolute",
    bottom: "-20px",
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
  // getCategoryOfSelectedGlyph,
  selectedGlyph,
  currentGlyph,
  symbolsData,
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

  return (
    <Aside css={css} {...props}>
      <Header>
        {currentGlyph}
        {selectedGlyph && <span>{getCategoryOfSelectedGlyph()}</span>}
      </Header>
      <Glyph>{selectedGlyph ? selectedGlyph : ""}</Glyph>
      <Actions>
        <Button data-label="⌘ c">Copy</Button>
        <Button data-label="⌘ ⇧ c">Unicode</Button>
        <Button data-label="⌘ s">SVG</Button>
      </Actions>

      {/* <div>pattern</div> */}
      {/* {!selectedGlyph && (
        <>
          {toUni(selectedGlyph)} <br />
          {toHtml(selectedGlyph)} <br />
          {toCSS(selectedGlyph)} <br />
          {charToUrlEscapeCode(selectedGlyph)} <br />
        </>
      )} */}
    </Aside>
  );
};

Sidebar.displayName = "Sidebar";

export default Sidebar;
