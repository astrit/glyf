import { useState, useEffect } from "react";
import { styled } from "@/theme";
// import { error } from "console";

const Ads = styled("div", {
  display: "flex",
  background: "rgba(255,255,255,1)",
  position: "fixed",
  right: "10px",
  bottom: "10px",
  width: "160px",
  padding: "10px",
  fontSize: "12px",
  fontFamily: "sans-serif",
  letterSpacing: "initial",
  borderRadius: "8px",
  zIndex: 1000,
  boxShadow:
    "rgb(0 0 0 / 10%) 2px 3px 8px, rgb(0 0 0 / 40%) -4px 28px 12px -8px",
  color: "rgb(14, 12, 27)",

  ".carbon-wrap": {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    img: {
      width: "100%",
      maxWidth: "100% !important",
      borderRadius: "6px",
      boxShadow:
        "rgb(0 0 0 / 6%) 2px 3px 8px, rgb(0 0 0 / 8%) 0px 28px 12px -8px",
    },
  },
  ".carbon-poweredby": {
    opacity: "0.4",
  },

  "#carbonads > span": {
    display: "flex",
    gap: "10px",
    flexDirection: "column",
  },

  "@sm": {
    bottom: 0,
    right: 0,
    width: "100%",
    borderRadius: 0,
    background: "rgba(255,255,255,0.7)",
    backdropFilter: "blur(10px)",

    ".carbon-wrap": {
      flexDirection: "row",
      position: "relative",
    },

    ".carbon-img": {
      width: "40px",
      height: "40px",

      img: {
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
    },
  },
});

export default function Carbon() {
  const [isAds, setAds] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//cdn.carbonads.com/carbon.js?serve=CE7DEK3M&placement=cssgg";
    script.id = "_carbonads_js";
    script.async = true;

    const ads = document.querySelector("#ads");
    if (ads) {
      ads.appendChild(script);
    }
  }, []);

  return <Ads id="ads" />;
}
