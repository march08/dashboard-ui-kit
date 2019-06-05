import * as React from 'react'
import { H1, DatePicker, DatePickerRangeValue, DatePickerSimpleValue, DatePickerContainer, SelectDate } from 'components'
import { Button, WidgetTable, Widget } from '@duik/it'

import { DocsContentPage, ExampleTable, ImportPath, PageContent, DocsTable } from '../../components'

import PropTable from './PropTable'


export const ReactDocsButton = () => {

  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth()
  const [value1, setValue1] = React.useState<DatePickerSimpleValue>(new Date(currentYear, currentMonth, 15))
  const [value3, setValue3] = React.useState<DatePickerSimpleValue>(new Date(currentYear, currentMonth, 19))
  const [value2, setValue2] = React.useState<DatePickerRangeValue>({ from: new Date(currentYear, currentMonth, 8), to: new Date(currentYear, currentMonth, 19) })


  return (
    <DocsContentPage>
      <PageContent data={[
        { id: 'basic', label: 'Basic Usage' },
        { id: 'controlled', label: 'Controlled Date Value' },
        { id: 'minmax', label: 'Min and Max Date' },
        { id: 'range', label: 'Range Date Select' },
        { id: 'init-visible', label: 'Initial Visible month/date' },
        { id: 'start-week-day', label: 'First week day' },
        { id: 'localization', label: 'Localization and Formatting' },
        { id: 'props', label: 'Prop Table' },
      ]} />
      <H1>DatePicker</H1>
      <ImportPath name="DatePicker" subComponents={['DatePickerContainer']} />
      <p>A datepicker shows a monthly calendar to choose a <code>single</code> date or a <code>range</code> with 0 external dependencies.</p>
      <br />
      <h2 id="basic">Basic Datepicker</h2>
      <p>Basic <code>DatePicker</code> comes plain without external wrapping styling and has an uncontrolled value. </p>
      <ExampleTable fixed data={[
        {
          content: (
            <DatePicker />
          )
        },
      ]} />
      <h2 id="controlled">Single Date With Controlled Value</h2>
      <p>As you can see, we wrapped our <code>DatePicker</code> with a purely UI component <code>DatePickerContainer</code>. This is a recommended way to display your Datepicker.</p>
      <p>In the example below, we are taking control over the displayed value by passing <code>value</code> and <code>onDateChange</code> prop. You onChange shuld accept date as a single param.</p>
      <ExampleTable fixed data={[
        {
          content: (
            <>
              <DatePickerContainer>
                <DatePicker value={value1} onDateChange={setValue1} />
              </DatePickerContainer>
              <br />
              <br />
              <Button xs>Selected Date: {value1 && value1.toLocaleDateString() || 'none'}</Button>
            </>
          ),
          code: `<DatePickerContainer>
  <DatePicker
    value={value1}
    onDateChange={setValue1}
  />
</DatePickerContainer>`
        },
      ]} />
      <h2 id="minmax">Min and Max Date</h2>
      <p>You can limit the date selection by passing <code>minDate</code>, <code>maxDate</code> or both. The days which do not fit in the range will be disabled.</p>
      <ExampleTable fixed data={[
        {
          content: (
            <>
              <DatePickerContainer>
                <DatePicker value={value3} onDateChange={setValue3} minDate={new Date(currentYear, currentMonth, 5)} maxDate={new Date(currentYear, currentMonth, 25)} />
              </DatePickerContainer>
              <br />
              <br />
              <Button xs>Selected Date: {value3 && value3.toLocaleDateString() || 'none'}</Button>
            </>
          ),
          code: `<DatePickerContainer>
  <DatePicker
    value={value3}
    onDateChange={setValue3}
    minDate={new Date(currentYear, currentMonth, 5)}
    maxDate={new Date(currentYear, currentMonth, 25)}
  />
</DatePickerContainer>`
        },
      ]} />

      <h2 id="range">Range Date</h2>
      <p>You can allow range selection with <code>isRange</code> prop. As a value (and onChange param), you should pass an <code>DatePickerRangeValue = {`{ from?: Date, to?: Date }`}</code></p>
      <ExampleTable fixed data={[
        {
          content: (
            <DatePickerContainer>
              <DatePicker isRange value={value2} onDateChange={setValue2} />
            </DatePickerContainer>
          ),
          code: `<DatePickerContainer>
  <DatePicker isRange value={value2} onDateChange={setValue2} />
</DatePickerContainer>`
        },
      ]} />

      <h2 id="init-visible">Initial Visible month/date</h2>
      <p>You can change the initial visible month by passing <code>initialVisibleDate</code>. If you don't, this will be determined based on <code>value</code> or current date.</p>
      <ExampleTable fixed data={[
        {
          content: (
            <DatePickerContainer>
              <DatePicker initialVisibleDate={new Date(2222, 1, 1)} />
            </DatePickerContainer>
          ),
          code: `<DatePickerContainer>
  <DatePicker initialVisibleDate={new Date(2222, 1, 1)} />
</DatePickerContainer>`
        },
      ]} />
      <h2 id="start-week-day">First WeekDay</h2>
      <p>By default, Monday is a first weekday. You can change this by passing <code>weekdayOffset</code> prop. See example below starting with Sunday.</p>
      <ExampleTable fixed data={[
        {
          content: (
            <DatePickerContainer>
              <DatePicker weekdayOffset={1} />
            </DatePickerContainer>
          ),
          code: `<DatePickerContainer>
<DatePicker weekdayOffset={1} />
</DatePickerContainer>`
        },
      ]} />


      <h2 id="localization">Localization and Formatting</h2>
      <p>Anywhere the datepicker renders text, you can replace it by passing formatters. Your formatters can return plain string or ReactNode as well.</p>
      <DocsTable>
        <tbody>
          <tr>
            <td>renderTitle</td>
            <td>(visibleDate: Date, activeView: DatePickerView) => React.ReactNode</td>
          </tr>
          <tr>
            <td>renderMonthName</td>
            <td>(monthNumber: number) => React.ReactNode</td>
          </tr>
          <tr>
            <td>renderWeekdayShort</td>
            <td>(weekdayNumber: number) => React.ReactNode</td>
          </tr>
        </tbody>
      </DocsTable>

      <PropTable />
    </DocsContentPage>
  )
}

export default ReactDocsButton;