import * as React from "react";
import { H1 } from "components";
import {
  Button,
  ButtonGroup,
  Dropdown,
  DropdownMenuPosition,
  DropdownItem
} from "@duik/it";

import { Icon } from "@duik/icon";

import {
  DocsContentPage,
  ExampleTable,
  PageContent,
  ImportPath
} from "../../components";

import PropTable from "./PropTable";

export const ReactDocsButtonGroup = () => {
  return (
    <DocsContentPage>
      <PageContent
        data={[
          { id: "example", label: "Examples" },
          { id: "sizes", label: "Sizes" },
          { id: "props", label: "Prop Table" }
        ]}
      />
      <H1>ButtonGroup</H1>
      <ImportPath name="ButtonGroup" />
      <br />
      <p>Group buttons horizontaly or verticaly.</p>

      <h2 id="example">Examples</h2>
      <ExampleTable
        fixed
        data={[
          {
            content: (
              <ButtonGroup>
                <Button>Select Action</Button>
                <Button square>
                  <Icon>pen_edit</Icon>
                </Button>
              </ButtonGroup>
            )
          },
          {
            content: (
              <ButtonGroup>
                <Button primary>1st Pill</Button>
                <Button primary>2nd pill</Button>
                <Button primary>3rd pill</Button>
              </ButtonGroup>
            )
          },
          {
            content: (
              <ButtonGroup vertical>
                <Button primary>1st Pill</Button>
                <Button primary>2nd pill</Button>
                <Button primary>3rd pill</Button>
              </ButtonGroup>
            )
          }
        ]}
      />

      <h2 id="sizes">Sizes &amp; Shapes</h2>

      <ExampleTable
        fixed
        data={[
          {
            content: (
              <ButtonGroup sm>
                <Button>Small Buttons</Button>
                <Button square>
                  <Icon>pen_edit</Icon>
                </Button>
              </ButtonGroup>
            )
          },
          {
            content: (
              <ButtonGroup>
                <Button>Regular</Button>
                <Button square>
                  <Icon>pen_edit</Icon>
                </Button>
              </ButtonGroup>
            )
          },
          {
            content: (
              <ButtonGroup lg>
                <Button>Large Sized Buttons</Button>
                <Dropdown
                  buttonProps={{
                    square: true
                  }}
                  buttonText={<Icon>pen_edit</Icon>}
                  menuPosition={DropdownMenuPosition["bottom-left"]}
                >
                  <DropdownItem>
                    <Icon mr>pen_edit</Icon>Something here
                  </DropdownItem>
                </Dropdown>
              </ButtonGroup>
            )
          }
        ]}
      />

      <PropTable />
    </DocsContentPage>
  );
};

export default ReactDocsButtonGroup;
