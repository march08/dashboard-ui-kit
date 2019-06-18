import * as React from "react";
import {
  TopBar,
  TopBarSection,
  TopBarTitle,
  TextField,
  TopBarLinkContainer,
  TopBarLink,
  Button,
  FormGroupContainer,
  FormGroup,
  Select,
  TextArea,
  Divider
} from "@duik/it";
import { Icon } from "@duik/icon";
import { Link } from "react-router-dom";
import { CodeRH, H1 } from "components";
import { DocsContentPage, PageContent, PageMock } from "../../components";

const simpleExample = (
  <form>
    <FormGroupContainer>
      <FormGroupContainer horizontal>
        <FormGroup>
          <TextField label="Name" />
        </FormGroup>
        <FormGroup>
          <TextField label="Surname" />
        </FormGroup>
      </FormGroupContainer>
      <Divider margin />
      <FormGroupContainer horizontal>
        <FormGroup>
          <Select
            block
            placeholder="Select Country"
            label="Country"
            options={[{ value: 1, label: "Option" }]}
          />
        </FormGroup>
        <FormGroup>
          <Select
            block
            placeholder="Select State"
            label="State"
            options={[{ value: 1, label: "Option" }]}
          />
        </FormGroup>
      </FormGroupContainer>
      <FormGroup>
        <TextArea label="Bio" />
      </FormGroup>
    </FormGroupContainer>
  </form>
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
      {/* 
      <PageContent data={[
        { id: 'simple', label: 'Basic Example' },
        { id: 'menu', label: 'With navigation' },
        { id: 'search', label: 'Extra elements' },
      ]} /> */}
      <H1>Building Forms</H1>
      <h2 id="simple">Example Form</h2>
      <PageMock white>{simpleExample}</PageMock>
      <CodeRH content={simpleExample} />
    </DocsContentPage>
  );
};

export default ReactDocsBuildingTopBar;
