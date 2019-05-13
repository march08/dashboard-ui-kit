import * as React from 'react'
import { WidgetTable } from '@duik/it'
import { ReactDocsProperty } from './types'

import cls from './docspage.module.scss';

type PropTableProps = {
  itemProps?: ReactDocsProperty[]
}

export const PropTable = ({
  itemProps,
}: PropTableProps) => (
    <WidgetTable className={cls.propTable}>
      <thead>
        <tr>
          <th>
            Property
        </th>
          <th>
            Type
        </th>
          <th>
            Required
        </th>
          <th>
            Default Value
        </th>
          <th>
            Description
        </th>
        </tr>
      </thead>
      <tbody>
        {
          itemProps && itemProps.map(item => (
            <tr key={Math.random()}>
              <td>
                <strong style={{ whiteSpace: 'nowrap' }}>
                  {item.prop}
                </strong>
              </td>
              <td>
                {item.propType}
              </td>
              <td>
                <p>
                  {item.required ? 'true' : 'false'}
                </p>
              </td>
              <td>
                <p>

                  {item.defaultValue === 'null' || item.defaultValue === 'false' || !item.defaultValue ? (
                    ''
                  ) : item.defaultValue}
                </p>
              </td>
              <td>
                {item.desc}
              </td>
            </tr>
          ))
        }
      </tbody>
    </WidgetTable>
  )

PropTable.defaultProps = {
  itemProps: [],
}

export default PropTable
