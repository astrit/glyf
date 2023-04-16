import { styled } from "@/theme";

const FilterStyled = styled("select", {
  display: "flex",
  // borderRadius: "400px",
  border: "none",
  // padding: "12px 16px",
  // border: "3px solid rgba(255,255,255,0.07)",
  background: "hsla(0, 0%, 0%, 0)",
  color: "white",
  outline: "none",
  // backdropFilter: "blur(10px)",
  appearance: "none",
  position: "absolute",
  top: "0",
  bottom: "0",
  left: "80px",
  margin: "auto",
  height: "28px",
  borderRight: "2px solid rgba(255,255,255,0.2)",
  width: "130px",
  minWidth: "130px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  paddingRight: "2ch",
  transition: "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
});

export default function Filter({ children, ...props }) {
  return <FilterStyled {...props}>{children}</FilterStyled>;
}
