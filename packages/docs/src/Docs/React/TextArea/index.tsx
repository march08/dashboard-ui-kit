import * as React from "react";
import { TextArea } from "@duik/it";
import { H1 } from "components";
import {
  DocsContentPage,
  ExampleTable,
  PageContent,
  ImportPath
} from "../../components";

import PropTable from "./PropTable";

export const ReactDocsOuterEventsHandler = () => {
  return (
    <DocsContentPage>
      <PageContent
        data={[
          { id: "basic-usage", label: "Basic Usage" },
          { id: "props", label: "Prop Table" },
          { id: "migration", label: "Migration from Dashboard UI Kit 3" }
        ]}
      />
      <H1>TextArea</H1>
      <ImportPath name="TextArea" />
      <h2 id="basic-usage">Basic Usage</h2>

      <ExampleTable
        data={[
          {
            content: <TextArea defaultValue="Default text" />
          },
          {
            content: <TextArea label="Label" placeholder="Write Something" />
          },
          {
            content: (
              <TextArea
                label="Label"
                rows={10}
                defaultValue="Passing other attrs to textarea"
              />
            )
          },
          {
            content: (
              <TextArea
                label="Label"
                errorMessage="There is a problem"
                placeholder="Write Something"
              />
            )
          },
          {
            content: (
              <TextArea
                label="Label"
                successMessage="It's ok!"
                placeholder="Write Something"
              />
            )
          },
          {
            content: (
              <TextArea
                readOnly
                label="Read Only"
                placeholder="Write Something"
              />
            )
          },
          {
            content: (
              <TextArea
                disabled
                label="Disabled"
                defaultValue="Disabled content"
              />
            )
          },
          {
            content: (
              <TextArea
                clear
                placeholder="Clear with no border or background"
              />
            )
          }
        ]}
      />
      <PropTable />
    </DocsContentPage>
  );
};

export default ReactDocsOuterEventsHandler;
