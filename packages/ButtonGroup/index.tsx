import * as React from "react";
import classnames from "classnames";

import cls from "./styles.scss";

export type ButtonGroupProps = JSX.IntrinsicElements["div"] & {
  vertical?: boolean;
  sm?: boolean;
  lg?: boolean;
};

export const ButtonGroup = ({
  children,
  className,
  vertical,
  sm,
  lg,
  ...rest
}: ButtonGroupProps) => (
  <div
    className={classnames(className, {
      [cls["btn-group-vertical"]]: vertical,
      [cls["btn-group"]]: !vertical,
      [cls["btn-group-sm"]]: sm,
      [cls["btn-group-lg"]]: lg
    })}
    {...rest}
  >
    {children}
  </div>
);

ButtonGroup.defaultProps = {
  className: null,
  children: null,
  vertical: false
};

ButtonGroup.displayName = "ButtonGroup";

export default ButtonGroup;
