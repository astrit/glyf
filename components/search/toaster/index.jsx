import { styled } from "@/theme";

const ToasterStyled = styled("div", {
  display: "flex",
  gap: "10px",
  alignItems: "center",
  fontFamily: "inherit",

  span: {
    lineHeight: "1",
    position: "relative",
    borderRadius: "4px",
    background: "hsla(260, 74%, 59%, 0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: "1",
    padding: "8px 16px",
  },
});

export default function Toaster({ children, ...props }) {
  return <ToasterStyled {...props}>{children}</ToasterStyled>;
}
