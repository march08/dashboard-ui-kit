import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/server'
import pretty from 'pretty'
import { html } from 'js-beautify'

import { WidgetTable, Button } from '@duik/it';
import { jsxToString } from 'utils'
import { Code, CodeLang } from 'components'
import cls from './docspage.module.scss'

export type ExampleTableProps = {
  fixed?: boolean,
  data?: {
    content: React.ReactElement,
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
                  <Code language={CodeLang.markup}>
                    {html(ReactDOM.renderToStaticMarkup(<BrowserRouter>{item.content}</BrowserRouter>), {
                      indent_size: 2,
                      inline: [],
                      wrap_line_length: 100
                    })}
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