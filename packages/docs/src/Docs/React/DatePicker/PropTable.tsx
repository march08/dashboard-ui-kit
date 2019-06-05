import * as React from 'react';
import { Link } from 'react-router-dom'
import { Widget } from '@duik/it/index'


import { PropTable, properties, DocsTable } from '../../components'

// renderTitle?: (visibleDate: Date, activeView: DatePickerView) => React.ReactNode,
// renderMonthName?: (monthNumber: number) => React.ReactNode,
// renderWeekdayShort?: (weekdayNumber: number) => React.ReactNode,
// isRange?: M,
// value?: DatePickerValue<M>,
// onDateChange?: DatePickerOnChangeRange<M>,
// minDate?: Date,
// maxDate?: Date,
// initialVisibleDate?: Date,
// weekdayOffset?: number,

const DatePickerValue = <Link to="#DatePickerValue">DatePickerValue</Link>

const itemProps = [
  {
    prop: 'value',
    propType: DatePickerValue,
    required: false,
    desc: 'Pass "Date" or object with from and to if you are using isRange',
  },
  {
    prop: 'onDateChange',
    propType: <>(value: {DatePickerValue}) => void</>,
    desc: 'This gives you the ability to handle the date selection.',
  },
  properties.bool({
    prop: 'isRange',
    desc: 'Enables date range selection',
  }),
  {
    prop: 'minDate',
    propType: 'Date',
    desc: 'A minimum date that can be selected. The rest is disabled.',
  },
  {
    prop: 'maxDate',
    propType: 'Date',
    desc: 'A maximum date that can be selected. The rest is disabled.',
  },
  {
    prop: 'initialVisibleDate',
    propType: 'Date',
    desc: 'A date to determine initial visible month. If not provided, initial display month will be determined based on value prop or current date.',
  },
  {
    prop: 'weekdayOffset',
    propType: 'number',
    defaultValue: "0",
    desc: 'Allows you to change starting weekday. 0 is Monday, 1 is Sunday.'
  }
]


export const ReactDocsButton = () => {

  return (
    <>

      <h2 id="props">Props</h2>
      <Widget>
        <PropTable itemProps={itemProps} />
      </Widget >
      <h2 id="DatePickerValue">DatePickerValue</h2>
      <p>Value varies based on the <code>isRange</code> prop. </p>
      <DocsTable>
        <tbody>
          <tr>
            <td>DatePickerSimpleValue</td>
            <td>Date</td>
            <td>if isRange is false</td>
          </tr>
          <tr>
            <td>DatePickerRangeValue</td>
            <td>{`{from ?: Date, to?: Date }`}</td>
            <td>if isRange is true</td>
          </tr>
        </tbody>
      </DocsTable>
    </>
  )
}

export default ReactDocsButton;
