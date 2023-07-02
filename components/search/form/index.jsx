import { styled } from "@/theme";

const FormStyled = styled("form", {
  display: "flex",
  flexDirection: "column",
  position: "sticky",
  top: "20px",
  zIndex: "1",
  height: "90px",
  position: "relative",
  width: "100%",
});

const Form = ({ children, ...props }) => {
  return <FormStyled {...props}>{children}</FormStyled>;
};

Form.displayName = "Form";

export default Form;
