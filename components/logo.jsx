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
  fontSize: "20px",
});

const Decorator = styled("div", {
  opacity: "0.2",
});

const Name = styled("div", {
  fontFeatureSettings: '"kern" 1, "ss02" 1',
});

export default function LogoComponent() {
  return (
    <Link href="/">
      <Logo>
        <Symbol>©</Symbol>
        <Decorator>—</Decorator>
        <Name>C.SS™ UI</Name>
      </Logo>
    </Link>
  );
}
