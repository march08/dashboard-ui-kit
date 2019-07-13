import * as React from "react";
import { Link } from "react-router-dom";

import { ReactDocsProperty } from "./types";

export type ReactDocsPropertyOptional = {
  [K in keyof ReactDocsProperty]?: ReactDocsProperty[K]
};

/* eslint-disable max-len */
export const properties = {
  children: (data?: ReactDocsPropertyOptional) => ({
    prop: "children",
    propType: "React.ReactNode",
    required: false,
    defaultValue: "null",
    desc: "",
    ...data
  }),
  node: (data?: ReactDocsPropertyOptional) => ({
    propType: "React.ReactNode",
    required: false,
    defaultValue: "null",
    desc: "React node, same as children",
    ...data
  }),
  className: (data?: ReactDocsPropertyOptional) => ({
    prop: "className",
    propType: "string",
    required: false,
    defaultValue: "null",
    desc: 'className, e.g. "my-custom-styling"',
    ...data
  }),
  cls: (data?: ReactDocsPropertyOptional) => ({
    prop: "className",
    propType: "string",
    required: false,
    defaultValue: "null",
    desc: 'className, e.g. "my-custom-styling"',
    ...data
  }),
  Component: (data?: ReactDocsPropertyOptional) => ({
    prop: "Component",
    propType: "React.Component | React.FunctionalComponent | string",
    required: false,
    desc: (
      <span>
        {`Renders the component with a given react element. By default, the component renders <${(
          (data && data.defaultValue) ||
          ""
        ).replace(
          /"/g,
          ""
        )} />. This is usefull when you want to use a same style but render a different HTML element or your custom component. `}
        <Link to="/docs/react/component-property">
          Read and see more examples here.
        </Link>
      </span>
    ),
    ...data
  }),
  rest: (data?: ReactDocsPropertyOptional) => {
    return {
      prop: "...rest",
      propType: "any",
      required: false,
      desc: "Other properties are passed down to the wrapping element",
      ...data
    };
  },
  bool: (data?: ReactDocsPropertyOptional & { prop: string }) => ({
    prop: "?",
    propType: "boolean",
    defaultValue: "false",
    required: false,
    ...data
  }),
  childProps: (data?: ReactDocsPropertyOptional) => ({
    propType: "Object",
    required: false,
    defaultValue: "{}",
    ...data
  }),
  color: (data?: ReactDocsPropertyOptional) => ({
    prop: "color",
    propType: "String",
    required: false,
    desc: (
      <span>
        {
          "One of 'white' | 'red' | 'orange' | 'blue' | 'yellow' | 'green' | 'violet'. Check the "
        }
        <Link to="/docs/react/styleguide">styleguide</Link>{" "}
        {" for more information."}
      </span>
    ),
    ...data
  }),
  formGroup: (data?: ReactDocsPropertyOptional) => ({
    prop: "noWrap",
    propType: "boolean",
    required: false,
    desc:
      "When multiple elements are rendered, e.g. providing a label, the component will wrap the content with a FormGroup component for mroe consistent UI. pass noWrap={false} to disable the default behaviour.",
    ...data
  })
};

export default properties;
