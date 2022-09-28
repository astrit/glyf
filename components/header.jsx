import { styled } from "@/theme";
import Box from "@/box";

const Header = styled("header", {
  display: "flex",
});

export default function HeaderComponent() {
  return (
    <>
      <Box>
        <Header>Header</Header>
      </Box>
    </>
  );
}
