import { globalCss } from "$/stitches.config";
import reset from "$/reset";

export const style = globalCss({
  ...reset,
  "#__next": {
    height: "100%",
  },
  body: {
    margin: 0,
    // fontFamily: "Inter, Arial, sans-serif",
    fontFamily: `"Inter var", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
    backgroundColor: "#5f19dd",
    backgroundImage:
      "radial-gradient(rgba(255,255,255,0.2) 1px,transparent 0),radial-gradient(rgba(255,255,255,0.2) 1px,transparent 0)",
    backgroundSize: "40px 40px",
    backgroundPosition: "0 0,20px 20px",
    paddding: "8vw",
    color: "white",
    fontWeight: "400",
    fontSize: "32px",
    letterSpacing: "-0.02em",
  },
  a: {
    color: "inherit",
    textDecoration: "none",
  },
  "*": {
    boxSizing: "border-box",
    position: "relative",
  },
  h1: {
    marginBlockEnd: "0.34em",
  },
  p: {
    marginBlockStart: "0",
    fontWeight: "350",
  },
  main: {
    gap: "$4",
    display: "flex",
    flexDirection: "column",
  },
});
