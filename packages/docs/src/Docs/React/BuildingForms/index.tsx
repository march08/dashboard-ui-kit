import * as React from 'react';
import {
  TextField,
  FormGroupContainer,
  FormGroup,
  Select,
  TextArea,
  Divider,
} from '@duik/it';
import { CodeRH, H1 } from 'components';
import { DocsContentPage, PageMock } from '../../components';

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
            options={[{ value: 1, label: 'Option' }]}
          />
        </FormGroup>
        <FormGroup>
          <Select
            block
            placeholder="Select State"
            label="State"
            options={[{ value: 1, label: 'Option' }]}
          />
        </FormGroup>
      </FormGroupContainer>
      <FormGroup>
        <TextArea label="Bio" />
      </FormGroup>
    </FormGroupContainer>
  </form>
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
