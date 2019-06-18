import * as React from "react";
import classnames from "classnames";

import "./styles.scss";

export type ProgressProps = JSX.IntrinsicElements["div"] & {
  fill?: number;
  fills?: number[];
  lg?: boolean;
};

const getDecValue = (val: number) => Math.min(Math.ceil(val * 100), 100);

export const Progress = ({
  className,
  fill = 0,
  fills,
  lg,
  ...rest
}: ProgressProps) => (
  <div
    className={classnames("progress", className, { "progress-lg": lg })}
    {...rest}
  >
    {fills && fills.length > 0 ? (
      fills.map((item, index) => (
        <div
          key={index}
          className={"progress-bar"}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={getDecValue(item)}
          style={{
            width: `${getDecValue(item)}%`
          }}
        />
      ))
    ) : (
      <div
        className={"progress-bar"}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={getDecValue(fill)}
        style={{
          width: `${getDecValue(fill)}%`
        }}
      />
    )}
  </div>
);

Progress.defaultProps = {
  className: null,
  fill: 1
};

Progress.displayName = "Progress";

export default Progress;
