import * as React from 'react';
import { RouteComponentProps, Switch, Route, Redirect } from 'react-router-dom';

import { NavPanel } from '@duik/react'

import DocsReact from './React'

export const Docs = (props: RouteComponentProps) => {
  const { match } = props

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <NavPanel dark>
        Something here
      </NavPanel>
      <Switch>
        <Route path={`${match.path}/react`} component={DocsReact} />
        <Redirect to={`${match.path}/react`} />
      </Switch>
    </div>
  )
}

export default Docs