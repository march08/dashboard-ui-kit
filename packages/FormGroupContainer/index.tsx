import * as React from "react";
import classnames from "classnames";

import cls from "./styles.scss";

export type FormGroupContainerProps = JSX.IntrinsicElements["div"] & {
  horizontal?: boolean;
};

export const FormGroupContainer = ({
  children,
  className,
  horizontal,
  ...rest
}: FormGroupContainerProps) => (
  <div
    className={classnames(
      horizontal
        ? cls["form-group-container-horizontal"]
        : cls["form-group-container"],
      className
    )}
    {...rest}
  >
    {children}
  </div>
);

FormGroupContainer.defaultProps = {
  className: null,
  children: null,
  horizontal: false
};

FormGroupContainer.displayName = "FormGroupContainer";

export default FormGroupContainer;
