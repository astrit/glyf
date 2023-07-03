import { keyframes, styled } from "@/theme";

const TopKeys = keyframes({
  to: { backgroundPosition: "center left 100%", opacity: 0 },
});
const BottomKeys = keyframes({
  to: {
    backgroundPosition: "center right 100%",
    opacity: 0,
  },
});

const Layout = styled("span", {
  display: "blocks",
  position: "absolute",
  width: "100%",
  height: "100%",
  pointerEvents: "none",
  borderRadius: "18px",
  overflow: "hidden",
});

const Top = styled("div", {
  "--bg-a": "rgba(255,255,255,0)",
  "--bg-b": "rgba(255,255,255,1)",
  position: "absolute",
  width: "100%",
  height: "1px",
  backgroundImage: "linear-gradient(to right,var(--bg-a), var(--bg-b))",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center left -200px",
  backgroundSize: "80px 1px",
  top: "1px",
  animation: `${TopKeys} 7180ms cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards infinite`,
  // animationDelay: "100ms",
  willChange: "background-position, opacity",
});

const Bottom = styled("div", {
  "--bg-a": "rgba(255,255,255,1)",
  "--bg-b": "rgba(255,255,255,0)",
  position: "absolute",
  width: "100%",
  height: "1px",
  backgroundImage: "linear-gradient(to right,var(--bg-a), var(--bg-b))",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center right -200px",
  backgroundSize: "80px 1px",
  bottom: "1px",
  animation: `${BottomKeys} 8180ms cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards infinite`,
  animationDelay: "2000ms",
  willChange: "background-position, opacity",
});

const Shimmer = ({ ...props }) => {
  return (
    <Layout {...props}>
      <Top />
      <Bottom />
    </Layout>
  );
};

Shimmer.displayName = "Shimmer";

export default Shimmer;
