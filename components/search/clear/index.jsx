import { styled } from "@/theme";

const ClearStyled = styled("button", {
  display: "flex",
  position: "absolute",
  right: "100px",
  top: "0",
  bottom: "0",
  margin: "auto",
  width: "26px",
  height: "26px",
  borderRadius: "20px",
  backgroundColor: "hsla(0, 0%, 0%, 0.1)",
  border: "none",
  color: "white",
  cursor: "pointer",
  fontSize: "12px",
  textTransform: "uppercase",
  fontFamily: "inherit",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "10px",
  transition: "all 0.2s ease-in-out",
  userSelect: "none",
});

export default function Clear({ children, ...props }) {
  return <ClearStyled {...props}>✗</ClearStyled>;
}
