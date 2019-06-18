import * as React from "react";
import { Toggle } from "@duik/it";
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
      <H1>Toggle</H1>
      <ImportPath name="Toggle" />
      <p>
        Toggles work the same way as checkboxes, e.g. you can group them with
        "name" property in your forms.
      </p>

      <h2 id="basic-usage">Basic Usage</h2>

      <ExampleTable
        fixed
        data={[
          { content: <Toggle defaultChecked /> },
          { content: <Toggle label="Check me" /> },
          { content: <Toggle label="Toggle" description="With Description" /> },
          {
            content: (
              <Toggle disabled label="Toggle" description="With Description" />
            )
          }
        ]}
      />

      <PropTable />
    </DocsContentPage>
  );
};

export default ReactDocsButton;
