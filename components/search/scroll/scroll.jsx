import React, { useState, useEffect, useRef } from "react";
import { styled } from "@/theme";

const Scroll = () => {
  const [strokeOffset, setStrokeOffset] = useState(0);
  const [strokeDasharray, setStrokeDasharray] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const prog = scrollRef.current;
    const leng = prog.getTotalLength();

    function updateProgress() {
      const progress =
        leng -
        (window.pageYOffset * leng) /
          (document.body.scrollHeight - window.innerHeight);
      setStrokeOffset(progress);
      setStrokeDasharray(leng);
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
  });

  return (
    <SVG width="28" height="28" viewBox="0 0 26 26" fill="none">
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
    </SVG>
  );
};

Scroll.displayName = "Scroll";

export default Scroll;
