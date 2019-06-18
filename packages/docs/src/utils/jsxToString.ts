import React from "react";

import reactElToString, {
  ReactElementToJSXStringOptions
} from "react-element-to-jsx-string";

export const jsxToString = (
  node: React.ReactNode,
  options?: ReactElementToJSXStringOptions
) => {
  return reactElToString(node, {
    ...options,
    showDefaultProps: false,
    maxInlineAttributesLineLength: 70
  });
};
