import * as React from 'react';
import { Link } from 'react-router-dom';

import { PropTable, properties, DocsTable } from '../../components';

// renderTitle?: (visibleDate: Date, activeView: DatepickerView) => React.ReactNode,
// renderMonthName?: (monthNumber: number) => React.ReactNode,
// renderWeekdayShort?: (weekdayNumber: number) => React.ReactNode,
// isRange?: M,
// value?: DatepickerValue<M>,
// onDateChange?: DatepickerOnChangeRange<M>,
// minDate?: Date,
// maxDate?: Date,
// initialVisibleDate?: Date,
// weekdayOffset?: number,

const DatepickerValue = <Link to="#DatepickerValue">DatepickerValue</Link>;

const itemProps = [
  {
    prop: 'value',
    propType: DatepickerValue,
    required: false,
    desc: 'Pass "Date" or object with from and to if you are using isRange',
  },
  {
    prop: 'onDateChange',
    propType: <>(value: {DatepickerValue}) =&gt; void</>,
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
    desc:
      'A date to determine initial visible month. If not provided, initial display month will be determined based on value prop or current date.',
  },
  {
    prop: 'weekdayOffset',
    propType: 'number',
    defaultValue: '0',
    desc: 'Allows you to change starting weekday. 0 is Monday, 1 is Sunday.',
  },
];

export const ReactDocsButton = () => {
  return (
    <>
      <h2 id="props">Props</h2>
      <PropTable itemProps={itemProps} />
      <h2 id="DatepickerValue">DatepickerValue</h2>
      <p>
        Value varies based on the <code>isRange</code> prop.{' '}
      </p>
      <DocsTable>
        <tbody>
          <tr>
            <td>DatepickerSimpleValue</td>
            <td>Date</td>
            <td>if isRange is false</td>
          </tr>
          <tr>
            <td>DatepickerRangeValue</td>
            <td>{`{from ?: Date, to?: Date }`}</td>
            <td>if isRange is true</td>
          </tr>
        </tbody>
      </DocsTable>
    </>
  );
};

export default ReactDocsButton;
