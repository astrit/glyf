import React, { useState, useEffect } from "react";
import { styled } from "@/theme";
import Image from "next/image";

const Ad = styled("div", {
  display: "flex",

  a: {
    borderRadius: "8px",
    background: "hsla(360,100%,100%,0.04)",
    color: "hsla(260, 100%, 100%, 0.5)",
    fontSize: "10px",
    border: "2px solid hsla(360,100%,100%, 0.02)",
    padding: "14px",
    display: "flex",
    backdropFilter: "blur(10px)",
    fontWeight: "300",
    letterSpacing: "initial",
    gap: "8px",
    // height: "48px",
    boxShadow: "rgb(0 0 0 / 2%) 2px 3px 8px, rgb(0 0 0 / 1%) 0px 8px 6px -3px",
    transition: "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    lineHeight: "1.2",
    alignItems: "center",
    overflow: "hidden",
    maxWidth: "320px",
    opacity: "0.8",

    img: {
      height: "24px",
      width: "auto",
    },

    span: {
      color: "hsla(260, 100%, 100%, 1)",
      fontWeight: "500",
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

  const ad = adData.ads.length > 0 ? adData.ads[0] : null;

  //   const shouldDisplayAd = ad && ad.image && ad.company && ad.description;

  //   {ad.image && (
  //     <Image src={ad.image} alt={ad.company} width={24} height={24} />
  //   )}

  return (
    <>
      {ad && ad.image && (
        <Ad>
          <a
            href={ad.statlink}
            target="_blank"
            rel="sponsored noopener noreferrer"
          >
            {ad.image && <img src={ad.image} alt={ad.company} />}
            {ad.company && (
              <div>
                <span>{ad.company}</span> {ad.description}
              </div>
            )}
          </a>
        </Ad>
      )}
    </>
  );
}
