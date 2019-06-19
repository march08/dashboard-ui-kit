import * as React from "react";
import classnames from "classnames";
import { AnyTag, PropsWithTagProps } from "@duik/core";

import cls from "./styles.scss";

export type TabItemPropsBase = {
  rightEl?: React.ReactNode;
  leftEl?: React.ReactNode;
  active?: Boolean;
  text?: React.ReactNode
};

export type TabItemProps<T extends AnyTag> = PropsWithTagProps<
  T,
  TabItemPropsBase & { Component?: T }
>;

export const TabItem = <T extends AnyTag = "a">(props: TabItemProps<T>) => {
  const {
    className,
    Component = "a",
    children,
    rightEl,
    leftEl,
    active,
    text,
    ...rest
  } = props;
  return (
    <Component
      className={classnames(cls["tab-item"], className, {
        [cls["active"]]: active
      })}
      tabIndex={0}
      {...rest}
    >
      {leftEl && <span className={cls["tab-item-left-el"]}>{leftEl}</span>}
      {children || text}
      {rightEl && <span className={cls["tab-item-right-el"]}>{rightEl}</span>}
    </Component>
  );
};

TabItem.displayName = "TabItem";

export default TabItem;
