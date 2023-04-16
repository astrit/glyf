import { styled } from "@/theme";
import Symbol from "./symbol";
import { forwardRef } from "react";
import Raycast from "./raycast";
import Github from "./github";
import Apple from "./apple";
import Windows from "./windows";
import Figma from "./figma";
import Close from "./close";
import Youtube from "./youtube";

const SVGMap = styled("svg", { display: "none" });

export const SVG = forwardRef(
  ({ width, height, name, children, w, h, ...props }, ref) => {
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
        <Symbol name="Raycast" box="0 0 14 14">
          <Raycast />
        </Symbol>
        <Symbol name="Apple" box="0 0 24 24">
          <Apple />
        </Symbol>
        <Symbol name="Windows" box="0 0 24 24">
          <Windows />
        </Symbol>
        <Symbol name="Figma" box="0 0 17 24">
          <Figma />
        </Symbol>
        <Symbol name="Github" box="0 0 14 14">
          <Github />
        </Symbol>
        <Symbol name="Close" box="0 0 24 24">
          <Close />
        </Symbol>
        <Symbol name="Youtube" box="0 0 24 24">
          <Youtube />
        </Symbol>
      </SVGMap>
    );
  }
);

SVG.displayName = "SVG";

export default SVG;
