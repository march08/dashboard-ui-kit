import * as React from 'react'
import { DocsContentPage, PageContent } from '../../components'


export const CustomizingTheme = () => {
  return (
    <DocsContentPage>
      <PageContent data={[
        { id: 'example', label: 'Examples' },
        { id: 'sizes', label: 'Sizes' },
      ]} />
      <h1>Customizing Theme</h1>
    </DocsContentPage>
  )
}

export default CustomizingTheme;