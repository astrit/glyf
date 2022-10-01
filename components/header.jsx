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
    top: "70px",
    lineHeight: "1",
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
          <Box
            as="a"
            href="https://github.com/astrit/css.gg"
            css={{
              borderRadius: "8px",
              background: "hsla(360,100%,100%,0.04)",
              color: "hsla(260, 100%, 100%, 0.8)",
              fontSize: "15px",
              border: "2px solid hsla(360,100%,100%, 0.02)",
              padding: "16px 20px",
              display: "flex",
              backdropFilter: "blur(10px)",
              fontWeight: "300",
              letterSpacing: "initial",
              fontSize: "12px",
              gap: "10px",
              boxShadow:
                "rgb(0 0 0 / 2%) 2px 3px 8px, rgb(0 0 0 / 1%) 0px 8px 6px -3px",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 14 14">
              <path
                d="M7.02751 0.333496C3.34571 0.333496 0.333332 3.40836 0.333332 7.16653C0.333332 10.1845 2.23002 12.7468 4.90769 13.6579C5.2424 13.7149 5.35397 13.4871 5.35397 13.3163C5.35397 13.1454 5.35397 12.7468 5.35397 12.1774C3.51307 12.576 3.12257 11.2664 3.12257 11.2664C2.84365 10.4692 2.39737 10.2414 2.39737 10.2414C1.72795 9.8428 2.39737 9.8428 2.39737 9.8428C3.06679 9.89974 3.4015 10.5261 3.4015 10.5261C4.01513 11.5511 4.96347 11.2664 5.35397 11.0955C5.40975 10.64 5.57711 10.3553 5.80024 10.1845C4.29405 10.0136 2.73208 9.44421 2.73208 6.82488C2.73208 6.08463 3.011 5.45827 3.4015 5.00274C3.4015 4.77497 3.12257 4.09166 3.51307 3.18059C3.51307 3.18059 4.07091 3.00977 5.35397 3.8639C5.91181 3.69307 6.46966 3.63613 7.02751 3.63613C7.58536 3.63613 8.14321 3.69307 8.70105 3.8639C9.98411 2.95283 10.542 3.18059 10.542 3.18059C10.9324 4.14861 10.6535 4.83191 10.5977 5.00274C11.044 5.45827 11.2672 6.08463 11.2672 6.82488C11.2672 9.44421 9.70518 10.0136 8.19899 10.1845C8.42213 10.4122 8.64527 10.8108 8.64527 11.4372C8.64527 12.3482 8.64527 13.0885 8.64527 13.3163C8.64527 13.4871 8.75684 13.7149 9.09155 13.6579C11.7692 12.7468 13.6659 10.1845 13.6659 7.16653C13.7217 3.40836 10.7093 0.333496 7.02751 0.333496Z"
                fill="white"
              ></path>
            </svg>
            8.7K+ GitHub stars
          </Box>
        </Header>
      </Box>
    </>
  );
}
