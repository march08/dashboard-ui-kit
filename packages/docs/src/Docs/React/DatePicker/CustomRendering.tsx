import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@duik/it/index';

import { Code } from 'components';

import { DocsSection } from '../../components';

export const ReactDocsButton = () => {
  return (
    <>
      <h2 id="custom-rendering">{`Using Button as <a> or <Link> from react-router-dom`}</h2>
      <p>
        By default, using <code>{`<Button>Text</Button>`}</code> renders{' '}
        <code>{`<button>Text</button>`}</code>. You can simply change this by
        passing Component prop. You can read more aboout Component prop on{' '}
        <Link to="/docs/react/component-property">this page</Link>.
      </p>
      <DocsSection>
        <h3>Rendering {`<a>`} tag</h3>
        <p>
          Simply use prop Component and pass "a" to it. Then you can pass other
          properties such as "href".
        </p>
        <Code>
          {`<Button primary Component="a" href="https://google.com">
  My External Link
</Button>`}
        </Code>
        <p>Result:</p>
        <p>
          <Button primary Component="a" href="https://google.com">
            My External Link
          </Button>
        </p>
        <h3>{`<Link>`} from react-router-dom</h3>
        <p>
          We can use the same prop Component. Simply pass Link to the prop.
          Don't forget to pass other properties, such as "to" to the component.
        </p>
        <Code>
          {`import { Link } from 'react-router-dom'
...
<Button success Component={Link} to="#">
  My Internal Link
</Button>`}
        </Code>
        <p>Result:</p>
        <p>
          <Button success Component={Link} to="#">
            My Internal Link
          </Button>
        </p>
      </DocsSection>
    </>
  );
};

export default ReactDocsButton;
