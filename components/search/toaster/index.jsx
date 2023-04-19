import { styled } from "@/theme";

const ToasterStyled = styled("div", {
  display: "flex",
  gap: "10px",
  alignItems: "center",
  fontFamily: "var(--fonts)",
  color: "hsla(261, 80%, 48%, 1.0)",

  span: {
    position: "relative",
    borderRadius: "4px",
    background: "hsla(260, 100%, 98%, 1)",
    border: "2px solid hsla(260, 100%, 96%, 1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: "1",
    padding: "8px 16px",
    fontSize: "16px",
    fontWeight: "500",
  },
});

const Toaster = ({ children, ...props }) => {
  return <ToasterStyled {...props}>{children}</ToasterStyled>;
};

Toaster.displayName = "Toaster";

export default Toaster;
