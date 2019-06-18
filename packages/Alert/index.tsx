import React from "react";
import classnames from "classnames";
import cls from "./styles.scss";

export type AlertProps = JSX.IntrinsicElements["div"] & {
  primary?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  leftEl?: React.ReactNode;
  rightEl?: React.ReactNode;
};

export const Alert = (props: AlertProps) => {
  const {
    className,
    primary,
    success,
    warning,
    danger,
    children,
    leftEl,
    rightEl,
    ...rest
  } = props;
  return (
    <div
      role="alert"
      className={classnames(cls["alert"], className, {
        [cls["alert-primary"]]: primary,
        [cls["alert-success"]]: success,
        [cls["alert-warning"]]: warning,
        [cls["alert-danger"]]: danger
      })}
      {...rest}
    >
      {leftEl && <div className={cls["alert-left-el"]}>{leftEl}</div>}
      <div className={cls["alert-body"]}>{children}</div>
      {rightEl && <div className={cls["alert-right-el"]}>{rightEl}</div>}
    </div>
  );
};

Alert.displayName = "Alert";

export default Alert;
