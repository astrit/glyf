import { styled } from "@/theme";

const ListStyled = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
  gap: "24px",
});

const List = ({ children, ...props }) => {
  return <ListStyled {...props}>{children}</ListStyled>;
};

List.displayName = "List";

export default List;
