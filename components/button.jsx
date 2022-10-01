import BaseLink from "@/link";
import { styled } from "@/theme";
import { forwardRef } from "react";

const Wrapper = styled(BaseLink, {
  borderRadius: "8px",
  background: "hsla(360,100%,100%,0.04)",
  color: "hsla(260, 100%, 100%, 0.8)",
  fontSize: "15px",
  border: "2px solid hsla(360,100%,100%, 0.02)",
  padding: "16px 20px",
  display: "flex",
  backdropFilter: "blur(10px)",
  fontWeight: "300",
  letterSpacing: "initial",
  fontSize: "12px",
  gap: "10px",
  boxShadow: "rgb(0 0 0 / 2%) 2px 3px 8px, rgb(0 0 0 / 1%) 0px 8px 6px -3px",
});

const SVG = styled("svg", {});
const Title = styled("span", {});

export const Button = forwardRef(
  ({ svgw, width, svgh, height, svg, title, href, to, ...props }, ref) => {
    return (
      <Wrapper href={to}>
        {svg && (
          <SVG width={svgw} height={svgh}>
            <use href={"#symbol-" + svg}></use>
          </SVG>
        )}
        <Title>{title}</Title>
      </Wrapper>
    );
  }
);

Button.displayName = "Button";

export default Button;
