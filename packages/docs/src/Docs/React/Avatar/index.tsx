import * as React from "react";
import { Avatar } from "@duik/it";
import * as assets from "assets";
import { H1 } from "components";

import {
  DocsContentPage,
  ExampleTable,
  PageContent,
  ImportPath
} from "../../components";

import PropTable from "./PropTable";

export const ReactDocsAvatar = () => {
  return (
    <DocsContentPage>
      <PageContent
        data={[
          { id: "text-control", label: "Text Control" },
          { id: "sizes", label: "Sizes" },
          { id: "multiple", label: "Multiple Images" },
          { id: "placeholders", label: "Placeholders" },
          { id: "other", label: "Other elements" },
          { id: "props", label: "Prop Table" }
        ]}
      />
      <H1>Avatar</H1>
      <ImportPath name="Avatar" />
      <br />
      <p>Display user content with ease.</p>

      <h2 id="text-control">Text control</h2>

      <ExampleTable
        fixed
        data={[
          { content: <Avatar imgUrl={assets.a01} /> },
          { content: <Avatar imgUrl={assets.a01} name="John Snow" /> },
          {
            content: (
              <Avatar imgUrl={assets.a01} name={<strong>John Snow</strong>} />
            )
          },
          {
            content: (
              <Avatar
                imgUrl={assets.a21}
                name={<strong>Natasha Special</strong>}
                textTop="Created by"
              />
            )
          },
          {
            content: (
              <Avatar
                imgUrl={assets.a21}
                name={<strong>Natasha Special</strong>}
                textBottom={
                  <>
                    <strong>Senior</strong> HR Manager
                  </>
                }
              />
            )
          }
        ]}
      />
      <h2 id="sizes">Sizes</h2>

      <ExampleTable
        fixed
        data={[
          {
            content: (
              <Avatar sm imgUrl={assets.a02} name={<strong>28px</strong>} />
            )
          },
          {
            content: <Avatar imgUrl={assets.a03} name={<strong>38px</strong>} />
          },
          {
            content: (
              <Avatar lg imgUrl={assets.a04} name={<strong>60px</strong>} />
            )
          },
          {
            content: (
              <Avatar xl imgUrl={assets.a05} name={<strong>80px</strong>} />
            )
          },
          {
            content: (
              <Avatar xxl imgUrl={assets.a06} name={<strong>100px</strong>} />
            )
          },
          {
            content: (
              <Avatar jumbo imgUrl={assets.a07} name={<strong>120px</strong>} />
            )
          }
        ]}
      />
      <h2 id="multiple">Multiple Images</h2>

      <ExampleTable
        fixed
        data={[
          {
            content: (
              <Avatar
                lg
                textTop="Group Conversation"
                imgUrl={[assets.a05, assets.a15]}
                name={<strong>Just us</strong>}
              />
            )
          },
          {
            content: (
              <Avatar
                lg
                textTop="Group Conversation"
                imgUrl={[assets.a10, assets.a11, assets.a22]}
                name={<strong>Reading strong</strong>}
              />
            )
          },
          {
            content: (
              <Avatar
                lg
                textTop="Group Conversation"
                imgUrl={[assets.a09, assets.a07, assets.a25, assets.a23]}
                name={<strong>Party people</strong>}
              />
            )
          }
        ]}
      />

      <h2 id="placeholders">Placeholders</h2>

      <ExampleTable
        fixed
        data={[
          {
            content: (
              <Avatar
                sm
                avatarPlaceholder={{
                  content: "PH",
                  color: "indigo"
                }}
                name={<strong>28px</strong>}
              />
            )
          },
          {
            content: (
              <Avatar
                avatarPlaceholder={{
                  content: "PH",
                  color: "blue"
                }}
                name={<strong>38px</strong>}
              />
            )
          },
          {
            content: (
              <Avatar
                lg
                avatarPlaceholder={{
                  content: "PH",
                  color: "green"
                }}
                name={<strong>60px</strong>}
              />
            )
          },
          {
            content: (
              <Avatar
                xl
                avatarPlaceholder={{
                  content: "PH",
                  color: "red"
                }}
                name={<strong>80px</strong>}
              />
            )
          },
          {
            content: (
              <Avatar
                xxl
                avatarPlaceholder={{
                  content: "PH",
                  color: "orange"
                }}
                name={<strong>100px</strong>}
              />
            )
          },
          {
            content: (
              <Avatar
                jumbo
                avatarPlaceholder={{
                  content: "PH",
                  color: "yellow"
                }}
                name={<strong>120px</strong>}
              />
            )
          }
        ]}
      />

      <h2 id="other">Other elements</h2>
      <p>Top help you render status etc.</p>

      <ExampleTable
        fixed
        data={[
          {
            content: (
              <Avatar
                lg
                imgUrl={assets.a04}
                leftEl={<span>O</span>}
                name={<strong>60px</strong>}
              />
            )
          }
        ]}
      />
      <PropTable />
    </DocsContentPage>
  );
};

export default ReactDocsAvatar;
