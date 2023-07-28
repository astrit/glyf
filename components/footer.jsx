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
  fontSize: "14px",
  gap: "20px",
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
  width: "21px",
  height: "14px",

  "&::after, &::before": {
    content: "",
    display: "block",
    boxSizing: "border-box",
    position: "absolute",
    height: "6px",
    background: "currentColor",
    boxShadow: "0 8px 0",
    top: "0",
  },

  "&::before": {
    left: 0,
    width: "7px",
  },

  "&::after": {
    width: "12px",
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
      <MadeIn>
        Made in Sweden
        <Sweden />
      </MadeIn>
      {/* <Contributions username="astrit" /> */}
      {/* <Contributions username="astrit" date="2023-05-06" /> */}
    </Layout>
  );
}
