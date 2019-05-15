import * as React from 'react'

import { WidgetTable, Button } from '@duik/it';
import { jsxToString } from 'utils'
import { Code } from 'components'
import cls from './docspage.module.scss'

export type ExampleTableProps = {
  fixed?: boolean,
  data?: {
    content: React.ReactNode,
    code?: string,
  }[]
}

export const ExampleTable = (props: ExampleTableProps) => {
  const { data, fixed } = props
  return (
    <div className={cls['example-table-container']}>
      <table className={cls['example-table']} style={{ tableLayout: fixed ? 'fixed' : 'inherit' }}>
        <tbody>
          {
            data && data.map((item, index) => (
              <tr key={index}>
                <td>
                  {item.content}
                </td>
                <td>
                  <Code>
                    {item.code || jsxToString(item.content)}
                  </Code>
                </td>
              </tr>
            ))
          }

        </tbody>
      </table>
    </div>
  )
}