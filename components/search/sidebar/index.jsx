import React from "react";
import { styled } from "@/theme";

const Aside = styled("aside", {
  display: "flex",
  padding: "40px",
  borderRadius: "18px",
  position: "fixed",
  top: "40px",
  right: "40px",
  bottom: "40px",
  backdropFilter: "blur(120px)",
  background: "hsla(263, 74%, 69%, 0.1)",
  width: "460px",
  zIndex: "10000",
  opacity: "0",
  transition: "all 420ms",
  transform: "translate3d(100px, 0, 0)",
  boxShadow:
    "rgba(0, 0, 0, 0.06) -2px -3px 8px, rgba(0, 0, 0, 0.04) 0px -28px 12px -8px",

  button: {},
});

const Sidebar = ({ children, css }, ...props) => {
  return (
    <Aside css={css} {...props}>
      {children}
    </Aside>
  );
};

Sidebar.displayName = "Sidebar";

export default Sidebar;
