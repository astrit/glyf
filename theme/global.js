import { globalCss } from "$/stitches.config";
import reset from "$/reset";
const gradient = `linear-gradient(to bottom, hsla(261, 80%, 48%, 0),hsla(261, 80%, 48%)), radial-gradient(rgba(255,255,255,0.2) 1px,transparent 0),radial-gradient(rgba(255,255,255,0.2) 1px,transparent 0),linear-gradient(to left, hsla(260, 100%, 100%, 0.03) 1px,transparent 0px, transparent),linear-gradient(to bottom, hsla(260, 100%, 100%, 0.04) 1px,transparent 0px, transparent)`;
const fonts = `"Inter var", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`;

export const style = globalCss({
  ...reset,

  "@font-face": {
    fontFamily: "Inter var",
    fontWeight: "100 900",
    fontDisplay: "swap",
    fontStyle: "normal",
    fontNamedInstance: "Regular",
    src: 'url("../assets/fonts/inter.woff2") format("woff2")',
  },

  "#__next": {
    height: "100%",
  },

  html: {
    backgroundColor: "hsl(261, 80%, 48%)",
    backgroundImage: gradient,
    backgroundSize: "cover, 40px 40px, 40px 40px, 6px 100%, 100% 6px",
    backgroundPosition: "top center, 0 0,20px 20px, 18px 100%, 100% 18px",
    backgroundRepeat: "no-repeat, repeat, repeat, repeat-x, repeat-y",
    backgroundAttachment: "fixed, fixed, fixed, fixed, fixed",
  },

  body: {
    margin: 0,
    padding: 0,
    fontFamily: fonts,
    paddding: "8vw",
    color: "white",
    fontWeight: "400",
    fontSize: "32px",
    letterSpacing: "-0.02em",
    "-webkit-font-smoothing": "antialiased",

    "&:before": {
      content: "none",
      mixBlendMode: "multiply",
      filter: "url(#noise) grayscale(100)",
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      pointerEvents: "none",
      opacity: 0.8,
      backgroundSize: "300px 300px",
    },
  },
  a: {
    color: "inherit",
    textDecoration: "none",
  },
  "*": {
    boxSizing: "border-box",
    position: "relative",
    fontFamily: "inherit",
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
  ".selection-area": {
    border: "2px solid hsla(216deg, 86%, 63%, 0.3)",
    borderRadius: "20px",
    background: "hsla(216deg, 86%, 63%, 0.1)",
  },
  // "input, div": {
  //   fontFamily: fonts,
  // },
});
