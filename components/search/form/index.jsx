import { styled } from "@/theme";

const FormStyled = styled("form", {
  display: "flex",
  flexDirection: "column",
  position: "sticky",
  top: "20px",
  zIndex: "1",
});

export default function Form({ children, ...props }) {
  return <FormStyled {...props}>{children}</FormStyled>;
}
