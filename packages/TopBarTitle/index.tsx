import * as React from "react";
import classnames from "classnames";

import "./styles.scss";

export type TopBarTitleProps = JSX.IntrinsicElements["h2"] & {
  large?: Boolean;
};

export const TopBarTitle = ({
  children,
  className,
  large,
  ...rest
}: TopBarTitleProps) => (
  <h2
    className={classnames("top-bar-title", className, {
      ["top-bar-title-lg"]: large
    })}
    {...rest}
  >
    {children}
  </h2>
);

TopBarTitle.displayName = "TopBarTitle";

TopBarTitle.defaultProps = {
  className: null,
  children: null,
  large: false
};

export default TopBarTitle;
