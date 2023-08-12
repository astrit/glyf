import { useState, useEffect } from "react";
import { styled } from "@/theme";
import { useRouter } from "next/router";

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

    borderRadius: "8px",
    background: "hsla(360,100%,100%,0.04)",
    color: "hsla(260, 100%, 100%, 0.8)",
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
  },
});

export default function Ad() {
  const [isAds, setAds] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const script = document.createElement("script");

    // console.log(script);
    // script.src = "//cdn.carbonads.com/carbon.js?serve=CE7DEK3M&placement=cssgg";
    script.src = "//m.servedby-buysellads.com/monetization.custom.js";
    // script.src = "https://m.servedby-buysellads.com/monetization.js";
    script.id = "_carbonads_js_custom";
    script.async = true;

    // const isAdReady = document.querySelectorAll("#ad")[0];
    if (typeof _bsa !== "undefined" && _bsa && !!!isAdReady) {
      _bsa.init("custom", "CWYDE5QE", "placement:badgeBannerDemo", {
        target: "#ad",
        template: `
            <a href="##link##" rel="sponsored noopener" target="_blank" title="##company## — ##tagline##">
                <img src="##logo##">
                <div class="sponsor-description">##description##</div>
                <div class="sponsor-cta">##callToAction##</div>
            </a>
            `,
      });
      return;
    }

    // const ads = document.querySelector("#ad");
    // if (ads) {
    //   ads.appendChild(script);
    // }
    if (typeof _bsa !== "undefined" && _bsa) {
      _bsa.reload("#ad");
    }
  }, [router.asPath]);

  return <Layout id="ad"></Layout>;
}
