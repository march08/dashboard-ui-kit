import * as React from 'react'
import { DocsContentPage, PageContent } from '../../components'


export const UseWithTypescript = () => {
  return (
    <DocsContentPage>
      <PageContent data={[
        { id: 'example', label: 'Examples' },
        { id: 'sizes', label: 'Sizes' },
      ]} />
      <h1>Dashboard UI Kit &amp; Typescript</h1>
    </DocsContentPage>
  )
}

export default UseWithTypescript;