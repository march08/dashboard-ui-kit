import * as React from "react";
import classnames from "classnames";

import cls from "./styles.scss";
import WidgetContainer from "./WidgetContainer";
import WidgetContent from "./WidgetContent";
import WidgetHeader from "./WidgetHeader";
import WidgetTable from "./WidgetTable";

export type WidgetProps = JSX.IntrinsicElements["div"] & {
  padding?: boolean;
  margin?: boolean;
};

export const Widget = ({
  children,
  className,
  padding,
  margin,
  ...rest
}: WidgetProps) => (
  <div
    className={classnames(cls["card"], className, {
      [cls["card-padding"]]: padding,
      [cls["card-margin"]]: margin
    })}
    {...rest}
  >
    {children}
  </div>
);

Widget.defaultProps = {
  className: null,
  children: null,
  padding: false,
  margin: false
};

Widget.displayName = "Widget";
Widget.Container = WidgetContainer
Widget.Content = WidgetContent
Widget.Header = WidgetHeader
Widget.Table = WidgetTable

export const Card = Widget

export default Widget;
