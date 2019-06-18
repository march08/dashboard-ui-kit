import * as React from "react";
import { Checkbox } from "@duik/it";
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
      <H1>Checkbox</H1>
      <ImportPath name="Checkbox" />
      <p>Who doesn't like customized checkboxes?</p>

      <h2 id="basic-usage">Basic Usage</h2>

      <ExampleTable
        fixed
        data={[
          { content: <Checkbox defaultChecked /> },
          { content: <Checkbox label="Check me" /> },
          {
            content: (
              <Checkbox label="Checkbox" description="With Description" />
            )
          },
          {
            content: (
              <Checkbox
                disabled
                label="Checkbox"
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
