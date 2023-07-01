import Box from "@/box";
import Button from "@/button";
import Link from "@/link";
import Stars from "@/stars";
import Visitors from "@/visitors";
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

            span: {
              verticalAlign: "top",
              fontSize: "10px",
            },
          }}
        >
          Glyphs
          <Box
            css={{
              display: "none",
              // display: "flex",
              fontSize: "30vw",
              position: "fixed",
              zIndex: "-1",
              pointerEvents: "none",
              top: "-0.5ex",
              lineHeight: "1",
              scale: "4",
              rotate: "42deg",
              userSelect: "none",
              // fontFeatureSettings: '"kern", "ss02"',
              color: "hsla(300, 100%, 100%, 0.1)",
              "-webkit-mask-image":
                "linear-gradient(to bottom, hsla(300, 90%, 52%, 1) 0%, hsla(300, 90%, 52%, 0) 90%)",
              maskImage:
                "linear-gradient(to bottom, hsla(300, 90%, 52%, 0.5) 0%, hsla(300, 90%, 52%, 0) 99%)",
            }}
          >
            5902
          </Box>
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
          <Link href="https://css.gg">CSS.GG ↗</Link>
        </Box>
      </div>
      <Box
        css={{
          display: "flex",
          gap: "14px",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {/* <Box
          css={{
            fontSize: "10px",
          }}
        >
          <Visitors />
        </Box> */}
        {/* <Button to="https://raycast.com/astrit" title="App Store" svg="apple" /> */}
        {/* <Button to="https://raycast.com/astrit" title="Windows" svg="windows" /> */}
        <Button
          to="https://www.figma.com/community/file/834587122842084475/css.gg"
          title="Figma"
          count="48k"
          svg="figma"
        />

        {/* <Button
          to="https://www.youtube.com/c/astrit?sub_confirmation=1"
          title="@astrit"
          svg="youtube"
        /> */}

        {/* <Stars repo="astrit/css.gg" count="9.2k" /> */}
        <Button
          to="https://github.com/astrit/css.gg"
          title="GitHub"
          count="9.2k"
          svg="github"
        />
        <Button
          to="https://raycast.com/astrit"
          title="Raycast"
          count="1.1k"
          svg="raycast"
        />
      </Box>
    </Box>
  );
}
