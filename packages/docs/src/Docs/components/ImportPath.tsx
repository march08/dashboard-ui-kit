import * as React from 'react';
import { camelToSnake } from 'utils'

export type ImportPathProps = {
  name: string,
}

export const ImportPath = (props: ImportPathProps) => {
  const { name } = props

  return (
    <div style={{ marginBottom: 10 }}>
      <code>{`import { ${name} } from '@duik/it'`}</code> or <code>{`import ${name} from '@duik/${camelToSnake(name)}'`}</code>
    </div>

  )
}