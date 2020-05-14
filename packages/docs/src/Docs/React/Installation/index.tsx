import * as React from 'react';
import { H1, Code, CodeLang } from 'components';
import { DocsContentPage } from '../../components';

export const ReactDocsInstall = () => {
  return (
    <DocsContentPage>
      {/* <PageContent data={[
        { id: 'quick-install', label: 'Quick install' },
        { id: 'selected-install', label: 'Install only selected components' },
      ]} /> */}
      <H1>Dashboard UI kit installation</H1>
      <p>
        Install kit as npm package. Minimum React version is <code>16.8.x</code>{' '}
        since the package is using react{' '}
        <a
          href="https://reactjs.org/docs/hooks-reference.html"
          rel="noopener noreferrer"
          target="_blank"
        >
          hooks.
        </a>
      </p>

      <h3>Install packages</h3>
      <Code language={CodeLang.markup}>
        yarn add @duik/it@latest classnames react react-dom
      </Code>
      <h3>Include CSS</h3>
      <p>Include styling. Do this only once per app!</p>
      <Code>
        {`// include everything
import '@duik/it/dist/styles.css'

// including only some component styles
import '@duik/core/dist/styles.css'
import '@duik/{your-component}/dist/styles.css'
import '@duik/{your-other-component}/dist/styles.css'
`}
      </Code>
      <h3>Fonts</h3>
      <p>
        Include fonts. The base font family of the Dashboard UI kit is{' '}
        <a
          href="https://fonts.google.com/?selection.family=Roboto|Roboto+Mono:300,400,500&query=roboto+mon"
          rel="noopener noreferrer"
          target="_blank"
        >
          Roboto and Roboto Mono
        </a>
        . Feel free to modify the import (e.g. including support for extended
        characters).
      </p>
      <Code>
        {`<link href="https://fonts.googleapis.com/css?family=Roboto+Mono|Roboto:300,400,500&display=swap" rel="stylesheet">`}
      </Code>
      <h3>Starting using the kit</h3>
      <p>
        Let's render a simple button. By importing <code>@duik/it</code>, we are
        including the whole package in our build.
      </p>
      <Code>
        {`import { Button } from '@duik/it'

const MyApp = () => {
  return (
    <Button primary>My First DUIK Button</Button>
  )
}`}
      </Code>
      <p>
        You can also import only components you need to reduce the build size.
      </p>
      <Code>
        {`import Button from '@duik/button
// or import { Button } from '@duik/button

const MyApp = () => {
  return (
    <Button primary>My First DUIK Button</Button>
  )
}`}
      </Code>
    </DocsContentPage>
  );
};

export default ReactDocsInstall;
