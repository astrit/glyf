import { useState, useEffect } from "react";
import { styled } from "@/theme";

const Layout = styled("div", {
  display: "flex",
  fontSize: "10px",
  flexDirection: "row",
  letterSpacing: "normal",

  a: {
    display: "flex",
    flexDirection: "row",
    padding: "10px",
    height: "48px",
    maxWidth: "430px",

    borderRadius: "8px",
    background: "hsla(360,100%,100%,0.04)",
    color: "hsla(260, 100%, 100%, 0.8)",
    border: "2px solid hsla(360,100%,100%, 0.02)",
    // padding: "16px 20px",
    display: "flex",
    backdropFilter: "blur(10px)",
    fontWeight: "300",
    letterSpacing: "initial",
    fontSize: "12px",
    gap: "10px",
    boxShadow: "rgb(0 0 0 / 2%) 2px 3px 8px, rgb(0 0 0 / 1%) 0px 8px 6px -3px",
    transition: "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  },
});

export default function Ad() {
  useEffect(() => {
    const script = document.createElement("script");
    // script.src = "//cdn.carbonads.com/carbon.js?serve=CE7DEK3M&placement=cssgg";
    script.src = "https://m.servedby-buysellads.com/monetization.js";
    script.id = "_carbonads_custom_js";
    script.async = true;
    const ads = document.querySelector("#ad");
    if (ads) {
      ads.appendChild(script);
    }
    const isBadgeBannerAvailable = document.querySelectorAll(
      "#badge-js #_custom_"
    )[0];

    if (typeof _bsa !== "undefined" && _bsa && !!!isBadgeBannerAvailable) {
      _bsa.init("custom", "CWYDC2QE", "placement:demo", {
        target: "#badge-js",
        template: `
          <a href="##link##" rel="sponsored noopener" target="_blank" title="##company## — ##tagline##">
            <img src="##image##">
            <div class="text">##company## — ##description##</div>
          </a>
        `,
      });
    }

    if (isBadgeBannerAvailable) {
      _bsa.reload("#badge-js");
    }
  }, []);

  return (
    <Layout id="ad">
      <div id="badge-js"></div>
    </Layout>
  );
}
