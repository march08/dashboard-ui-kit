import * as React from 'react';
import { Link } from 'react-router-dom';
import { H1 } from 'components';
import { DatepickerRangeValue, SelectDate } from '@duik/it';

import {
  DocsContentPage,
  ExampleTable,
  ImportPath,
  PageContent,
  DocsTable,
} from '../../components';
import PropTable from './PropTable';

export const ReactDocsButton = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const [value2, setValue2] = React.useState<DatepickerRangeValue>({
    from: new Date(currentYear, currentMonth, 8),
    to: new Date(currentYear, currentMonth, 19),
  });

  return (
    <DocsContentPage>
      <PageContent
        data={[
          { id: 'basic', label: 'Basic SelectDate' },
          { id: 'controlled', label: 'Controlled Value' },
          { id: 'localization', label: 'Localization and Formatting' },
          { id: 'props', label: 'Prop Table' },
        ]}
      />
      <H1>SelectDate</H1>
      <ImportPath name="SelectDate" />
      <p>
        SelectDate is a select which wraps{' '}
        <Link to="/docs/react/datepicker">Datepicker</Link> component, in which
        documentation you can also find more information. SelectDate accepts
        same properties and some extra such as "label" in the list{' '}
        <Link to="props">below</Link>
      </p>

      <h2>Basic SelectDate</h2>
      <p>
        Same way as <code>Datepicker</code> is designed, you can use SelectDate
        as an component with uncontrolled value.
      </p>
      <ExampleTable
        fixed
        data={[
          {
            content: <SelectDate label="Date of Birth" />,
          },
        ]}
      />
      <h2 id="controlled">Controlled Value</h2>
      <p>Here is an example selecting date range with a controlled value.</p>
      <ExampleTable
        fixed
        data={[
          {
            content: (
              <SelectDate isRange value={value2} onDateChange={setValue2} />
            ),
          },
        ]}
      />

      <h2 id="localization">Localization and Formatting</h2>
      <p>
        You can format how to display the displayed value. For other formatters,
        check{' '}
        <Link to="/docs/react/datepicker#localization">
          Datepicker localization
        </Link>
        .
      </p>
      <DocsTable>
        <tbody>
          <tr>
            <td>renderValue</td>
            <td>
              (value?:{' '}
              <Link to="/docs/react/datepicker#DatepickerValue">
                DatepickerValue
              </Link>
              , isRange?: boolean, placeholder?: React.ReactNode) =&gt;
              React.ReactNode
            </td>
          </tr>
        </tbody>
      </DocsTable>
      <PropTable />
    </DocsContentPage>
  );
};

export default ReactDocsButton;
