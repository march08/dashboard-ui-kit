import * as React from 'react'
import { WidgetTable } from '@duik/react'
import { ReactDocsProperty } from '../types'

type PropTableProps = {
  itemProps?: ReactDocsProperty[]
}

export const PropTable = ({
  itemProps,
}: PropTableProps) => (
    <WidgetTable>
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
                <code>
                  {item.prop}
                </code>
              </td>
              <td>
                <code>
                  {item.propType}
                </code>
              </td>
              <td>
                <code>
                  {item.required ? 'true' : 'false'}
                </code>
              </td>
              <td>
                {item.defaultValue === 'null' || item.defaultValue === 'false' ? (
                  <em>
                    {item.defaultValue}
                  </em>
                ) : item.defaultValue}
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
