import React from 'react'
import cls from './docspage.module.scss';
import { Button } from '@duik/it'

import { Code } from 'components'

type CodeExampleProps = {
  children: React.ReactNode,
  code: string,
}

export const CodeExample = (props: CodeExampleProps) => {

  const [visible, setVisible] = React.useState(false)

  return (
    <div className={cls['example-table-container']}>
      <div className={cls['code-example-render']}>
        {props.children}
      </div>
      <div className={cls['code-example-code']}>
        <div className={cls['show-hide']}>
          <Button onClick={() => setVisible(!visible)} xs transparent>{visible ? 'Hide' : 'Show code'}</Button>
        </div>
        {visible && (
          <Code>
            {props.code}
          </Code>
        )}
      </div>
    </div>
  )
}