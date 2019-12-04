import * as React from 'react';
import { H1 } from 'components';
import { Dropdown, OuterEventsHandler } from '@duik/it';
import { Link } from 'react-router-dom';
import {
  DocsContentPage,
  ExampleTable,
  PageContent,
  ImportPath,
} from '../../components';

import PropTable from './PropTable';

export const ReactDocsOuterEventsHandler = () => {
  const [clicks, setClicks] = React.useState(0);
  const handleOuterEvent = () => setClicks(clicks + 1);

  return (
    <DocsContentPage>
      <PageContent
        data={[
          { id: 'basic-usage', label: 'Basic Usage' },
          { id: 'more-events', label: 'More trigger events' },
          { id: 'props', label: 'Prop Table' },
        ]}
      />
      <H1>OuterEventsHandler</H1>
      <ImportPath name="OuterEventsHandler" />
      <p>
        This fairly simple component will let you know if selected events were
        triggered outside it's wrapping element. This is useful in situations
        like dropdowns, selects or modals. The component is used in some
        components in this kit as well, however we find it useful to expose it
        for your own creativity!
      </p>

      <h2 id="basic-usage">How it works?</h2>
      <p>
        Simply wrap your content with OuterEventsHandler and pass a single
        argument, a function that will be triggered when one of the supported
        events fires. By default, only outer clicks or hitting "esc" on your
        keyboard will trigger a passed function. See more options in the{' '}
        <Link to="#props">prop table description</Link> or live examples{' '}
        <Link to="#more-events">below</Link>.
      </p>

      <ExampleTable
        data={[
          {
            content: (
              <OuterEventsHandler onOuterEvent={handleOuterEvent}>
                <div
                  style={{ padding: 50, background: 'orange', color: 'white' }}
                >
                  Try to click outside/inside this content or press esc
                  <br />
                  Outer Events: {clicks}
                </div>
              </OuterEventsHandler>
            ),
            code: `<OuterEventsHandler onOuterEvent={handleOuterEvent}>
  <div style={{ padding: 50, background: 'orange', color: 'white' }}>
    Try to click outside/inside this content<br />
    Outer Events: {clicks}
  </div>
</OuterEventsHandler>`,
          },
        ]}
      />
      <p>
        This doesn't look that useful so far, let's see a real example of
        OuterEventsHandler in action with{' '}
        <Link to="/docs/react/dropdown">Dropdown</Link>, which is wrapped by
        OuterEventsHandler.
      </p>

      <ExampleTable
        data={[
          {
            content: (
              <Dropdown>
                <div style={{ padding: 50, textAlign: 'center' }}>
                  Dropdown Content
                </div>
              </Dropdown>
            ),
          },
        ]}
      />
      <h2 id="more-events">More trigger events</h2>
      <p>
        As mentioned above, OuterEventsHandler can trigger a passed function on
        different circumstances, even on window resize or scroll. We can pass
        those bool props directly to the Dropdown. Dropdown doesn't use those
        boolean properties directly, it passes them down to the
        OuterEventsHandler instead.
      </p>
      <p>Open the dropdown below and try to scroll or resize the window.</p>
      <ExampleTable
        data={[
          {
            content: (
              <Dropdown triggerOnOuterScroll triggerOnWindowResize>
                <div style={{ padding: 50, textAlign: 'center' }}>
                  Dropdown Content
                </div>
              </Dropdown>
            ),
          },
        ]}
      />
      <PropTable />
    </DocsContentPage>
  );
};

export default ReactDocsOuterEventsHandler;
