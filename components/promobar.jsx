import { useState, useEffect } from "react";
import Link from "next/link";
import { keyframes, styled } from "@/theme";

const flare = keyframes({
  "0%": {
    "-webkit-mask-image": `linear-gradient(60deg,#000 25%,rgba(0,0,0,.4) 50%,#000 75%)`,
    "mask-image": `linear-gradient(60deg,#000 25%,rgba(0,0,0,.4) 50%,#000 75%)`,
    "-webkit-mask-size": "400%",
    "mask-size": "400%",
    "-webkit-mask-position": "0",
    "mask-position": "0",
  },
  "100%": {
    "-webkit-mask-image":
      "linear-gradient(60deg,#000 25%,rgba(0,0,0,.4) 50%,#000 75%)",
    "mask-image": "linear-gradient(60deg,#000 25%,rgba(0,0,0,.4) 50%,#000 75%)",
    "-webkit-mask-size": "400%",
    "mask-size": "400%",
    "-webkit-mask-position": "100%",
    "mask-position": "100%",
  },
});

const Bar = styled("Link", {
  display: "flex",
  alignItems: "center",
  fontWeight: "300",
  gap: "20px",
  cursor: "pointer",
  fontSize: "14px",
  backgroundColor: "hsla(261, 76%, 56%, 1)",
  padding: "16px 22px",
  justifyContent: "center",
  color: "hsla(261, 76%, 90%, 1)",

  svg: {
    width: "auto",
    height: "20px",

    path: {
      fill: "none",
      stroke: "white",
      strokeWidth: "2px",
    },
  },

  "&:hover": {
    backgroundColor: "hsla(261, 76%, 54%, 1)",
  },
});

export default function PromoBar() {
  return (
    <Bar href="https://www.figma.com/community/file/1284635132283811437/glyf-app-6000-variable-glyphs">
      <svg
        width="17"
        height="26"
        viewBox="0 0 17 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8.001 21.333a3.668 3.668 0 0 1-3.666 3.666 3.668 3.668 0 0 1-3.667-3.666 3.668 3.668 0 0 1 3.667-3.667H8v3.667ZM.668 13a3.668 3.668 0 0 1 3.667-3.666H8v7.333H4.335a3.668 3.668 0 0 1-3.667-3.666ZM.668 4.667A3.668 3.668 0 0 1 4.335 1H8v7.333H4.335A3.668 3.668 0 0 1 .668 4.667ZM9 1h3.667a3.668 3.668 0 0 1 3.666 3.667 3.668 3.668 0 0 1-3.666 3.666H9V1ZM16.333 13a3.668 3.668 0 0 1-3.666 3.667A3.668 3.668 0 0 1 9 13.001a3.668 3.668 0 0 1 3.667-3.667 3.668 3.668 0 0 1 3.666 3.667Z" />
      </svg>
      6000+ variable glyphs now on Figma <span>👉 👉 👉</span>
    </Bar>
  );
}
