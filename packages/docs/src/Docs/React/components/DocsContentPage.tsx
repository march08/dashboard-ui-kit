import { createSimpleComponent } from '@duik/react'

import cls from './docspage.module.scss'

export const DocsContentPage = createSimpleComponent<'div'>({
  displayName: 'DocsContentPage',
  Component: 'div',
  className: cls.content
})