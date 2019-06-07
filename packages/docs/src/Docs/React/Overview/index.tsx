import * as React from 'react'
import { H1 } from 'components'
import { LoaderDots, Button } from '@duik/it'
import { DocsContentPage, PageContent } from '../../components'


const Dots = React.forwardRef<HTMLSpanElement>((props, ref) => {
  console.log(ref)
  return (
    <span ref={ref}>hello</span>
  )
})

export const ReactDocsOuterEventsHandler = () => {

  const buttonRef = React.createRef<HTMLButtonElement>()

  console.log(buttonRef.current)



  return (
    <DocsContentPage >
      <Button ref={buttonRef} onClick={() => {
        console.log(buttonRef.current)
      }}>Click</Button>
      <PageContent data={[
        { id: 'example', label: 'Basic Example' },
        { id: 'vertical-split', label: 'Vertical Splitting' },
        { id: 'horizontal-split', label: 'Horizontal Splitting' },
        { id: 'full-example', label: 'Full Example With DUIK' },
      ]} />
      <H1>
        Dashboard UI Kit
      </H1>
      <h2>Overview</h2>
      <h2>Key Features</h2>
      <h3>Design</h3>
      <h3>Composability</h3>
      <h3>Developer Experience</h3>
      <h3>Easy to modify</h3>
      <h2>Design Patters</h2>
    </DocsContentPage>
  )
}

export default ReactDocsOuterEventsHandler;