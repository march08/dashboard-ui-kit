import * as React from "react";
import { BaseInput, InputBaseProps } from "@duik/base-input";

export const Toggle = (props: InputBaseProps) => {
  return <BaseInput {...props} toggle />;
};

Toggle.displayName = "Toggle";

export default Toggle;
