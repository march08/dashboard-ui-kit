import * as React from "react";
import classnames from "classnames";

import cls from "./styles.scss";

export type DividerProps = JSX.IntrinsicElements["div"] & {
  vertical?: boolean;
  margin?: boolean;
};

export const Divider = ({
  children,
  className,
  vertical,
  margin,
  ...rest
}: DividerProps) => (
  <div
    className={classnames(
      vertical ? cls["divider-vertical"] : cls["divider-horizontal"],
      className,
      {
        [cls["divider-margin"]]: margin
      }
    )}
    {...rest}
  >
    {children}
  </div>
);

Divider.defaultProps = {
  className: null,
  children: null,
  vertical: false
};

Divider.displayName = "Divider";

export default Divider;
