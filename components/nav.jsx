import Link from "@/link";
import Box from "@/box";
import { styled } from "@/theme";
import Profile from "@/icon/profile";

const Nav = styled("nav", {
  display: "flex",
  gap: "3ch",
  fontSize: "12px",
  alignItems: "center",
  letterSpacing: "-0.004em",
  fontWeight: "500",
});

const Lin = styled(Link, {
  borderRadius: "4px",
  padding: "8px 12px",
  transition: "all 264ms ease-in-out",
  boxShadow: "0 0 0 1px hsl(261deg 80% 54% / 0)",
  "&:hover": {
    background: "hsl(261deg 80% 54%)",
    boxShadow: "0 0 0 4px hsl(261deg 80% 54%)",
  },
});

const Separator = styled("span", {
  opacity: "0.2",
});

export default function NavWrap() {
  return (
    <Nav>
      <Box
        css={{
          display: "flex",
          gap: "2ch",
        }}
      >
        {/* <Lin href="/assets">•••</Lin> */}
        <Lin href="/assets">Icons</Lin>
        <Lin href="/assets">Patterns</Lin>
        <Lin href="/assets">Colors</Lin>
        <Lin href="/assets">Layouts</Lin>
      </Box>
      <Separator>|</Separator>
      {/* <Link
        href="/login"
        css={{
          fontSize: "16px",
          lineHeight: "1",
        }}
      >
        @
      </Link> */}
      <Link
        href="/tools"
        css={{
          marginRight: "8px",
          fontSize: "18px",
          "&::after": {
            content: `' '`,
            display: "flex",
            position: "absolute",
            background: "#33F89A",
            width: "4px",
            height: "4px",
            top: "-2px",
            right: "-8px",
            borderRadius: "100px",
          },
        }}
      >
        ⌘
      </Link>

      <Link href="/login">
        <Profile />
      </Link>

      <Link
        href="/tools"
        css={{
          background: "linear-gradient(to bottom, #6B20F1, #6B20F1)",
          padding: "10px 20px",
          border: "2px solid #7027F1",
          borderRadius: "100px",
          boxShadow: "-2px 6px 10px rgba(0, 0, 0, 0.06)",
          fontWeight: "800",
          display: "flex",
          alignItems: "center",
        }}
      >
        PRO →
      </Link>
    </Nav>
  );
}
