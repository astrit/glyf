import { globalCss } from "$/stitches.config";
import reset from "$/reset";

const gradient = `radial-gradient(rgba(255,255,255,0.2) 1px,transparent 0),radial-gradient(rgba(255,255,255,0.2) 1px,transparent 0), linear-gradient(180deg,hsla(261deg, 80%, 48%, 1),hsla(261deg, 80%, 30%, 1))`;

export const style = globalCss({
  ...reset,
  "#__next": {
    height: "100%",
  },
  body: {
    margin: 0,
    // ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"
    // fontFamily: "Inter, Arial, sans-serif",
    fontFamily: `"Inter var", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
    backgroundColor: "#5f19dd",
    // linear-gradient(hsla(261deg, 80%, 48%, 0.2), hsla(261deg, 80%, 38%, 0.5))
    backgroundImage: gradient,
    backgroundSize: "40px 40px, 40px 40px, cover",
    backgroundPosition: "0 0,20px 20px, center",
    // backgroundAttachment: "fixed",
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
