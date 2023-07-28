import { useState, useEffect } from "react";
import Link from "next/link";
import { keyframes, styled } from "@/theme";

const flare = keyframes({
  "0%": {
    "-webkit-mask-image": `linear-gradient(60deg,#000 25%,rgba(0,0,0,.4) 50%,#000 75%)`,
    "mask-image": `linear-gradient(60deg,#000 25%,rgba(0,0,0,.4) 50%,#000 75%)`,
    "-webkit-mask-size": "400%",
    "mask-size": "400%",
    "-webkit-mask-position": "0",
    "mask-position": "0",
  },
  "100%": {
    "-webkit-mask-image":
      "linear-gradient(60deg,#000 25%,rgba(0,0,0,.4) 50%,#000 75%)",
    "mask-image": "linear-gradient(60deg,#000 25%,rgba(0,0,0,.4) 50%,#000 75%)",
    "-webkit-mask-size": "400%",
    "mask-size": "400%",
    "-webkit-mask-position": "100%",
    "mask-position": "100%",
  },
});

const Logo = styled("a", {
  display: "flex",
  alignItems: "center",
  fontWeight: "500",
  gap: "20px",
  cursor: "pointer",
  fontFamily: `sans-serif`,

  "&:hover": {
    animation: `${flare} 1.8s cubic-bezier(.16,1,.3,1) forwards`,
  },
});

const Decorator = styled("div", {
  width: "42px",
  height: "2px",
  background: "rgba(255,255,255,0.2)",
  "@md": {
    display: "none",
  },
});

const Name = styled("div", {
  fontFeatureSettings: '"kern" 1, "ss02" 1',
  fontFamily: "Inter var, sans-serif",
  display: "flex",
  fontSize: "14px",
  letterSpacing: "0.1ch",
  lineHeight: "1",
  fontFamily: "inherit",
  fontStretch: "ultra-expanded",
  // backgroundColor: "rgba(255,255,255,0.1)",
  borderRadius: "4px",
  lineHeight: "1",
  color: "white",
  // textTransform: "uppercase",
  fontWeight: "300",
  // padding: "10px 20px",
  "@md": {
    display: "none",
  },
  // "&::after": {
  //   content: "™",
  //   display: "flex",
  //   fontWeight: "300",
  //   fontSize: "18px",
  // },
});

const Symbol = styled("div", {
  display: "flex",
  width: "44px",
  height: "44px",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "42px",
  lineHeight: "1",
  transition: "transform 1264ms cubic-bezier(0.23, 1, 0.32, 1)",
});

export default function LogoComponent() {
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;
      const deltaY = currentScrollY - prevScrollY;
      const deltaTime = 16; // 60fps
      const newVelocity = deltaY / deltaTime;
      setVelocity(newVelocity);
      setPrevScrollY(currentScrollY);

      if (currentScrollY === 0) {
        setVelocity(0);
        setRotationAngle(0);
      } else if (rotationAngle < window.innerHeight * 2) {
        const newRotationAngle = rotationAngle + newVelocity * 50; // adjust this factor to control rotation speed
        if (newRotationAngle > window.innerHeight * 2) {
          setRotationAngle(window.innerHeight * 2);
        } else {
          setRotationAngle(newRotationAngle);
        }
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY, rotationAngle]);

  return (
    <Link href="/">
      <Logo>
        <Symbol style={{ transform: `rotate(${rotationAngle}deg)` }}>⌘</Symbol>
        <Decorator />
        <Name>G L Y F</Name>
      </Logo>
    </Link>
  );
}
