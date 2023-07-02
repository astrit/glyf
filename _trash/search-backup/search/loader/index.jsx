import React from "react";
import { keyframes, styled } from "@/theme";
import Loading from "@/search/loader/bar";

const CardContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
  gap: "24px",
});

const CardWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  aspectRatio: "1/1",
  userSelect: "none",
  position: "relative",
  cursor: "pointer",
  borderRadius: "18px",
  background: `hsla(260, 74%, 53%, 1.0)`,
  border: "2px solid hsla(259, 73%, 56%, 1.0)",
  boxShadow:
    "2px 3px 8px rgba(0, 0, 0, 0.06), 0px 28px 12px -8px rgba(0, 0, 0, 0.04)",
  boxSizing: "border-box",
});

const CardSkeleton = () => {
  const cardArray = new Array(40).fill(null);

  return (
    <CardContainer>
      {cardArray.map((_, index) => (
        <CardWrapper key={index}>
          <Loading />
        </CardWrapper>
      ))}
    </CardContainer>
  );
};

CardSkeleton.displayName = "CardSkeleton";

export default CardSkeleton;
