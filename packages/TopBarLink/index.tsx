import * as React from "react";
import classnames from "classnames";
import { AnyTag, PropsWithTagProps } from "@duik/core";

import "./styles.scss";

export type TopBarLinkBaseProps = {};

export type TopBarLinkProps<T extends AnyTag> = PropsWithTagProps<
  T,
  TopBarLinkBaseProps & { Component?: T }
>;

export const TopBarLink = <T extends AnyTag = "a">(
  props: TopBarLinkProps<T>
) => {
  const { children, className, Component, ...rest } = props;

  return (
    <Component className={classnames("top-bar-link", className)} {...rest}>
      {children}
    </Component>
  );
};

TopBarLink.defaultProps = {
  className: null,
  Component: "a"
};

TopBarLink.displayName = "TopBarLink";

export default TopBarLink;
