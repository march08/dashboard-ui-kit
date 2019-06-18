import * as React from "react";
import { Radio } from "@duik/it";
import { H1 } from "components";
import {
  DocsContentPage,
  ExampleTable,
  PageContent,
  ImportPath
} from "../../components";

import PropTable from "./PropTable";

export const ReactDocsButton = () => {
  return (
    <DocsContentPage>
      <PageContent
        data={[
          { id: "basic-usage", label: "Basic Usage" },
          { id: "props", label: "Prop Table" }
        ]}
      />
      <H1>Radio</H1>
      <ImportPath name="Radio" />
      <p>Custom Radio</p>

      <h2 id="basic-usage">Basic Usage</h2>

      <ExampleTable
        fixed
        data={[
          { content: <Radio name="radioGroup" defaultChecked /> },
          { content: <Radio name="radioGroup" label="Check me" /> },
          {
            content: (
              <Radio
                name="radioGroup"
                label="Radio"
                description="With Description"
              />
            )
          },
          {
            content: (
              <Radio
                name="radioGroup"
                disabled
                label="Radio"
                description="With Description"
              />
            )
          }
        ]}
      />

      <PropTable />
    </DocsContentPage>
  );
};

export default ReactDocsButton;
