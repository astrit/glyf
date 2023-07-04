import React from "react";
import { styled } from "@/theme";
import Box from "@/box";

const Aside = styled("aside", {
  display: "flex",
  padding: "40px",
  borderRadius: "28px",
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
  boxShadow:
    "rgba(0, 0, 0, 0.06) 2px 3px 8px, rgba(0, 0, 0, 0.04) 0px 28px 12px -8px",
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
  getCategoryOfSelectedGlyph,
  selectedGlyph,
  currentGlyph,
  ...props
}) => {
  return (
    <Aside css={css} {...props}>
      <Box
        css={{
          borderBottom: "1px solid hsla(262, 71%, 100%, 0.2)",
          padding: "40px",
          lineHeight: "1",
          fontSize: "18px",

          ".main": {
            fontSize: "140px",
          },
        }}
      >
        <h2>{currentGlyph}</h2>
        {selectedGlyph && <div>{getCategoryOfSelectedGlyph}</div>}
        <br />
        <span className="main">{selectedGlyph}</span>
        <div>unicode</div>
        <div>copy</div>
        <div>png</div>
        <div>svg</div>
        <div>pattern</div>
        {selectedGlyph && (
          <>
            {toUni(selectedGlyph)} <br />
            {toHtml(selectedGlyph)} <br />
            {toCSS(selectedGlyph)} <br />
            {charToUrlEscapeCode(selectedGlyph)} <br />
          </>
        )}
      </Box>

      {children}
    </Aside>
  );
};

Sidebar.displayName = "Sidebar";

export default Sidebar;
