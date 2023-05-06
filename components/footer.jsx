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
      {/* <Contributions username="astrit" /> */}
      {/* <Contributions username="astrit" date="2023-05-06" /> */}
    </Layout>
  );
}
