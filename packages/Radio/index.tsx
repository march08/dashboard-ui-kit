import * as React from "react";
import { BaseInput, InputBaseProps } from "@duik/base-input";

export const Radio = (props: InputBaseProps) => {
  return <BaseInput {...props} type="radio" />;
};

Radio.displayName = "Radio";

export default Radio;
