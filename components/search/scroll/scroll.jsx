import React, { useState, useEffect, useRef } from "react";
import { styled } from "@/theme";

export default function Scroll() {
  const [strokeOffset, setStrokeOffset] = useState(0);
  const [strokeDasharray, setStrokeDasharray] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const prog = scrollRef.current;
    const leng = prog.getTotalLength();

    // prog.style.strokeWidth = 4;
    // prog.style.stroke = "hsla(60, 0%, 100%, 1)";
    // prog.style.strokeDasharray = leng + " " + leng;
    // prog.style.strokeDashoffset = leng;

    function updateProgress() {
      const progress =
        leng -
        (window.pageYOffset * leng) /
          (document.body.scrollHeight - window.innerHeight);
      setStrokeOffset(progress);
      setStrokeDasharray(leng);
      // setStrokeDasharray(leng + " " + leng);
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
      // strokeDashoffset: "80",
      // strokeDasharray: "80",

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
}
