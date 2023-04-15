import { useState, useEffect } from "react";
import Link from "next/link";
import { styled } from "@/theme";

const Logo = styled("a", {
  display: "flex",
  alignItems: "center",
  fontWeight: "500",
  gap: "1ch",
  cursor: "pointer",
});

const Decorator = styled("div", {
  opacity: "0.2",
  lineHeight: "1",
  "@md": {
    display: "none",
  },
});

const Name = styled("div", {
  fontFeatureSettings: '"kern" 1, "ss02" 1',
  display: "flex",
  fontWeight: "400",
  lineHeight: "1",
  "@md": {
    display: "none",
  },
  "&::after": {
    content: "™",
    display: "flex",
    fontWeight: "300",
    fontSize: "18px",
  },
});

const Symbol = styled("div", {
  display: "flex",
  width: "42px",
  height: "42px",
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
        <Decorator>—</Decorator>
        <Name>glfs</Name>
      </Logo>
    </Link>
  );
}
