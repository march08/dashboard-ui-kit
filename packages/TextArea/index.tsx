import * as React from "react";
import classnames from "classnames";
import { FormGroup } from "@duik/form-group";

import "./styles.scss";

export type TextAreaProps = JSX.IntrinsicElements["textarea"] & {
  label?: React.ReactNode;
  clear?: boolean;
  errorMessage?: React.ReactNode;
  successMessage?: React.ReactNode;
  leftEl?: React.ReactNode;
  rightEl?: React.ReactNode;
  noWrap?: boolean;
};

export const TextArea = (props: TextAreaProps) => {
  const {
    className,
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
      <textarea
        className={classnames("form-control", {
          ["is-invalid"]: errorMessage,
          ["is-valid"]: successMessage,
          ["clear"]: clear
        })}
        {...rest}
      />
      {errorMessage ? (
        <div className={"invalid-feedback"}>{errorMessage}</div>
      ) : null}
      {successMessage ? (
        <div className={"valid-feedback"}>{successMessage}</div>
      ) : null}
    </>
  );

  return noWrap ? el : <FormGroup>{el}</FormGroup>;
};

TextArea.displayName = "TextArea";

export default TextArea;
