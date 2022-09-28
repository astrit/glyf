import Link from "next/link";
import { styled } from "@/theme";

const Logo = styled("a", {
  display: "flex",
  alignItems: "center",
  fontWeight: "500",
  gap: "1ch",
  cursor: "pointer",
});

const Symbol = styled("div", {
  fontSize: "42px",
  lineHeight: "1",
});

const Decorator = styled("div", {
  opacity: "0.2",
  lineHeight: "1",
});

const Name = styled("div", {
  fontFeatureSettings: '"kern" 1, "ss02" 1',
  // fontSize: "18px",
  display: "flex",
  fontWeight: "400",
  lineHeight: "1",
  "&::after": {
    content: "™",
    display: "flex",
    fontWeight: "300",
    fontSize: "18px",
  },
});

export default function LogoComponent() {
  return (
    <Link href="/">
      <Logo>
        <Symbol>⌘</Symbol>
        <Decorator>—</Decorator>
        <Name>glfs</Name>
      </Logo>
    </Link>
  );
}
