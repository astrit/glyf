// https://mtxn84-3000.preview.csb.app/
import Box from "@/box";
import { styled } from "@/theme";
import Image from "next/image";
import Link from "@/link";
import Contributions from "@/contributions";

// https://mtxn84-3000.preview.csb.app/

const Layout = styled("footer", {
  display: "flex",
  padding: "8vh 20px",
  fontSize: "10px",
  letterSpacing: "normal",
  gap: "10px",
  alignItems: "center",
  fontWeight: "300",

  a: {
    img: {
      borderRadius: "200px",
      width: "22px",
      height: "22px",
    },
  },
});

const MadeIn = styled("div", {
  display: "flex",
  color: "rgba(255,255,255,0.5)",
  gap: "8px",
  alignItems: "center",
  // flex: "0 1 1 auto",
  fontSize: "10px",
  letterSpacing: "normal",
});

const Sweden = styled("div", {
  boxSizing: "border-box",
  position: "relative",
  display: "block",
  width: "16px",
  height: "10px",

  "&::after, &::before": {
    content: "",
    display: "block",
    boxSizing: "border-box",
    position: "absolute",
    height: "4px",
    background: "currentColor",
    boxShadow: "0 4px 0",
    top: "0",
  },

  "&::before": {
    left: 0,
    width: "4px",
  },

  "&::after": {
    width: "8px",
    right: 0,
  },
});

export default function Footer() {
  return (
    <Layout>
      <Link href="https://github.com/astrit">
        <Image
          src="https://github.com/astrit.png"
          width="22"
          height="22"
          alt="Astrit"
        />
      </Link>
      © {`${new Date().getFullYear()}`}
      <MadeIn>Made in Sweden</MadeIn>
    </Layout>
  );
}
