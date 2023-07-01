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
  lineHeight: "1",
  alignItems: "center",
  overflow: "hidden",

  "&:hover": {
    background: "hsla(360,100%,100%,0.06)",
    borderColor: "hsla(360,100%,100%, 0.04)",
    boxShadow: "rgb(0 0 0 / 4%) 2px 3px 8px, rgb(0 0 0 / 2%) 0px 8px 6px -3px",
    color: "hsla(260, 100%, 100%, 1)",

    svg: {
      transform: "scale3d(1.2,1.2,1.2)",

      "&:first-child": {
        opacity: "1",
        transform:
          "scale3d(2,2,2) scaleX(2) scaleY(2) translate3d(40%, 45%, 0)",
      },
    },
  },

  svg: {
    color: "hsla(260, 100%, 100%, 1)",
    transition: "all 820ms",
    position: "relative",
    zIndex: "1",

    "&:first-child": {
      filter: "blur(5px)",
      transform: "scale3d(2,2,2) scaleX(2) scaleY(2) translate3d(40%, 85%, 0)",
      position: "absolute",
      opacity: "0.6",
    },
  },
});

const SVG = styled("svg", {});
const Title = styled("div", {
  fontWeight: "500",
});

const Count = styled("span", {
  opacity: "0.5",
});

export const Button = forwardRef(
  ({ w, width, h, height, svg, title, count, href, to, ...props }, ref) => {
    return (
      <Wrapper href={to} target="_blank">
        {svg && (
          <>
            <SVG width={w ? w : "1em"} height={h ? h : "1em"} {...props}>
              <use href={"#symbol-" + svg}></use>
            </SVG>
            <SVG width={w ? w : "1em"} height={h ? h : "1em"} {...props}>
              <use href={"#symbol-" + svg}></use>
            </SVG>
          </>
        )}
        {title && (
          <>
            <Title>{title}</Title>
            <Count>{count}</Count>
          </>
        )}
      </Wrapper>
    );
  }
);

Button.displayName = "Button";

export default Button;
