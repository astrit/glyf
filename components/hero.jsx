import Box from "@/box";
import Button from "@/button";
import Link from "@/link";

// const Link = styled("a", {
//   textDecoration: "underline",
// });

export default function Hero() {
  return (
    <Box
      as={"section"}
      css={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        gap: "$4",
        "@md": {
          flexDirection: "column",
          alignItems: "flex-start",
        },
      }}
    >
      <div>
        <Box
          as="h1"
          css={{
            marginBlockEnd: "0.64em",
          }}
        >
          Glyphs
        </Box>
        <Box
          as="span"
          css={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            fontSize: "16px",
            letterSpacing: "normal",
          }}
        >
          ©
          <Box
            css={{
              display: "flex",
              width: "60px",
              height: "2px",
              background: "hsla(360,100%,100%,0.2)",
              borderRadius: "4px",
            }}
          />
          <Link href="//css.gg">CSS.GG ↗</Link>
        </Box>
      </div>
      <Box
        css={{
          display: "flex",
          gap: "14px",
          flexWrap: "wrap",
        }}
      >
        <Button to="https://raycast.com/astrit" title="Raycast" svg="raycast" />
        <Button
          to="https://github.com/astrit/css.gg"
          title="8.7K+ GitHub stars"
          svg="github"
        />
      </Box>
    </Box>
  );
}
