import * as React from 'react'
import { Link } from 'react-router-dom'
import { H1, Code, CodeLang } from 'components'
import { DocsContentPage, PageContent, DocsSection } from '../../components'



export const ReactDocsInstall = () => {
  return (
    <DocsContentPage>
      <PageContent data={[
        { id: 'quick-install', label: 'Quick install' },
        { id: 'selected-install', label: 'Install only selected components' },
      ]} />
      <H1>Dashboard UI kit installation</H1>
      <p>Install kit as npm package. Minimum React version is <code>16.8.x</code> since the package is using react <Link to="https://reactjs.org/docs/hooks-reference.html" target="_blank">hooks.</Link></p>

      <h2 id="quick-install">Get all and start</h2>
      <p>If you just want to use the whole kit, the simplest way is to install package that contains all the components. Don't forget to install dependencies as well.</p>
      <DocsSection>
        <h3>Install packages</h3>
        <Code language={CodeLang.markup}>
          yarn add @duik/it classnames
        </Code>
        <h3>Include CSS</h3>
        <p>Include styling. Do this only once!</p>
        <Code>
          import '@duik/it/dist/styles.css'
        </Code>
        <h3>Fonts</h3>
        <p>Include fonts. The base font family of the Dashboard UI kit is <Link to="https://fonts.google.com/?selection.family=Roboto|Roboto+Mono:300,400,500&query=roboto+mon" target="_blank">Roboto and Roboto Mono</Link>. Feel free to modify the import (e.g. including support for extended characters).</p>
        <Code>
          {`<link href="https://fonts.googleapis.com/css?family=Roboto+Mono|Roboto:300,400,500&display=swap" rel="stylesheet">`}
        </Code>
        <h3>Starting using the kit</h3>
        Let's render a simple button. Check the documentation for more!
        <Code>
          {`import { Button } from '@duik/it

const MyApp = () => {
  return (
    <Button primary>My First DUIK Button</Button>
  )
}`}
        </Code>
      </DocsSection>

      <h2 id="selected-install">I don't want to install everything</h2>
      <p>And that's fine! You can install only components you like, e.g. <Link to="/docs/react/dropdown">Dropdown</Link>. Here is how you do it.</p>

      <DocsSection>
        <h3>Install packages</h3>
        <p>Make sure your react version is <code>16.8.0</code> or higher.</p>
        <Code language={CodeLang.markup}>
          {`yarn add @duik/core @duik/{your-package} classnames`}
        </Code>
        <h3>Include CSS</h3>
        <p>Include styling. Do this only once! Styles from core adds global styling and CSS vars.</p>
        <Code>
          {`import '@duik/core/dist/styles.css'
import '@duik/{your-package}/dist/styles.css'`}
        </Code>
        <h3>Recommended</h3>
        <h3>Fonts</h3>
        <p>Include fonts. The base font family of the Dashboard UI kit is <Link to="https://fonts.google.com/?selection.family=Roboto|Roboto+Mono:300,400,500&query=roboto+mon" target="_blank">Roboto and Roboto Mono</Link>. Feel free to modify the import (e.g. including support for extended characters).</p>
        <Code>
          {`<link href="https://fonts.googleapis.com/css?family=Roboto+Mono|Roboto:300,400,500&display=swap" rel="stylesheet">`}
        </Code>
        <h3>Starting using installed component</h3>
        <p>Say that you've installed a Dropdown component. Let's check hot to use it!</p>
        <Code>
          {`import Dropdown from '@duik/dropdown

const MyApp = () => {
  return (
    <Dropdown>
      Dropdown content
    </Dropdown>
  )
}`}
        </Code>
      </DocsSection>

    </DocsContentPage>
  )
}

export default ReactDocsInstall;