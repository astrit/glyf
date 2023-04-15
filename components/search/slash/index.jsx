import { styled } from "@/theme";

const Slashed = styled("div", {
  display: "flex",
  position: "absolute",
  pointerEvents: "none",
  width: "32px",
  height: "32px",
  right: "32px",
  top: "0",
  bottom: "0",
  margin: "auto",
  fontSize: "14px",
  justifyContent: "center",
  alignItems: "center",
  transition: "all 462ms cubic-bezier(0.23, 1, 0.32, 1)",
});

export default function Slash() {
  return (
    <Slashed>
      <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          opacity="0.4"
          d="M4.41146 1.35156H17.7448C19.6337 1.35156 21.0781 2.71998 21.0781 4.50946V18.1937C21.0781 19.9831 19.6337 21.3516 17.7448 21.3516H4.41146C2.52257 21.3516 1.07812 19.9831 1.07812 18.1937V4.50946C1.07812 2.71998 2.52257 1.35156 4.41146 1.35156Z"
          stroke="rgba(255,255,255,0.4)"
        />
        <path
          d="M13.4285 6.79688L9.62852 15.8969H8.72852L12.4285 6.79688H13.4285Z"
          fill="rgba(255,255,255,0.4)"
        />
      </svg>
    </Slashed>
  );
}
