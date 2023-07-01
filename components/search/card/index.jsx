import { styled } from "@/theme";
import Link from "@/link";

// const CardStyled = styled("a", {
const CardStyled = styled(Link, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  aspectRatio: "1/1",
  fontSize: "24px",
  lineHeight: "1",
  color: "$white_alpha10",
  userSelect: "none",
  position: "relative",
  cursor: "pointer",
  borderRadius: "18px",
  backgroundColor: `hsla(260, 74%, 53%, 1.0)`,
  border: "2px solid hsla(259, 73%, 56%, 1.0)",
  transition: "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  boxShadow:
    "2px 3px 8px rgba(0, 0, 0, 0.06), 0px 28px 12px -8px rgba(0, 0, 0, 0.04)",
  boxSizing: "border-box",

  span: {
    transition: "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  },

  "&:hover, &.selected": {
    color: "$white_alpha100",
    backgroundColor: "hsla(260, 74%, 56%, 1.0)",
    borderColor: "hsla(209, 99%, 67%, 0.2)",
    borderRadius: "24px",

    span: {
      transform: "scale3d(1.3,1.3,1.3)",
    },
  },

  "&:active": {
    borderWidth: "12px",
    borderRadius: "28px",
    boxShadow:
      " 0px 1px 6px rgba(0, 0, 0, 0.06), 0px 20px 8px -4px rgba(0, 0, 0, 0.04)",

    span: {
      transform: "scale3d(1.1,1.1,1.1)",
    },
  },

  "&::after": {
    content: " ",
    position: "absolute",
    display: "flex",
    borderRadius: "18px",
    boxShadow:
      "2px 3px 8px rgba(0, 0, 0, 0.06), 0px 28px 12px -8px rgba(0, 0, 0, 0.04)",
    transition: "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    background:
      "linear-gradient(90deg, hsla(209, 99%, 67%, 1.0) 0%, #b447eb 95%)",
    width: "100%",
    height: "100%",
    zIndex: "-1",
    "@sm": {},
    willChange: "transform, opacity, border-radius, border-width, box-shadow",
    // display: "none",
    visibility: "hidden",
    transition: "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    transitionDelay: "background 0.8s",
  },

  "&:hover::after, &.selected::after": {
    // display: "flex",
    visibility: "visible",
    transform: "scale3d(1.12,1.12,1.12)",
    borderRadius: "24px",
    cursor: "pointer",
    background:
      "linear-gradient(100deg, hsla(209, 99%, 67%, 1.0) 0%, #b447eb 95%)",
  },
  "&:active::after": {
    transform: "scale3d(1.02, 1.02, 1.02)",
    borderRadius: "24px",
  },
});

const Card = ({ children, ...props }) => {
  return <CardStyled {...props}>{children}</CardStyled>;
};

Card.displayName = "Card";

export default Card;
