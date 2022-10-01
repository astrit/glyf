import { forwardRef } from "react";

export const Symbol = forwardRef(
  ({ width, w, height, h, children, id, name, box, ...props }, ref) => {
    return (
      <symbol id={"symbol-" + name.toLowerCase()} viewBox={box} {...props}>
        {children}
      </symbol>
    );
  }
);

Symbol.displayName = "Symbol";

export default Symbol;
