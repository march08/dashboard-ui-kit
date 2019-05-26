import * as React from 'react'
import { H1 } from 'components'
import { DocsContentPage, PageContent } from '../../components'


export const CustomizingTheme = () => {
  return (
    <DocsContentPage>
      <PageContent data={[
        { id: 'example', label: 'Examples' },
        { id: 'sizes', label: 'Sizes' },
      ]} />
      <H1>Customizing Theme</H1>
    </DocsContentPage>
  )
}

export default CustomizingTheme;