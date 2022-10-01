import { styled } from "@/theme";
import Symbol from "./symbol";
import { forwardRef } from "react";
import Raycast from "./raycast";

const SVGMap = styled("svg", { display: "none" });

export const SVG = forwardRef(
  ({ width, height, name, children, ...props }, ref) => {
    return (
      <SVGMap ref={ref}>
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="6.29"
            numOctaves="6"
            stitchTiles="stitch"
          />
        </filter>
        <Symbol name="Raycast" fill="">
          <Raycast />
        </Symbol>
      </SVGMap>
    );
  }
);

SVG.displayName = "SVG";

export default SVG;
