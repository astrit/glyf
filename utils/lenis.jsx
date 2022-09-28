// https://github.com/studio-freight/lenis
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function Scroll() {
  // console.log("Lenis", Lenis);
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => (t === 1 ? 4 : 1 - Math.pow(2, -10 * t)), // https://easings.net
      direction: "vertical",
      smooth: true,
      smoothTouch: true,
      touchMultiplier: 4,
    });
    //get scroll value
    lenis.on("scroll", ({ scroll, limit, velocity, direction, progress }) => {
      // console.log({ scroll, limit, velocity, direction, progress });
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  return this;
}
