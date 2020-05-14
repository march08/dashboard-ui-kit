import * as React from 'react';
import { TextField } from '@duik/it';
import { Icon } from '@duik/icon';
import { H1 } from 'components';
import {
  DocsContentPage,
  ExampleTable,
  PageContent,
  ImportPath,
} from '../../components';

import PropTable from './PropTable';

export const ReactDocsOuterEventsHandler = () => {
  return (
    <DocsContentPage>
      <PageContent
        data={[
          { id: 'basic-usage', label: 'Basic Usage' },
          { id: 'props', label: 'Prop Table' },
        ]}
      />
      <H1>TextField</H1>
      <ImportPath name="TextField" />
      <h2 id="basic-usage">Basic Usage</h2>

      <ExampleTable
        data={[
          {
            content: <TextField defaultValue="Default text" />,
          },
          {
            content: <TextField label="Label" placeholder="Write Something" />,
          },
          {
            content: (
              <TextField
                label="Label"
                errorMessage="There is a problem"
                placeholder="Write Something"
              />
            ),
          },
          {
            content: (
              <TextField
                label="Label"
                successMessage="It's ok!"
                placeholder="Write Something"
              />
            ),
          },
          {
            content: (
              <TextField
                label="Label"
                leftEl={<Icon>search_left</Icon>}
                placeholder="Write Something"
              />
            ),
          },
          {
            content: (
              <TextField
                label="Label"
                rightEl={<Icon>search_left</Icon>}
                placeholder="Write Something"
              />
            ),
          },
          {
            content: (
              <TextField
                disabled
                label="Label"
                rightEl={<Icon>search_left</Icon>}
                placeholder="Write Something"
              />
            ),
          },
          {
            content: (
              <TextField readOnly label="Label" placeholder="Write Something" />
            ),
          },
          {
            content: <TextField clear placeholder="Write Something" />,
          },
          {
            content: (
              <TextField
                clear
                leftEl={<Icon>search_left</Icon>}
                placeholder="Write Something"
              />
            ),
          },
          {
            content: (
              <TextField
                clear
                rightEl={<Icon>search_left</Icon>}
                placeholder="Write Something"
              />
            ),
          },
        ]}
      />
      <PropTable />
    </DocsContentPage>
  );
};

export default ReactDocsOuterEventsHandler;
