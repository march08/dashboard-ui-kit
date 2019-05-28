import * as React from 'react'
import { H1, DatePicker, DatePickerRangeValue, DatePickerSimpleValue, DatePickerContainer } from 'components'


import { DocsContentPage, ExampleTable, ImportPath } from '../../components'

import PropTable from './PropTable'
import CustomRendering from './CustomRendering';


export const ReactDocsButton = () => {

  const [value1, setValue1] = React.useState<DatePickerSimpleValue>(null)
  const [value2, setValue2] = React.useState<DatePickerRangeValue>({ from: null, to: null })

  return (
    <DocsContentPage>
      {/* <PageContent data={[
        { id: 'appearence', label: 'Appearence' },
        { id: 'sizes', label: 'Sizes' },
        { id: 'states', label: 'States' },
        { id: 'custom-rendering', label: 'Custom DOM Rendering' },
        { id: 'with-icons', label: 'With Icons' },
        { id: 'props', label: 'Prop Table' },
        { id: 'migration', label: 'Migration from Dashboard UI Kit 3' },
      ]} /> */}
      <H1>DatePicker</H1>
      <ImportPath name="DatePicker" />
      <br />
      <h2>Single Date Pick</h2>
      <ExampleTable fixed data={[
        {
          content: (
            <DatePickerContainer>
              <DatePicker value={value1} onChange={setValue1} />
            </DatePickerContainer>
          )
        },
      ]} />
      <h2>Range Pick</h2>
      <ExampleTable fixed data={[
        {
          content: (
            <DatePickerContainer>
              <DatePicker isRange value={value2} onChange={setValue2} />
            </DatePickerContainer>
          )
        },
      ]} />
    </DocsContentPage>
  )
}

export default ReactDocsButton;