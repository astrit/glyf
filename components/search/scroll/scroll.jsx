import React, { useState, useEffect, useRef } from "react";
import { styled } from "@/theme";

const Scroll = () => {
  const [strokeOffset, setStrokeOffset] = useState(0);
  const [strokeDasharray, setStrokeDasharray] = useState(0);
  const [showSecondCircle, setShowSecondCircle] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const prog = scrollRef.current;
    const leng = prog.getTotalLength();

    function updateProgress() {
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      const scrollPosition = window.pageYOffset;
      const progress =
        leng - (scrollPosition * leng) / (documentHeight - windowHeight);
      setStrokeOffset(progress);
      setStrokeDasharray(leng);

      const scrollPercentage =
        (scrollPosition / (documentHeight - windowHeight)) * 100;
      setShowSecondCircle(scrollPercentage >= 20);
    }

    function handleScroll() {
      updateProgress();
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const SVG = styled("svg", {
    position: "absolute",
    right: "74px",
    top: "0",
    bottom: "0",
    margin: "auto",

    circle: {
      strokeWidth: "4",
      stroke: "hsla(60, 0%, 100%, 1)",
      strokeLinecap: "round",
      transition: "all 0.3s ease",

      "&:nth-child(2)": {
        stroke: "hsla(60, 0%, 100%, 0.1)",
        strokeWidth: "2",
      },
    },

    polyline: {
      strokeWidth: "2",
      stroke: "hsla(60, 0%, 100%, 1)",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      transition: "all 0.3s ease",
      transitionDelay: "0.3s",
      opacity: showSecondCircle ? 1 : 0,
    },
  });

  function handleScrollToTop() {
    const duration = 500; // Adjust the duration as needed

    const start = window.pageYOffset;
    const startTime =
      "now" in window.performance ? performance.now() : new Date().getTime();

    const scrollStep = () => {
      const currentTime =
        "now" in window.performance ? performance.now() : new Date().getTime();
      const elapsedTime = currentTime - startTime;
      const newPosition = easeInOutCubic(elapsedTime, start, -start, duration);
      window.scroll(0, newPosition);

      if (elapsedTime < duration) {
        requestAnimationFrame(scrollStep);
      }
    };

    // Easing function - https://gist.github.com/gre/1650294
    const easeInOutCubic = (t, b, c, d) => {
      // t: current time, b: start value, c: change in value, d: duration
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t * t + b;
      t -= 2;
      return (c / 2) * (t * t * t + 2) + b;
    };

    requestAnimationFrame(scrollStep);
  }

  return (
    <SVG
      onClick={handleScrollToTop}
      width="28"
      height="28"
      viewBox="0 0 26 26"
      fill="none"
    >
      <circle
        ref={scrollRef}
        cx="13"
        cy="13"
        r="10"
        strokeDasharray={strokeDasharray == 0 ? 1000 : strokeDasharray}
        strokeDashoffset={strokeOffset == 0 ? 1000 : strokeOffset}
      />
      <circle
        cx="13"
        cy="13"
        r="10"
        strokeDasharray="-1000"
        strokeDashoffset="-1000"
      />
      {/* <polyline points="16 10 12 6 8 10"></polyline> */}
      <polyline points="16 14 13 11 10 14"></polyline>
    </SVG>
  );
};

Scroll.displayName = "Scroll";

export default Scroll;
