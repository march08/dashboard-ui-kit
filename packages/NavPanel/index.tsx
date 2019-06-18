import * as React from "react";
import classnames from "classnames";

import cls from "./styles.scss";

export type NavPanelProps = JSX.IntrinsicElements["nav"] & {
  positionRight?: boolean;
  onRight?: boolean;
  dark?: boolean;
};

export const NavPanel = (props: NavPanelProps) => {
  const { children, className, positionRight, onRight, dark, ...rest } = props;

  return (
    <nav
      className={classnames(
        dark ? cls["nav-panel-dark"] : cls["nav-panel"],
        className,
        {
          [cls["nav-panel-right"]]: positionRight || onRight
        }
      )}
      {...rest}
    >
      {children}
    </nav>
  );
};

NavPanel.defaultProps = {
  className: null,
  children: null,
  positionRight: false,
  onRight: false,
  dark: false
};

NavPanel.displayName = "NavPanel";

export default NavPanel;
