import * as React from "react";
import { camelToSnake, combineText } from "utils";

export type ImportPathProps = {
  name: string;
  isIncludedInKit?: boolean;
  subComponents?: string[];
};

export const ImportPath = (props: ImportPathProps) => {
  const { name, subComponents, isIncludedInKit = true } = props;

  return (
    <div style={{ marginBottom: 30 }}>
      {isIncludedInKit ? (
        <>
          <code style={{ marginBottom: 5 }}>{`import { ${name}${
            subComponents ? `, ${combineText(subComponents, ", ")}` : ""
          } } from '@duik/it'`}</code>
          <br />
        </>
      ) : null}
      <code>{`import ${name}${
        subComponents ? `, { ${combineText(subComponents, ", ")} } ` : ""
      } from '@duik/${camelToSnake(name)}'`}</code>
    </div>
  );
};
