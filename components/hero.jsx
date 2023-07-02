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
            display: "flex",
            // height: "58px",
            flexDirection: "column",
            gap: "20px",

            span: {
              verticalAlign: "top",
              fontSize: "10px",
            },
          }}
        >
          6k Free Glyphs
          {/* Glyphs <span>6031</span> */}
          <Box
            css={{
              // display: "none",
              display: "flex",
              fontSize: "30vw",
              position: "fixed",
              zIndex: "-1",
              pointerEvents: "none",
              top: "-0.5ex",
              lineHeight: "1",
              scale: "4",
              rotate: "42deg",
              userSelect: "none",
              fontFamily: "sans-serif",
              fontWeight: "900",
              fontFeatureSettings: '"kern", "ss02"',
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
          as="ul"
          css={{
            display: "flex",
            alignContent: "center",
            justifyItems: "center",
            gap: "10px",
            margin: "unset",
            padding: "unset",
            marginBottom: "80px",
            fontWeight: "300",
            fontFamily: "inherit",
            letterSpacing: "normal",
            lineHeight: "1",

            li: {
              fontSize: "10px",
              borderRadius: "14px",
              // background: "hsla(0, 0%, 100%, 0.1)",
              padding: "6px 16px",
              backdropFilter: "blur(4px)",
              border: "1px solid rgba(255,255,255,0.08)",
              backgroundColor: "rgba(255,255,255,0.08)",
            },
          }}
        >
          <li>Figma Variable</li>
          <li>CSS Pattern</li>
          <li>SVG</li>
          <li>PNG</li>
        </Box>
        <Box
          as="span"
          css={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            fontSize: "16px",
            letterSpacing: "normal",
            height: "20px",
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
      <Box
        css={{
          filter: "blur(84px)",
          position: "fixed",
          top: 0,
          right: 0,
          zIndex: 0,
          width: "50%",
          height: "100%",
          opacity: 0.1,
          pointerEvents: "none",
        }}
      >
        <Box
          css={{
            display: "flex",
            width: "100%",
            height: "100%",
            position: "fixed",
            "--tw-gradient-from": "#ff80ca",
            "--tw-gradient-to": "#e546c0",
            "--tw-gradient-stops":
              "var(--tw-gradient-from),var(--tw-gradient-to)",
            background: "linear-gradient(to right,var(--tw-gradient-stops))",

            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        ></Box>
      </Box>
    </Box>
  );
}
