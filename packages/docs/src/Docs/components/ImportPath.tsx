import * as React from 'react';
import { camelToSnake } from 'utils'

export type ImportPathProps = {
  name: string,
  isIncludedInKit?: boolean
}

export const ImportPath = (props: ImportPathProps) => {
  const { name, isIncludedInKit = true } = props

  return (
    <div style={{ marginBottom: 10 }}>
      {isIncludedInKit ? (
        <>
          <code>{`import { ${name} } from '@duik/it'`}</code> `or `
        </>
      ) : null}
      <code>{`import ${name} from '@duik/${camelToSnake(name)}'`}</code>
    </div>

  )
}