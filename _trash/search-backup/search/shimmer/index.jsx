import { keyframes, styled } from "@/theme";

// const ShimmerKeys = keyframes({
//   "0%": { rotate: "0deg" },
//   "15%, 35%": { rotate: "90deg" },
//   "65%, 85%": { rotate: "270deg" },
//   "100%": { rotate: "360deg" },
// });

const ContainerKeys = keyframes({
  //   "0%": { backgroundPositionX: "0%", opacity: 0 },
  //   "50%": { backgroundPositionX: "28%", opacity: 1 },
  //   "100%": { backgroundPositionX: "100%", opacity: 0 },
  to: { backgroundPositionX: "100%", opacity: 0 },
});

export const Shimmer = styled("div", {
  display: "flex",
  position: "absolute",
  width: "100%",
  height: "1px",
  borderRadius: "40px",
  bottom: "2px",
  background:
    "linear-gradient(to right,rgba(255,255,255,0), rgba(255,255,255,0.8), rgba(255,255,255,0)) no-repeat center left -100px/80px 1px",
  animation: `${ContainerKeys} 4180ms cubic-bezier(0.8,0.08,0.01,0.84) infinite`,
  //   animation: `${ContainerKeys} 4480ms cubic-bezier(0.8,0.08,0.01,0.84) infinite`,
  //   animationDelay: "4s",
});
