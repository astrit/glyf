import { styled } from "@/theme";
import Box from "@/box";
import Logo from "g/logo";

const Header = styled("header", {
  display: "flex",
});

export default function HeaderComponent() {
  return (
    <>
      <Box>
        <Header>
          <Logo />
        </Header>
      </Box>
    </>
  );
}
