import { styled } from "@/theme";

const DrawerStyled = styled("div", {
  display: "flex",
  gap: "10px",
  padding: "14px 20px",
  borderRadius: "200px",
  backgroundColor: "hsla(0, 0%, 0%, 0.1)",
  alignItems: "center",
  backdropFilter: "blur(10px)",

  ul: {
    display: "flex",
    margin: 0,
    padding: 0,
    gap: "10px",
    alignItems: "center",

    li: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "20px",
      height: "20px",
    },
  },

  button: {
    display: "flex",
    borderRadius: "20px",
    backgroundColor: "hsla(0, 0%, 0%, 0.1)",
    border: "none",
    color: "white",
    cursor: "pointer",
    fontSize: "12px",
    textTransform: "uppercase",
    fontFamily: "inherit",
    width: "26px",
    height: "26px",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "10px",
    transition: "all 0.2s ease-in-out",
    userSelect: "none",

    "&:hover": {
      color: "hsla(0, 0%, 0%, 1)",
      backgroundColor: "white",
    },
  },
});

const Drawer = ({ children, ...props }) => {
  return (
    <DrawerStyled {...props}>
      <ul>{children}</ul>
    </DrawerStyled>
  );
};

Drawer.displayName = "Drawer";

export default Drawer;
