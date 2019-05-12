import * as React from 'react'
import prism from 'prismjs'
import classnames from 'classnames'

import { Button } from '@duik/react'
import { Icon } from '@duik/icon'
import { copyToClipboard } from 'utils'
import cls from './code.module.scss'


import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-json'


import './atom-dark.scss'

export enum CodeLang {
  javascript = 'javascript',
  markup = 'markup',
  jsx = 'jsx',
}

export type CodeProps = JSX.IntrinsicElements['pre'] & {
  children?: string,
  language?: CodeLang,
  className?: String,
}

export class Code extends React.Component<CodeProps> {

  codeRef = React.createRef<HTMLPreElement>()

  static defaultProps = {
    language: CodeLang.jsx,
  };

  componentDidMount() {
    this.highlightCode()
  }

  componentDidUpdate() {
    this.highlightCode()
  }

  highlightCode() {
    if (this.codeRef && this.codeRef.current) {
      prism.highlightElement(this.codeRef.current)
    }
  }

  render() {
    const {
      language,
      children,
      className,
      ...rest
    } = this.props

    const handleCopy = () => copyToClipboard(children as string)

    return (
      <div className={cls['code-wrapper']}>
        <Button onClick={handleCopy} clear className={cls['button-copy']} square><Icon>multitasking</Icon></Button>
        <pre
          ref={this.codeRef}
          className={classnames('react-prism', `language-${language}`, className)}
          {...rest}
        >
          <code>
            {children}
          </code>
        </pre>
      </div>
    )
  }
}

export default Code
