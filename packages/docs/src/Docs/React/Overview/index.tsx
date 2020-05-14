import * as React from 'react';
import { H1 } from 'components';
import { DocsContentPage, PageContent } from '../../components';

export const ReactDocsOuterEventsHandler = () => {
  return (
    <DocsContentPage>
      <PageContent
        data={[
          { id: 'example', label: 'Basic Example' },
          { id: 'vertical-split', label: 'Vertical Splitting' },
          { id: 'horizontal-split', label: 'Horizontal Splitting' },
          { id: 'full-example', label: 'Full Example With DUIK' },
        ]}
      />
      <H1>Dashboard UI Kit</H1>
      <h2>Overview</h2>
      <h2>Key Features</h2>
      <h3>Design</h3>
      <h3>Composability</h3>
      <h3>Developer Experience</h3>
      <h3>Easy to modify</h3>
      <h2>Design Patters</h2>
    </DocsContentPage>
  );
};

export default ReactDocsOuterEventsHandler;
