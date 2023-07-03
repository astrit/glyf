import { styled } from "@/theme";
import Shimmer from "@/search/shimmer";

const FormStyled = styled("form", {
  display: "flex",
  flexDirection: "column",
  position: "sticky",
  top: "20px",
  zIndex: "1",
  height: "90px",
});

const Form = ({ children, ...props }) => {
  return (
    <FormStyled {...props}>
      {children}
      <Shimmer />
    </FormStyled>
  );
};

Form.displayName = "Form";

export default Form;
