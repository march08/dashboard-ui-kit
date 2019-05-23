import * as React from 'react'
import { DocsContentPage, PageContent } from '../../components'
import { H1 } from 'components'


export const UseWithTypescript = () => {
  return (
    <DocsContentPage>
      <PageContent data={[
        { id: 'example', label: 'Examples' },
        { id: 'sizes', label: 'Sizes' },
      ]} />
      <H1>Dashboard UI Kit &amp; Typescript</H1>
    </DocsContentPage>
  )
}

export default UseWithTypescript;