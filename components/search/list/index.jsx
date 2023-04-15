import { styled } from "@/theme";

const ListStyled = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
  gap: "24px",
  // experimental ⚠️⚠️⚠️⚠️⚠️
  // experimental ⚠️⚠️⚠️⚠️⚠️
  // experimental ⚠️⚠️⚠️⚠️⚠️
  // contentVisibility: "auto",
  // padding: "24px",
});

export default function List({ children, ...props }) {
  return <ListStyled {...props}>{children}</ListStyled>;
}
