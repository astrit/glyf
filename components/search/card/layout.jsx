import { keyframes, styled } from "@/theme";

const flare = keyframes({
  "0%": {
    // backgroundSize: "100%",
    backgroundPosition: "center left",
    opacity: 0,
  },
  "50%": {
    // backgroundSize: "200%",
    backgroundPosition: "center center",
    opacity: 1,
  },
  "100%": {
    // backgroundSize: "100%",
    backgroundPosition: "center right",
    opacity: 0,
    visibility: "hidden",
  },
});

const Layout = styled("a", {
  // const CardStyled = styled(NextLink, {
  // const CardStyled = styled(a, {
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
  backgroundColor: `hsla(260, 74%, 53%, 1)`,
  border: "2px solid hsla(259, 73%, 56%, 1.0)",
  transition: "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  cursor: "pointer",
  boxShadow:
    "2px 3px 8px rgba(0, 0, 0, 0.06), 0px 28px 12px -8px rgba(0, 0, 0, 0.04)",
  boxSizing: "border-box",

  span: {
    transition: "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  },

  "&:hover, &.selected": {
    color: "$white_alpha100",
    backgroundColor: "hsla(260, 74%, 56%, 1.0)",
    borderColor: "hsla(209, 99%, 100%, 0.2)",
    // borderColor: "hsla(209, 99%, 67%, 0.2)",
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
    backgroundImage:
      "linear-gradient(230deg, hsla(209, 99%, 100%, 0), hsla(262, 72%, 100%, 1), hsla(209, 99%, 100%, 0))",
    // "linear-gradient(90deg, hsla(209, 99%, 67%, 1.0) 0%, #b447eb 50%)",
    backgroundSize: "400%",
    backgroundPosition: "center center",
    width: "100%",
    height: "100%",
    zIndex: "-1",
    "@sm": {},
    willChange: "transform, opacity, border-radius, border-width, box-shadow",
    // display: "none",
    visibility: "hidden",
    transition: "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    // transitionDelay: "all 1s",
  },

  "&:hover::after, &.selected::after": {
    // display: "flex",
    visibility: "visible",
    "--size": "calc(100% + 8px)",
    // transform: "scale3d(var(--size),var(--size),var(--size))",
    width: "var(--size)",
    height: "var(--size)",
    borderRadius: "24px",
    cursor: "pointer",
    animation: `${flare} 824ms linear forwards`,
    // animation: `${flare} 424ms cubic-bezier(.16,1,.3,1) forwards`,
    // animationDelay: "2s",
    // backgroundImage:
    //   "linear-gradient(100deg, hsla(209, 99%, 67%, 1.0) 0%, #b447eb 95%)",
  },
  "&:active::after": {
    transform: "scale3d(1.02, 1.02, 1.02)",
    borderRadius: "24px",
  },
});

export default Layout;
