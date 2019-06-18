import React from "react";
import classnames from "classnames";
import cls from "./styles.scss";

export * from "./TabItem";

export type TabsProps = JSX.IntrinsicElements["nav"] & {
  xs?: boolean;
  sm?: boolean;
};

export const Tabs = (props: TabsProps) => {
  const { xs, sm, children, className, ...rest } = props;

  return (
    <nav
      className={classnames(cls["tabs"], className, {
        [cls["tabs-xs"]]: xs,
        [cls["tabs-sm"]]: sm
      })}
      {...rest}
    >
      {children}
    </nav>
  );
};

export const Tab = Tabs;
export const TabContainer = Tabs;
export default Tabs;
