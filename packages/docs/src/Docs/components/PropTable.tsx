import * as React from 'react';
import { WidgetTable, Widget, WidgetContainer } from '@duik/it';
import { ReactDocsProperty } from './types';

import cls from './docspage.module.scss';

type PropTableProps = {
  itemProps?: ReactDocsProperty[];
};

export const PropTable = ({ itemProps }: PropTableProps) => (
  <WidgetContainer className={cls.propTable}>
    {itemProps &&
      itemProps.map((item) => (
        <Widget key={Math.random()}>
          <WidgetTable>
            <tbody>
              <tr>
                <td style={{ fontSize: '1rem' }}>
                  <strong style={{ whiteSpace: 'nowrap' }}>{item.prop}</strong>
                </td>
                <td style={{ textAlign: 'right' }}>
                  <p>Required: {item.required ? 'Required' : 'false'}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <span>type:</span> {item.propType}
                </td>
                <td style={{ textAlign: 'right' }}>
                  {item.defaultValue === 'null' ||
                  item.defaultValue === 'false' ||
                  !item.defaultValue ? null : (
                    <p>default value: {item.defaultValue}</p>
                  )}
                </td>
              </tr>
              <tr>
                <td>{item.desc}</td>
              </tr>
            </tbody>
          </WidgetTable>
        </Widget>
      ))}
  </WidgetContainer>
);

PropTable.defaultProps = {
  itemProps: [],
};

export default PropTable;
