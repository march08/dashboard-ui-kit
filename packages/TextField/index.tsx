import * as React from "react";
import classnames from "classnames";
import { FormGroup } from "@duik/form-group";

import cls from "./styles.scss";

export type TextFieldProps = JSX.IntrinsicElements["input"] & {
  wrapperProps?: JSX.IntrinsicElements["div"];
  label?: React.ReactNode;
  clear?: boolean;
  errorMessage?: React.ReactNode;
  successMessage?: React.ReactNode;
  leftEl?: React.ReactNode;
  rightEl?: React.ReactNode;
  noWrap?: boolean;
};

export const TextField = (props: TextFieldProps) => {
  const {
    className,
    wrapperProps,
    label,
    clear,
    errorMessage,
    successMessage,
    leftEl,
    rightEl,
    id,
    noWrap,
    ...rest
  } = props;

  const el = (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <div
        {...wrapperProps}
        className={classnames(
          wrapperProps && wrapperProps.className,
          cls["input-group"],
          {
            [cls["is-invalid"]]: errorMessage,
            [cls["is-valid"]]: successMessage,
            [cls["input-group-clear"]]: clear
          }
        )}
      >
        {leftEl && <div className={"input-group-prepend"}>{leftEl}</div>}
        <input
          className={classnames(className, cls["form-control"])}
          type="text"
          id={id}
          {...rest}
        />
        {rightEl && <div className={cls["input-group-append"]}>{rightEl}</div>}
      </div>
      {errorMessage ? (
        <div className={cls["invalid-feedback"]}>{errorMessage}</div>
      ) : null}
      {successMessage ? (
        <div className={cls["valid-feedback"]}>{successMessage}</div>
      ) : null}
    </>
  );

  return noWrap ? el : <FormGroup>{el}</FormGroup>;
};

TextField.displayName = "TextField";

export default TextField;
