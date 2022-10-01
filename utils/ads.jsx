import { styled } from "@/theme";

const Ads = styled("div", {
  display: "flex",
  background: "rgba(255,255,255,1)",
  position: "fixed",
  right: "10px",
  bottom: "10px",
  width: "160px",
  padding: "10px",
  fontSize: "12px",
  fontFamily: "sans-serif",
  letterSpacing: "initial",
  borderRadius: "8px",
  boxShadow:
    "rgb(0 0 0 / 10%) 2px 3px 8px, rgb(0 0 0 / 40%) -4px 28px 12px -8px",
  color: "rgb(14, 12, 27)",
  "@sm": {
    bottom: 0,
    right: 0,
    width: "100%",
    borderRadius: 0,
  },
  ".carbon-wrap": {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    img: {
      width: "100%",
      maxWidth: "100% !important",
      borderRadius: "6px",
      boxShadow:
        "rgb(0 0 0 / 6%) 2px 3px 8px, rgb(0 0 0 / 8%) 0px 28px 12px -8px",
    },
  },
  ".carbon-poweredby": {
    opacity: "0.4",
  },

  "#carbonads > span": {
    display: "flex",
    gap: "10px",
    flexDirection: "column",
  },
});

export default function Carbon() {
  return (
    <Ads>
      <script
        async
        type="text/javascript"
        src="//cdn.carbonads.com/carbon.js?serve=CE7DEK3M&placement=cssgg"
        id="_carbonads_js"
      ></script>
    </Ads>
  );
}
