import { styled } from "@/theme";
import Box from "@/box";

const SVG = styled("svg", { display: "none" });
export default function SVGMap() {
  return (
    <SVG>
      <filter id="noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="6.29"
          numOctaves="6"
          stitchTiles="stitch"
        />
      </filter>
    </SVG>
  );
}
