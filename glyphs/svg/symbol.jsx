import { forwardRef } from "react";

export const Symbol = forwardRef(
  ({ width, w, height, h, children, id, name, ...props }, ref) => {
    return (
      <symbol id={"symbol-" + name.toLowerCase()} width={width} height={height}>
        {children}
      </symbol>
    );
  }
);

Symbol.displayName = "Symbol";

export default Symbol;
