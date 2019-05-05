import * as React from 'react';
import { RouteComponentProps, Switch, Route, Redirect } from 'react-router-dom';

import DocsButton from './Button'

export const DocsReact = (props: RouteComponentProps) => {
  const { match } = props

  return (
    <Switch>
      <Route path={`${match.path}/button`} component={DocsButton} />
      <Redirect to={`${match.path}/button`} />
    </Switch>
  )
}

export default DocsReact