import { keyframes, styled } from "@/theme";

const LoadingFrames = keyframes({
  "0%, to": { left: 0, right: "80%" },
  "25%, 75%": { left: 0, right: 0 },
  "50%": { left: "80%", right: 0 },
});

const Loading = styled("div", {
  color: "currentColor",
  display: "flex",
  boxSizing: "border-box",
  height: "4px",
  borderRadius: "4px",
  position: "relative",
  background: "hsla(0, 0%, 100%, 0.1)",
  width: "18px",
  "&::after, &::before": {
    content: '" "',
    position: "absolute",
    background: "hsla(0, 0%, 100%, 0.8)",
    height: "4px",
    borderRadius: "4px",
  },
  "&::before": {
    animation: `${LoadingFrames} 2s cubic-bezier(0, 0, 0.58, 1) infinite`,
    left: 0,
    right: "80%",
  },
  "&::after": {
    width: "18px",
    opacity: 0.3,
  },
});

export default Loading;
