import { styled } from "@/theme";

const FilterStyled = styled("select", {
  display: "flex",
  border: "none",
  background: "hsla(0, 0%, 0%, 0)",
  color: "white",
  outline: "none",
  appearance: "none",
  position: "absolute",
  top: "0",
  bottom: "0",
  left: "80px",
  margin: "auto",
  height: "38px",
  // borderRight: "2px solid rgba(255,255,255,0.2)",
  border: "1px solid rgba(255,255,255,0.09)",
  backgroundColor: "rgba(255,255,255,0.08)",
  borderRadius: "12px",
  width: "140px",
  minWidth: "130px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  padding: "0 20px",
  transition: "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  boxSizing: "border-box",
  fontSize: "11px",
  boxShadow:
    "rgba(0, 0, 0, 0.06) 2px 3px 8px, rgba(0, 0, 0, 0.04) 0px 28px 12px -8px",
});

const Filter = ({ children, ...props }) => {
  return <FilterStyled {...props}>{children}</FilterStyled>;
};

Filter.displayName = "Filter";

export default Filter;
