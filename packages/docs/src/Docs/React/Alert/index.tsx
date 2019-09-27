import * as React from "react";
import { Button, Alert } from "@duik/it";
import { H1 } from "components";
import { Icon } from "@duik/icon";

import {
  DocsContentPage,
  ExampleTable,
  PageContent,
  ImportPath
} from "../../components";

import PropTable from "./PropTable";

export const ReactDocsAlert = () => {
  return (
    <DocsContentPage>
      <PageContent
        data={[
          { id: "appearence", label: "Variants" },
          { id: "content", label: "Composing Content" },
          { id: "props", label: "Prop Table" }
        ]}
      />
      <H1>Alert</H1>
      <ImportPath name="Alert" />
      <p>
        Alert is a simple component providing an interface for delivering
        information to user. For a proper usage, you should handle displaying
        the alert (e.g. in the fixed container) by yourself. Alerts have
        role="alert" set by default. Maximum width is set to 760px.
      </p>
      <h2 id="appearence">Variants</h2>
      <ExampleTable
        fixed
        data={[
          {
            content: (
              <Alert
                rightEl={
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <Icon>close</Icon>
                  </button>
                }
                leftEl={<Icon>rocket</Icon>}
              >
                This is a default alert
              </Alert>
            )
          },
          {
            content: (
              <Alert
                rightEl={
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <Icon>close</Icon>
                  </button>
                }
                leftEl={<Icon>rocket</Icon>}
                primary
              >
                983 people started following you.
              </Alert>
            )
          },
          {
            content: (
              <Alert
                rightEl={
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <Icon>close</Icon>
                  </button>
                }
                leftEl={<Icon>rocket</Icon>}
                success
              >
                Yey, it's a success!
              </Alert>
            )
          },
          {
            content: (
              <Alert
                rightEl={
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <Icon>close</Icon>
                  </button>
                }
                leftEl={<Icon>rocket</Icon>}
                danger
              >
                Your dog needs some water!
              </Alert>
            )
          },
          {
            content: (
              <Alert
                rightEl={
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <Icon>close</Icon>
                  </button>
                }
                leftEl={<Icon>rocket</Icon>}
                warning
              >
                Your coffee might be too hot!
              </Alert>
            )
          }
        ]}
      />
      <h2 id="content">Composing content</h2>

      <ExampleTable
        fixed
        data={[
          {
            content: (
              <Alert
                rightEl={
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <Icon>close</Icon>
                  </button>
                }
                primary
              >
                <h4>Welcome to Dashboard UI Kit!</h4>
                <p>
                  Super nice kit, easy to compose and build UIs with a beautiful
                  design
                </p>
                <Button sm>
                  Explore Documentation
                </Button>
              </Alert>
            )
          }
        ]}
      />

      <PropTable />
    </DocsContentPage>
  );
};

export default ReactDocsAlert;
