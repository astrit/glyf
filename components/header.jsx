import { styled } from "@/theme";
import Box from "@/box";
import Logo from "g/logo";

const Header = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  // boxSizing: "border-box",
});

const CTA = styled("div", {
  display: "flex",
});

const YT = styled("a", {
  position: "relative",
  display: "flex",
  width: "max",
  height: "min-content",
  fontSize: "20px",
  alignItems: "center",
  flexDirection: "column",
  zIndex: 20,
  fontFamily: "'Caveat', sans-serif",
  textDecoration: "none",

  "&::before": {
    position: "absolute",
    display: "flex",
    content: " ",
    background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='31' height='34' fill='none'%3E%3Cpath d='M30 9S12 8 4 25' stroke='white' stroke-miterlimit='10'/%3E%3Cpath d='M9 24v-1l-5 2-1-5H2l2 6 5-2z' fill='white'/%3E%3C/svg%3E") no-repeat center/contain`,
    width: "36px",
    height: "39px",
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    transformOrigin: "36px 39px",
    transform: "scaleX(-1) scaleY(-1)",
    top: "10px",
    right: "60px",
  },

  "&:hover::before": {
    rotate: "-15deg",
  },

  "&:hover": {
    svg: {
      scale: "1.1",
    },
    span: {
      scale: "1.1",
    },
  },
  svg: {
    width: "42px",
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  },
  span: {
    position: "absolute",
    minWidth: "max-content",
    right: "80px",
    top: "60px",
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  },
});

export default function HeaderComponent() {
  return (
    <>
      <Box>
        <Header>
          <Logo />
          <CTA>
            <YT
              href="https://www.youtube.com/c/astrit?sub_confirmation=1"
              className="youtube"
            >
              <svg viewBox="0 -77 512 512" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M501 56c-5-22-23-39-45-45C416 0 256 0 256 0S96 0 56 11c-22 5-40 23-45 45C0 96 0 179 0 179s0 84 11 123c5 22 23 40 45 46 40 10 200 10 200 10s160 0 200-10c22-6 40-23 45-45 11-40 11-123 11-123s0-84-11-124zm0 0"
                  fill="red"
                ></path>
                <path d="M205 256l133-77-133-77zm0 0" fill="#fff"></path>
              </svg>
              <span>
                Watch me <br /> coding this!
              </span>
            </YT>
          </CTA>
        </Header>
      </Box>
    </>
  );
}
