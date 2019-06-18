import React from "react";

export type ReactDocsProperty = {
  prop: React.ReactNode;
  propType?: React.ReactNode;
  required?: boolean;
  defaultValue?: any;
  desc?: React.ReactNode;
};
