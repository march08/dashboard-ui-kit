import * as React from 'react';
import ReactDOM from 'react-dom/server';
import { Link, BrowserRouter } from 'react-router-dom';
import { Button } from '@duik/it';
import { H1, Code } from 'components';

import { DocsContentPage } from '../../components';

export const ReactDocsAlert = () => {
  return (
    <DocsContentPage>
      {/* <PageContent data={[
        { id: 'appearence', label: 'Variants' },
        { id: 'content', label: 'Composing Content' },
        { id: 'props', label: 'Prop Table' },
      ]} /> */}
      <H1>Composing components with "Component" prop</H1>

      <p>
        {`It's not really a new thing and you probably noticed it to be used in e.g. react-router. With "Component" property,
      the Dashboard UI Kit components are nicely composable which makes them super flexible in terms of reusability.`}
      </p>

      <h2>Usage</h2>
      <p>
        {
          'Many components, such as Button, accept "Component" property. You will always find that information on the documentation page for each component or in the code. So let\'s have a look on some examples with Button component.'
        }
      </p>

      <Code>{`<Button>This is a simple button</Button>`}</Code>

      <p>Outputs: </p>
      <p>
        <Button>This is a simple button</Button>
      </p>
      <Code>
        {ReactDOM.renderToStaticMarkup(
          <Button>This is a simple button</Button>
        )}
      </Code>
      <p>
        But what if we want to render "a" or anything else with the same
        styling?
      </p>

      <h2>JSX element as a prop value</h2>
      <p>
        You can pass e.g. <code>a</code> or <code>span</code> as a prop value
        (or any valid html tag that makes sense). Here is a simple example:
      </p>

      <Code>
        {`<Button primary Component="a" href="#">This is a link button</Button>`}
      </Code>

      <p>Outputs: </p>
      <p>
        <Button primary Component="a" href="#">
          This is a link button
        </Button>
      </p>
      <Code>
        {ReactDOM.renderToStaticMarkup(
          <Button primary Component="a" href="#">
            This is a link button
          </Button>
        )}
      </Code>

      <h2>React Component as a prop value</h2>

      <p>
        Of course, you can pass any React component as a prop value as well. The
        simples example would be <code>Link</code> from{' '}
        <code>react-router-dom</code> to render, because we want the button
        styled link to navigate to a different page.
      </p>

      <Code>
        {`import { Link } from 'react-router-dom'
...
<Button primary Component={Link} to="#">Next Page</Button>`}
      </Code>

      <p>Outputs: </p>
      <p>
        <Button primary Component={Link} to="#">
          Next Page
        </Button>
      </p>
      <Code>
        {ReactDOM.renderToStaticMarkup(
          <BrowserRouter>
            <Button primary Component={Link} to="#">
              Next Page
            </Button>
          </BrowserRouter>
        )}
      </Code>
    </DocsContentPage>
  );
};

export default ReactDocsAlert;
