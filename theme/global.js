import { globalCss } from "$/stitches.config";
import { keyframes, styled } from "@/theme";

import reset from "$/reset";

const gradient = `linear-gradient(to bottom, hsla(261, 80%, 48%, 0),hsla(261, 80%, 48%)), radial-gradient(rgba(255,255,255,0.2) 1px,transparent 0),radial-gradient(rgba(255,255,255,0.2) 1px,transparent 0),linear-gradient(to left, hsla(260, 100%, 100%, 0.03) 1px,transparent 0px, transparent),linear-gradient(to bottom, hsla(260, 100%, 100%, 0.04) 1px,transparent 0px, transparent), linear-gradient(to right, transparent 399px, hsla(261, 80%, 54%) 1px), linear-gradient(to top, transparent 399px, hsla(261, 80%, 54%) 1px)`;
const fonts = `"Inter var", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`;

const Shims = keyframes({
  to: {
    top: "100vh",
    opacity: "0",
  },
});

export const style = globalCss({
  ...reset,

  "@font-face": {
    fontFamily: "Inter var",
    fontWeight: "100 900",
    fontDisplay: "blocks",
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
    backgroundSize:
      "cover, 40px 40px, 40px 40px, 6px 100%, 100% 6px, 400px 100%, 100% 400px",
    backgroundPosition:
      "top center, 0 0,20px 20px, 18px 100%, 100% 18px, left, center",
    backgroundRepeat:
      "no-repeat, repeat, repeat, repeat-x, repeat-y, repeat-x, repeat-y",
    backgroundAttachment: "fixed, fixed, fixed, fixed, fixed, fixed,fixed",
  },

  body: {
    "--fonts": fonts,
    margin: 0,
    padding: 0,
    fontFamily: "var(--fonts)",
    paddding: "8vw",
    color: "white",
    fontWeight: "400",
    fontSize: "32px",
    letterSpacing: "-0.02em",

    "&::before": {
      content: "''",
      display: "flex",
      position: "fixed",
      width: "1px",
      height: "80px",
      top: "0",
      left: "0",
      transform: "translateX(399px) translateY(-460px)",
      background:
        "linear-gradient(to top,rgba(255,255,255,0.8), rgba(255,255,255, 0))",
      zIndex: "-1",
      animation: `${Shims} 4180ms linear infinite`,
      animationDelay: "2090ms",
    },
    "&::after": {
      content: "''",
      display: "flex",
      position: "fixed",
      top: "0",
      left: "0",
      width: "1px",
      height: "140px",
      transform: "translateX(799px) translateY(-280px)",
      background:
        "linear-gradient(to top,rgba(255,255,255,0.8), rgba(255,255,255, 0))",
      zIndex: "-1",
      animation: `${Shims} 6180ms linear infinite`,
      animationDelay: "4090ms",
    },
  },
  a: {
    color: "inherit",
    textDecoration: "none",
  },
  "*": {
    boxSizing: "border-box",
    position: "relative",
    // fontFamily: "inherit",
    // fontDisplay: "block",
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
});
