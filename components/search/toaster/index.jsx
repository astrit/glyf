import { styled } from "@/theme";

const ToasterStyled = styled("div", {
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  letterSpacing: "normal",
  userSelect: "none",
  lineHeight: "1",
  fontFamily: "Inter var, sans-serif",

  div: {
    display: "flex",
    height: "40px",
    padding: "0 20px",
    fontSize: "22px",
    alignItems: "center",
    justifyContent: "center",
    justifyItems: "center",
    textAlign: "center",
    borderRight: "1px solid rgba(0, 0, 0, 0.1)",
    marginRight: "20px",
    gap: "10px",
    flexDirection: "row",
    lineHeight: "1",

    span: {
      fontSize: "12px",
    },
  },
});

const Toaster = ({ children, ...props }) => {
  return <ToasterStyled {...props}>{children}</ToasterStyled>;
};

Toaster.displayName = "Toaster";

export default Toaster;
