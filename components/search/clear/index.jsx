import { styled } from "@/theme";

const ClearStyled = styled("button", {
  display: "flex",
  position: "absolute",
  right: "25px",
  top: "0",
  bottom: "0",
  margin: "auto",
  width: "32px",
  height: "32px",
  borderRadius: "8px",
  backgroundColor: "rgba(255,255,255,0.06)",
  border: "none",
  color: "white",
  cursor: "pointer",
  fontSize: "14px",
  textTransform: "uppercase",
  fontFamily: "inherit",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "10px",
  border: "1px solid rgba(255,255,255,0.07)",
  transition: "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  userSelect: "none",
  opacity: 0,
  scale: "0.9",
});

export default function Clear({ children, ...props }) {
  return (
    <ClearStyled {...props}>
      <svg width="1em" height="1em">
        <use href="#symbol-close"></use>
      </svg>
    </ClearStyled>
  );
}
