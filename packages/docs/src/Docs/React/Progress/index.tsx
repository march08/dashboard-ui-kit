import * as React from "react";
import { Progress } from "@duik/it";
import { H1 } from "components";
import {
  DocsContentPage,
  ExampleTable,
  ImportPath,
  PageContent
} from "../../components";

import PropTable from "./PropTable";

export const ReactDocsNavLink = () => {
  return (
    <DocsContentPage>
      <PageContent
        data={[
          { id: "basic-usage", label: "Basic Usage" },
          { id: "props", label: "Prop Table" }
        ]}
      />
      <H1>Progress</H1>
      <ImportPath name="Progress" />

      <p>Simple usage of progress bars! Input values from 0 to 1</p>

      <h2 id="basic-usage">Basic Usage</h2>
      <ExampleTable
        data={[
          { content: <Progress fill={0.8} /> },
          { content: <Progress lg fill={0.8} /> },
          { content: <Progress fills={[0.5, 0.3, 0.1]} /> }
        ]}
      />

      <PropTable />
    </DocsContentPage>
  );
};

export default ReactDocsNavLink;
