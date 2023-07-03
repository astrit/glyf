import { keyframes, styled } from "@/theme";

const InputStyled = styled("input", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "18px",
  padding: "26px 34px 26px 240px",
  fontSize: "24px",
  lineHeight: "1",
  backgroundColor: "rgba(255,255,255,0.06)",
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M18.319 14.433A8.001 8.001 0 0 0 6.343 3.868a8 8 0 0 0 10.564 11.976l.043.045 4.242 4.243a1 1 0 1 0 1.415-1.415l-4.243-4.242a1.116 1.116 0 0 0-.045-.042Zm-2.076-9.15a6 6 0 1 1-8.485 8.485 6 6 0 0 1 8.485-8.485Z' fill='white'/%3E%3C/svg%3E")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "left 26px center",
  backgroundSize: "28px 28px",
  backdropFilter: "blur(20px)",
  color: "white",
  border: "none",
  fontWeight: "300",
  outline: "none",
  border: "3px solid rgba(255,255,255,0.07)",
  userSelect: "none",
  height: "90px",
  boxShadow:
    "2px 3px 8px rgba(0, 0, 0, 0.06), 0px 28px 12px -8px rgba(0, 0, 0, 0.04)",
  transition:
    "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275), background 0.4s",
  "&::placeholder": {
    color: "rgba(255,255,255,0.3)",
  },

  "&:focus:placeholder": {
    color: "transparent",
  },

  "&:focus": {
    backgroundColor: "rgba(255,255,255,0.09)",
    borderColor: "rgba(255,255,255,0.2)",
    backgroundPosition: "left 30px center",
    paddingLeft: "246px",
  },

  "&:focus ~ select": {
    translate: "6px 0",
  },

  "&:not(:placeholder-shown) ~ div, &:focus ~ div": {
    scale: "0.9",
    opacity: "0",
  },

  "&:not(:placeholder-shown) ~ button, &:focus ~ button": {
    scale: "1",
    opacity: "1",
  },

  "&::before": {
    content: "''",
    display: "block",
    width: "20px",
    height: "20px",
    background: "#fff",
  },
});

const Input = ({ ...props }) => {
  return <InputStyled {...props} />;
};

Input.displayName = "Input";

export default Input;
