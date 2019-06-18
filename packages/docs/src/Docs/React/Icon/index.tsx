import * as React from "react";
import { Button } from "@duik/it";
import { Icon, DUIKON } from "@duik/icon";
import { copyToClipboard } from "utils";
import { H1 } from "components";
import {
  DocsContentPage,
  ExampleTable,
  PageContent,
  ImportPath
} from "../../components";

import PropTable from "./PropTable";

import cls from "./docs-icons.module.scss";

export const ReactDocsIcon = () => {
  const icons = Object.values(DUIKON);
  return (
    <DocsContentPage>
      <PageContent
        data={[
          { id: "basic-usage", label: "Basic Usage" },
          { id: "list", label: "List of Icons" },
          { id: "props", label: "Prop Table" }
        ]}
      />
      <H1>Icon</H1>
      <ImportPath name="Icon" isIncludedInKit={false} />
      <p>
        This is a set of icons specific to the @duik. The icon set is not part
        of the <code>@duik/it</code> and has to be imported separatedly to
        dramatically reduce overall size of the library.
      </p>
      <p>
        Icons are coming from a set of fonts, leveraging typographic ligature.
        Change the color the same way you would do as with a font.
      </p>

      <h2 id="basic-usage">Basic Usage</h2>

      <ExampleTable
        fixed
        data={[
          { content: <Icon>building</Icon> },
          { content: <Icon style={{ color: "red" }}>building</Icon> },
          {
            content: (
              <Button square>
                <Icon>building</Icon>
              </Button>
            )
          },
          {
            content: (
              <Button>
                <Icon mr>building</Icon>Text
              </Button>
            )
          },
          {
            content: (
              <Button>
                Text<Icon ml>building</Icon>
              </Button>
            )
          }
        ]}
      />

      <h2 id="list">List of Icons</h2>
      <div className={cls.icons}>
        {icons
          .sort((a, b) => `${a}`.localeCompare(`${b}`))
          .map(icon => (
            <Button
              clear
              key={icon}
              className={cls.iconWrapper}
              onClick={() => copyToClipboard(icon)}
            >
              <div className={cls.icon}>
                <Icon
                  style={{
                    fontSize: "24px"
                  }}
                >
                  {icon}
                </Icon>
              </div>
              <div className={cls.ligature}>{icon}</div>
            </Button>
          ))}
      </div>

      <PropTable />
    </DocsContentPage>
  );
};

export default ReactDocsIcon;
