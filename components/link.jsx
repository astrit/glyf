import { styled } from "@/theme";
import NextLink from "next/link";
import { forwardRef } from "react";

const BaseLink = styled("a", {
  cursor: "pointer",
});

const handleClick = (e, onClick, disabled) => {
  if (disabled) {
    e.preventDefault();
    return;
  }
  onClick && onClick();
};

export const Link = forwardRef(
  (
    { onClick, disabled, href, to, children, scroll = false, ...props },
    ref
  ) => {
    return (
      <NextLink
        href={to || href}
        target={href ? "_blank" : "_self"}
        scroll={scroll}
        passHref
      >
        <BaseLink
          ref={ref}
          onClick={(e) => handleClick(e, onClick, disabled)}
          aria-disabled={disabled}
          disabled={disabled}
          {...props}
        >
          {children}
        </BaseLink>
      </NextLink>
    );
  }
);

Link.displayName = "Link";

export default Link;
