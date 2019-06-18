import * as React from "react";
import {
  TopBar,
  TopBarSection,
  TopBarTitle,
  TextField,
  TopBarLinkContainer,
  TopBarLink,
  Button
} from "@duik/it";
import { Icon } from "@duik/icon";
import { Link } from "react-router-dom";
import { CodeRH, H1 } from "components";
import { DocsContentPage, PageContent, PageMock } from "../../components";

const simpleExample = (
  <>
    <TopBar>
      <TopBarSection>
        <TopBarTitle>Dashboard</TopBarTitle>
      </TopBarSection>
      <TopBarSection>
        <Button primary>Login</Button>
      </TopBarSection>
    </TopBar>
    <section
      style={{ textAlign: "center", padding: 50, background: "var(--bg-base)" }}
    >
      Some content
    </section>
  </>
);
const searchExample = (
  <>
    <TopBar>
      <TopBarSection>
        <TopBarSection>
          <TopBarTitle>
            <Icon className="c-primary">front_store</Icon>Dashboard
          </TopBarTitle>
          <TopBarSection></TopBarSection>
          <TopBarLinkContainer>
            <TopBarLink href="#">Link 1</TopBarLink>
            <TopBarLink className="active" href="#">
              Link 2
            </TopBarLink>
          </TopBarLinkContainer>
        </TopBarSection>
      </TopBarSection>
      <TopBarSection>
        <TextField
          placeholder="Search for lemonades"
          rightEl={<Icon>search_left</Icon>}
        />
      </TopBarSection>
    </TopBar>
    <section
      style={{ textAlign: "center", padding: 50, background: "var(--bg-base)" }}
    >
      Some content
    </section>
  </>
);

const menuExample = (
  <>
    <TopBar>
      <TopBarSection>
        <TopBarSection>
          <TopBarTitle>Dashboard</TopBarTitle>
          <TopBarSection></TopBarSection>
          <TopBarLinkContainer>
            <TopBarLink href="#">Link 1</TopBarLink>
            <TopBarLink className="active" href="#">
              Link 2
            </TopBarLink>
          </TopBarLinkContainer>
        </TopBarSection>
      </TopBarSection>
      <TopBarSection>
        <TopBarSection>
          <TopBarLinkContainer>
            <TopBarLink href="#">Link 3</TopBarLink>
            <TopBarLink href="#">Link 4</TopBarLink>
          </TopBarLinkContainer>
        </TopBarSection>
        <TopBarSection>
          <Button primary>Login</Button>
        </TopBarSection>
      </TopBarSection>
    </TopBar>
    <section
      style={{ textAlign: "center", padding: 50, background: "var(--bg-base)" }}
    >
      Some content
    </section>
  </>
);

export const ReactDocsBuildingTopBar = () => {
  return (
    <DocsContentPage>
      <PageContent
        data={[
          { id: "simple", label: "Basic Example" },
          { id: "menu", label: "With navigation" },
          { id: "search", label: "Extra elements" }
        ]}
      />
      <H1>Building Top Bar</H1>
      <p>
        In order to create consitent UI, we are including some handy components
        for building TopBar in a simplest way possible. Of course, you don't
        have to limit yourself to these examples, but it's the fastest way to
        build the top bars that matches the design language of the kit!
      </p>
      <p>
        This page offers some specific examples of how to build your perfect
        TopBar. Make sure you visit{" "}
        <Link to="/docs/react/building-layout">Building Layout</Link> page as
        well!
      </p>
      <h2>List of related components</h2>
      <ol>
        <li>
          <Link to="/docs/react/top-bar">TopBar</Link>
        </li>
        <li>
          <Link to="/docs/react/top-bar-link">TopBarLink</Link>
        </li>
        <li>
          <Link to="/docs/react/top-bar-link-container">
            TopBarLinkContainer
          </Link>
        </li>
        <li>
          <Link to="/docs/react/top-bar-section">TopBarSection</Link>
        </li>
        <li>
          <Link to="/docs/react/top-bar-title">TopBarTitle</Link>
        </li>
      </ol>
      <h2 id="simple">Simple TopBar Example</h2>
      <PageMock>{simpleExample}</PageMock>
      <CodeRH content={simpleExample} />

      <h2 id="menu">Menu Example</h2>
      <PageMock>{menuExample}</PageMock>
      <CodeRH content={menuExample} />
      <h2 id="search">Search Example</h2>
      <PageMock>{searchExample}</PageMock>
      <CodeRH content={searchExample} />
    </DocsContentPage>
  );
};

export default ReactDocsBuildingTopBar;
