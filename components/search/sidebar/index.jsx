import React from "react";
import { styled } from "@/theme";

const Aside = styled("aside", {
  display: "flex",
  padding: "40px",
  borderRadius: "18px",
  position: "fixed",
  top: "20px",
  right: "20px",
  bottom: "20px",
  backdropFilter: "blur(120px)",
  background: "hsla(263, 74%, 69%, 0.1)",
  width: "460px",
  zIndex: "10000",
  transition: "all 0.3s ease-in-out",
  boxShadow:
    "rgba(0, 0, 0, 0.06) -2px -3px 8px, rgba(0, 0, 0, 0.04) 0px -28px 12px -8px",
});

const Sidebar = ({ children }) => {
  return <Aside>{children}</Aside>;
};

Sidebar.displayName = "Sidebar";

export default Sidebar;
