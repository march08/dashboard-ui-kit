import * as React from "react";
import {
  ContainerVertical,
  ContainerHorizontal,
  NavPanel,
  NavSection,
  NavLink,
  NavSectionTitle,
  TopBar,
  TopBarSection,
  TopBarTitle,
  Widget,
  ScrollArea,
  WidgetContainer,
  TopBarLinkContainer,
  TopBarLink
} from "@duik/it";
import { Link } from "react-router-dom";
import { Code, H1 } from "components";
import { jsxToString } from "utils";
import { DocsContentPage, PageContent } from "../../components";

const fullExample = (
  <div
    style={{
      height: "400px",
      border: "1px solid var(--border-color-base)",
      background: "var(--bg-base)"
    }}
  >
    <ContainerVertical>
      <TopBar>
        <TopBarSection>
          <TopBarTitle>Dashboard</TopBarTitle>
        </TopBarSection>
        <TopBarSection>
          <TopBarLinkContainer>
            <TopBarLink>Menu item 1</TopBarLink>
            <TopBarLink href="#" className="active">
              Menu item 1
            </TopBarLink>
          </TopBarLinkContainer>
        </TopBarSection>
      </TopBar>
      <ContainerHorizontal>
        <NavPanel>
          <NavSection>
            <NavSectionTitle>Menu</NavSectionTitle>
            <NavLink highlighted>Hello item</NavLink>
            <NavLink highlighted>Title for link</NavLink>
          </NavSection>
        </NavPanel>
        <ScrollArea>
          <WidgetContainer>
            <Widget padding>
              <h2>Title</h2>
            </Widget>
          </WidgetContainer>
        </ScrollArea>
      </ContainerHorizontal>
    </ContainerVertical>
  </div>
);

export const ReactDocsOuterEventsHandler = () => {
  return (
    <DocsContentPage>
      <PageContent
        data={[
          { id: "example", label: "Basic Example" },
          { id: "vertical-split", label: "Vertical Splitting" },
          { id: "horizontal-split", label: "Horizontal Splitting" },
          { id: "full-example", label: "Full Example With DUIK" }
        ]}
      />
      <H1>Building layouts with Dashboard UI Kit</H1>
      <p>
        First thing to know is that you don't have to use any of these
        components to make your layout work in your project.{" "}
        <i>
          You can freely build your layout with bootstrap or any other UI
          library as well.
        </i>
      </p>
      <p>
        On this page, we are going to show you how to build a dashboard type
        layout with already made components that are part of the kit and works
        with the kit design language. The main building blocks are using{" "}
        <a
          href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
          rel="noopener noreferrer"
          target="_blank"
        >
          flexbox properties
        </a>
        .
      </p>
      <h2 id="example">Example layout</h2>
      <p>Let's build our hypothetical layout with some help from the kit.</p>
      <div style={{ color: "white" }}>
        <div style={{ height: "70px", background: "#34ace0" }}>Top Bar</div>
        <div style={{ height: "300px", display: "flex" }}>
          <div
            style={{ background: "#ff5252", flexBasis: "30%", height: "300px" }}
          >
            Menu
          </div>
          <div
            style={{ background: "#ffb142", flexBasis: "70%", height: "300px" }}
          >
            Main Content
          </div>
        </div>
      </div>
      <h3 id="vertical-split">
        Step 1: splitting the layout verticaly - top bar and the content
      </h3>
      <p>
        We know that we will always have these 3 segments visible. Let's cut the
        layout down into two parts. The top bar and the rest first, like this:
      </p>
      <br />

      <div style={{ color: "white" }}>
        <div style={{ padding: "15px", border: "1px solid #ddd" }}>
          <div style={{ height: "70px", background: "#34ace0" }}>Top Bar</div>
        </div>
        <div style={{ padding: "15px", border: "1px solid #ddd" }}>
          <div style={{ height: "300px", display: "flex" }}>
            <div
              style={{
                background: "#ff5252",
                flexBasis: "30%",
                height: "300px"
              }}
            >
              Menu
            </div>
            <div
              style={{
                background: "#ffb142",
                flexBasis: "70%",
                height: "300px"
              }}
            >
              Main Content
            </div>
          </div>
        </div>
      </div>
      <p>
        For splitting the layout vertically, we can use{" "}
        <Link to="/docs/react/container-vertical">ContainerVertical</Link>. The
        component has a <code>display: flex</code> property with{" "}
        <code>flex-direction: column</code>. The behaviour is very similar to{" "}
        <code>{"<View />"}</code> component from react native.
      </p>
      <h4>The code with ContainerVertical</h4>
      <Code>
        {`import {
  ContainerVertical
} from '@duik/it'

...

const MyLayout = () => (
  <div style={ { height: '400px' } }> {/* just to simulate viewport*/}
    <ContainerVertical>
      <div style={ { flexBasis: '70px', background: '#34ace0' } }>
        Top Bar
      </div>
      {/* we are adding flex-grow: 1 because we are inside flexbox element and we want to fill rest of the viewport height */}
      <div style={ { flexGrow: '1', background: '#ffb142' } }>
        Some content
      </div>
    </ContainerVertical>
  </div>
)`}
      </Code>
      <br />
      <p>Result:</p>
      <div style={{ height: "400px" }}>
        <ContainerVertical>
          <div style={{ flexBasis: "70px", background: "#34ace0" }}>
            Top Bar
          </div>
          <div style={{ flexGrow: 1, background: "#ffb142" }}>Some content</div>
        </ContainerVertical>
      </div>

      <h3 id="horizontal-split">
        Step 2: splitting the content horizontaly - navigation and the page
      </h3>
      <p>
        The vertical split is done, let's cut down the bottom part of our layout
        like this:
      </p>

      <div style={{ color: "white" }}>
        <div style={{ height: "70px", background: "#34ace0" }}>Top Bar</div>
        <div style={{ height: "300px", display: "flex" }}>
          <div
            style={{
              padding: "15px",
              border: "1px solid #ddd",
              flexBasis: "30%"
            }}
          >
            <div style={{ background: "#ff5252", height: "270px" }}>Menu</div>
          </div>
          <div
            style={{
              padding: "15px",
              flexBasis: "70%",
              border: "1px solid #ddd"
            }}
          >
            <div style={{ background: "#ffb142", height: "270px" }}>
              Main Content
            </div>
          </div>
        </div>
      </div>
      <br />
      <p>
        For splitting the layout horizontaly, we can use{" "}
        <Link to="/docs/react/container-horizontal">ContainerHorizontal</Link>.
        It works the same way as ContainerVertical, just horizontaly.
      </p>
      <br />
      <h4>The code with ContainerHorizontal</h4>
      <Code>
        {`import {
  ContainerVertical,
  ContainerHorizontal,
} from '@duik/it'

...

const MyLayout = () => (
  <div style={ { height: '400px' } }> {/* just to simulate viewport*/}
    <ContainerVertical>
      <div style={ { flexBasis: '70px', background: '#34ace0' } }>
        Top Bar
      </div>
      <ContainerHorizontal>
        <div style={ { background: '#ff5252', flexBasis: '30%' } }>
          Menu
        </div>
        <div style={ { background: '#ffb142', flexBasis: '70%' } }>
          Main Content
        </div>
      </ContainerHorizontal>
    </ContainerVertical>
  </div>
)`}
      </Code>
      <br />
      <p>Result:</p>
      <div style={{ height: "400px" }}>
        <ContainerVertical>
          <div style={{ flexBasis: "70px", background: "#34ace0" }}>
            Top Bar
          </div>
          <ContainerHorizontal>
            <div style={{ background: "#ff5252", flexBasis: "30%" }}>Menu</div>
            <div style={{ background: "#ffb142", flexBasis: "70%" }}>
              Main Content
            </div>
          </ContainerHorizontal>
        </ContainerVertical>
      </div>

      <h2 id="full-example">
        Full Example: Using duik components in the layout
      </h2>
      <p>
        If you generally like the layout of the UI Kit, you can also use the
        predefined components to build the layout quickly. Here is an simple
        example, in which we will be using:
      </p>
      <ul>
        <li>
          <Link to="/docs/react/container-horizontal">ContainerHorizontal</Link>
        </li>
        <li>
          <Link to="/docs/react/container-vertical">ContainerVertical</Link>
        </li>
        <li>
          {"TopBar "}
          <Link to="/docs/react/top-bar">(see more examples)</Link>
        </li>
        <li>
          {"NavPanel "}
          <Link to="/docs/react/nav-panel">(see more examples)</Link>
        </li>
        <li>
          <Link to="/docs/react/widget">Widget</Link>
        </li>
      </ul>

      <br />

      <p>
        For splitting the layout horizontaly, we can use{" "}
        <Link to="/docs/react/container-horizontal">ContainerHorizontal</Link>.
        It works the same way as ContainerVertical, just horizontaly.
      </p>
      <h4>The code</h4>
      <p>
        With very little code, you can build quite complex interface. Of course,
        you should split the code into multiple files!
      </p>
      <Code>{jsxToString(fullExample)}</Code>

      <h4>Result</h4>
      {fullExample}
    </DocsContentPage>
  );
};

export default ReactDocsOuterEventsHandler;
