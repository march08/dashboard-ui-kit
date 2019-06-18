import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "@duik/it";
import { H1 } from "components";
import { Icon } from "@duik/icon";

import {
  DocsContentPage,
  ExampleTable,
  PageContent,
  ImportPath
} from "../../components";

import PropTable from "./PropTable";
import CustomRendering from "./CustomRendering";

export const ReactDocsButton = () => {
  return (
    <DocsContentPage>
      <PageContent
        data={[
          { id: "appearence", label: "Appearence" },
          { id: "sizes", label: "Sizes" },
          { id: "states", label: "States" },
          { id: "custom-rendering", label: "Custom DOM Rendering" },
          { id: "with-icons", label: "With Icons" },
          { id: "props", label: "Prop Table" },
          { id: "migration", label: "Migration from Dashboard UI Kit 3" }
        ]}
      />
      <H1>Button</H1>
      <ImportPath name="Button" />
      <br />
      <p>Use buttons in forms, as links with many varieties.</p>

      <h2 id="appearence">Appearence</h2>
      <p>
        You can control apperence by simply passing boolean props to render some
        predefined stylings or you can pass your className or style props as
        well.
      </p>

      <ExampleTable
        fixed
        data={[
          { content: <Button>Default</Button> },
          { content: <Button transparent>Transparent</Button> },
          { content: <Button clear>Clear</Button> },
          { content: <Button primary>Primary</Button> },
          { content: <Button success>Success</Button> },
          { content: <Button danger>Danger</Button> }
        ]}
      />
      <h2 id="sizes">Sizes &amp; Shapes</h2>
      <p>
        Same as appearence, you can use set of predefined boolean props to
        quickly achieve the result
      </p>

      <ExampleTable
        fixed
        data={[
          { content: <Button sm>Small Button</Button> },
          { content: <Button>Default Size</Button> },
          { content: <Button lg>Large Button</Button> },
          {
            content: (
              <Button square>
                <Icon>rocket</Icon>
              </Button>
            )
          }
        ]}
      />
      <h2 id="states">States</h2>
      <ExampleTable
        fixed
        data={[
          { content: <Button disabled>Disabled</Button> },
          { content: <Button loading>Loading</Button> },
          {
            content: (
              <Button loading primary>
                Loading primary
              </Button>
            )
          }
        ]}
      />

      <CustomRendering />

      <h2 id="with-icons">Button with Icons</h2>
      <p>
        You can easily compose buttons with icons. You can pass Icon (or any
        other component) as a children of the Button component. Check the
        details about importing and using{" "}
        <Link to="/docs/react/icon">Icon component here</Link>.
      </p>

      <ExampleTable
        fixed
        data={[
          {
            content: (
              <Button primary>
                <Icon mr>message</Icon> With Icon on left
              </Button>
            )
          },
          {
            content: (
              <Button primary>
                With Icon on right<Icon ml>attachment</Icon>
              </Button>
            )
          },
          {
            content: (
              <Button success square>
                <Icon>check</Icon>
              </Button>
            )
          }
        ]}
      />

      <PropTable />

      <h2 id="migration">Migration from Dashboard UI Kit 3</h2>
      <p>
        Icon properties are removed in favor to use icons as children instead.
        "iconOnly" property rendered button in square shape. Use "square"
        property instead.
      </p>
    </DocsContentPage>
  );
};

export default ReactDocsButton;
