import React, { useState, useEffect } from "react";
import { styled } from "@/theme";

const Ad = styled("div", {
  display: "flex",

  a: {
    borderRadius: "8px",
    background: "hsla(360,100%,100%,0.04)",
    color: "hsla(260, 100%, 100%, 0.8)",
    fontSize: "15px",
    border: "2px solid hsla(360,100%,100%, 0.02)",
    padding: "16px 20px",
    display: "flex",
    backdropFilter: "blur(10px)",
    fontWeight: "300",
    letterSpacing: "initial",
    fontSize: "12px",
    gap: "10px",
    boxShadow: "rgb(0 0 0 / 2%) 2px 3px 8px, rgb(0 0 0 / 1%) 0px 8px 6px -3px",
    transition: "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    // lineHeight: "1",
    alignItems: "center",
    overflow: "hidden",
    maxWidth: "430px",

    img: {
      height: "12px",
      width: "auto",
    },

    "&:hover": {
      background: "hsla(360,100%,100%,0.06)",
      borderColor: "hsla(360,100%,100%, 0.04)",
      boxShadow:
        "rgb(0 0 0 / 4%) 2px 3px 8px, rgb(0 0 0 / 2%) 0px 8px 6px -3px",
      color: "hsla(260, 100%, 100%, 1)",
    },
  },
});

export default function Reklama() {
  const [adData, setAdData] = useState({ ads: [] });

  useEffect(() => {
    fetch("https://srv.buysellads.com/ads/CWYDE5QE.json")
      .then((response) => response.json())
      .then((data) => setAdData(data));
  }, []);

  const ad = adData.ads[0] || {};

  return (
    <Ad>
      {ad && (
        <a href={ad.ad_via_link}>
          <img src={ad.image} alt={ad.company} />
          <div>
            {ad.company} - {ad.description}
          </div>
        </a>
      )}
    </Ad>
  );
}
