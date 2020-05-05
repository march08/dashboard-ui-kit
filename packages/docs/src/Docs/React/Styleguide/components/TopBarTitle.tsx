import * as React from 'react'
import { Link } from 'react-router-dom'
import {camelToSnake} from 'utils/camelToSnake'

import cls from './styleguide.module.scss'

const StyleguideTopBarTitle = ({
  to,
  children,
  name,
  ...rest
}: {
  to: string,
  children?: React.ReactNode,
  name?: string
}) => (to ? (

  <Link
    className={ cls.link }
    to={ to ? `/docs/react/${camelToSnake(to)}` : '#' }
  >
    <h2
      className={ cls.topBarTitle }
      { ...rest }
    >
      {children}
      {
        name && (
          <span className={ cls.StyleguideTopBarTitleName }>
            {`<${name} />`}
          </span>
        )
      }
    </h2>
  </Link>
) : (

  <h2
    className={ cls.topBarTitle }
    { ...rest }
  >
    {children}
    {
    name && (
      <span className={ cls.StyleguideTopBarTitleName }>
        {`<${name} />`}
      </span>
    )
  }
  </h2>
)
)

StyleguideTopBarTitle.defaultProps = {
  to: null,
  children: null,
  name: null,
}

export default StyleguideTopBarTitle
