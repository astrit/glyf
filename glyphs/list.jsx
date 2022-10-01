import React, { useState, useEffect, useRef } from "react";
import Box from "@/box";
import { styled, keyframes } from "@/theme";
// https://graphemica.com/%5E
// https://graphemica.com/%5E
// https://graphemica.com/%5E
// https://graphemica.com/%5E
// https://graphemica.com/%5E

// const CopyAnimation =

// const CopyAnimation = keyframes({
//   "0%": { backgroundPosition: "-50% 0", opacity: "1" },
//   "100%": { backgroundPosition: "0 0", opacity: "0" },
// });

const Card = styled("li", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // borderRadius: "18px",
  aspectRatio: "1/1",
  objectFit: "cover",
  objectPosition: "center",
  fontWeight: "600",
  fontSize: "28px",
  lineHeight: "1",
  // background: "linear-gradient(hsl(261deg 80% 48%), hsl(261deg 80% 50%))",
  // color: "white",
  // border: "3px solid rgba(255,255,255,0.05)",
  // backgroundColor: "rgba(255,255,255,1)",
  color: "#0e0c1b",

  // boxShadow:
  //   "2px 3px 8px rgba(0, 0, 0, 0.06), 0px 28px 12px -8px rgba(0, 0, 0, 0.04)",
  // transition: "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  transition: "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",

  userSelect: "none",
  position: "relative",
  cursor: "pointer",
  span: {
    transition: "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    transitionDelay: "0.1s",
  },
  "&:hover span": {
    transform: "scale3d(1.4,1.4,1.4)",
  },
  "&:active span": {
    transform: "scale3d(1,1,1)",
  },

  "&::before": {
    content: " ",
    position: "absolute",
    display: "flex",
    borderRadius: "18px",
    boxShadow:
      "2px 3px 8px rgba(0, 0, 0, 0.06), 0px 28px 12px -8px rgba(0, 0, 0, 0.04)",
    transition: "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    background: "hsla(360, 100%, 100%, 1)",
    width: "100%",
    height: "100%",
    "@sm": {
      borderRadius: "4px",
    },
  },
  "&:hover::before": {
    transform: "scale3d(1.1,1.1,1.1)",
    borderRadius: "24px",
    cursor: "pointer",
  },
  "&:active::before": {
    transform: "scale3d(1, 1, 1)",
  },

  "&::after": {
    content: "attr(data-name) ' copied'",
    position: "absolute",
    bottom: "0",
    right: "5px",
    left: "5px",
    opacity: "0",
    transition: "all 0.2s ease-in-out",
    transitionDelay: "0.1s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: "12px",
    padding: "4px 8px",
    color: "hsla(176, 65%, 42%, 1)",
    background: "hsla(176, 65%, 42%, 0.1)",
    border: "1px solid hsla(176, 65%, 42%, 0.2)",
    borderRadius: "6px 6px 20px 20px",
  },
  // "&:hover::after": {
  // transform: "scale3d(1.1,1.1,1.1)",
  // borderRadius: "24px",
  // content: "👌",
  // opacity: "1",
  // bottom: "20px",
  // },
  "&:active::after": {
    opacity: "1",
    bottom: "6px",
  },
});

const Cards = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
  gap: "24px",
});

const glfs = [
  // "",
  // "⌘",
  // "♥",
  // "◆",
  // "●",
  // "★",
  // "⬓",
  // "©",
  // "®",
  "⁅",
  "⁆",
  "¦",
  "-",
  "–",
  "‒",
  "—",
  "―",
  "•",
  "◦",
  "‣",
  "⁌",
  "⁍",
  "·",
  "‥",
  "…",
  "‹",
  "›",
  "«",
  "»",
  "≤",
  "≥",
  "≠",
  "+",
  "−",
  "×",
  "÷",
  "±",
  "≈",
  "~",
  "¬",
  "†",
  "‡",
  "^",
  "®",
  "©",
  "℗",
  "™",
  "℠",
  "℡",
  "℻",
  "🅫",
  "🅪",
  "°",
  "¶",
  "⁋",
  "§",
  "∞",
  "∂",
  "∑",
  "∏",
  "∫",
  "√",
  "∅",
  "◊",
  "½",
  "⅓",
  "¼",
  "⅛",
  "⅟",
  "¾",
  "⅜",
  "⅚",
  "⅝",
  "⅞",
  "%",
  "‰",
  "‱",
  "⅍",
  "℆",
  "℅",
  "℀",
  "℁",
  "¨",
  "ˆ",
  "˜",
  "¯",
  "˘",
  "˙",
  "˚",
  "ˇ",
  "΅",
  "¸",
  "˛",
  "№",
  "℃",
  "℉",
  "Å",
  "ʘ",
  "℮",
  "←",
  "→",
  "⟵",
  "⟶",
  "⇐",
  "⇒",
  "⟸",
  "⟹",
  "↖",
  "↗",
  "↙",
  "↘",
  "↑",
  "↓",
  "↕",
  "↔",
  "⟷",
  "⇔",
  "⟺",
  "↰",
  "↱",
  "↵",
  "↳",
  "↴",
  "⏎",
  "⇤",
  "⇥",
  "⇞",
  "⇟",
  "↺",
  "↻",
  "⎋",
  "↩",
  "↪",
  "✓",
  "✗",
  "▲",
  "▼",
  "◄",
  "▶",
  "△",
  "▽",
  "◅",
  "▻",
  "⚠",
  "●",
  "○",
  "■",
  "□",
  "▢",
  "⬒",
  "⬓",
  "◆",
  "◇",
  "❖",
  "☀",
  "☼",
  "♥",
  "♡",
  "❤",
  "★",
  "☆",
  "⬆",
  "⇧",
  "⇪",
  "⌘",
  "⌃",
  "⌅",
  "⌥",
  "⎇",
  "⌫",
  "⌦",
  "⌧",
  "⏏",
  "◯",
  "⬜",
  "Ⓐ",
  "Ⓑ",
  "Ⓒ",
  "Ⓓ",
  "Ⓔ",
  "Ⓕ",
  "Ⓖ",
  "Ⓗ",
  "Ⓘ",
  "Ⓙ",
  "Ⓚ",
  "Ⓛ",
  "Ⓜ",
  "Ⓝ",
  "Ⓞ",
  "Ⓟ",
  "Ⓠ",
  "Ⓡ",
  "Ⓢ",
  "Ⓣ",
  "Ⓤ",
  "Ⓥ",
  "Ⓦ",
  "Ⓧ",
  "Ⓨ",
  "Ⓩ",
  "⓪",
  "➀",
  "➁",
  "➂",
  "➃",
  "➄",
  "➅",
  "➆",
  "➇",
  "➈",
  "🄰",
  "🄱",
  "🄲",
  "🄳",
  "🄴",
  "🄵",
  "🄶",
  "🄷",
  "🄸",
  "🄹",
  "🄺",
  "🄻",
  "🄼",
  "🄽",
  "🄾",
  "🄿",
  "🅀",
  "🅁",
  "🅂",
  "🅃",
  "🅄",
  "🅅",
  "🅆",
  "🅇",
  "🅈",
  "🅉",
  "¤",
  "₣",
  "₾",
  "₨",
  "₼",
  "₪",
  "₥",
  "₯",
  "₮",
  "₢",
  "₵",
  "₡",
  "₲",
  "₦",
  "₴",
  "₳",
  "₤",
  "₩",
  "₭",
  "₱",
  "₧",
  "₸",
  "₹",
  "€",
  "₽",
  "₺",
  "ƒ",
  "£",
  "¥",
  "¢",
  "$",
];

function Cardz(props) {
  const glfs = props.glfs;
  const [clicked, setClicked] = useState(false);
  // useEffect(() => {
  //   setClicked(true);
  // }, []);
  // const handleCopy = (event) => event.target.classList.add("copied");
  const glf = glfs.map((glf) => {
    return (
      <Card
        key={glf}
        onClick={() => {
          navigator.clipboard.writeText(glf);
          // splitbee.track("Copy", { Glyph: glf });
        }}
        data-name={glf}
        // className={`base-state ${clicked == true ? "blla" : "click-state"}`}
      >
        <span>{glf}</span>
      </Card>
    );
  });
  return (
    <div>
      <Box
        css={{
          fontSize: "14px",
          marginBottom: "40px",
          opacity: "0.6",
        }}
      >
        <div>
          <key>⇧</key> + Click to Copy — {glf.length}
        </div>
        {/* <div>Shift + Click to copy</div> */}
      </Box>
      <Cards>{glf}</Cards>
    </div>
  );
}

export default function Glyphs() {
  return <Cardz glfs={glfs} />;
}
