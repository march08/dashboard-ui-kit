import * as React from 'react'
import { DocsContentPage, PageContent } from '../../components'


export const UseInCreateReactApp = () => {
  return (
    <DocsContentPage>
      <PageContent data={[
        { id: 'example', label: 'Examples' },
        { id: 'sizes', label: 'Sizes' },
      ]} />
      <h1>Using @duik with create-react-app</h1>
    </DocsContentPage>
  )
}

export default UseInCreateReactApp;