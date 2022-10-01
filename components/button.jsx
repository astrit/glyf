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
  transition: "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",

  "&:hover": {
    background: "hsla(360,100%,100%,0.06)",
    borderColor: "hsla(360,100%,100%, 0.04)",
    boxShadow: "rgb(0 0 0 / 4%) 2px 3px 8px, rgb(0 0 0 / 2%) 0px 8px 6px -3px",
  },

  svg: {
    color: "hsla(260, 100%, 100%, 1)",
  },
});

const SVG = styled("svg", {});
const Title = styled("span", {});

export const Button = forwardRef(
  ({ w, width, h, height, svg, title, href, to, ...props }, ref) => {
    return (
      <Wrapper href={to}>
        {svg && (
          <SVG width={w ? w : "1em"} height={h ? h : "1em"} {...props}>
            <use href={"#symbol-" + svg}></use>
          </SVG>
        )}
        {title && <Title>{title}</Title>}
      </Wrapper>
    );
  }
);

Button.displayName = "Button";

export default Button;
