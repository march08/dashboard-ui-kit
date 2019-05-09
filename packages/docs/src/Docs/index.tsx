import * as React from 'react';
import { RouteComponentProps, Switch, Route, Redirect } from 'react-router-dom';

import { NavPanel } from '@duik/react'

import { PageScroll } from 'components';

import DocsReact from './React'

export const Docs = (props: RouteComponentProps) => {
  const { match } = props

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <NavPanel dark>
        Something here
      </NavPanel>
      <PageScroll>
        <Switch>
          <Route path={`${match.path}/react`} component={DocsReact} />
          <Redirect to={`${match.path}/react`} />
        </Switch>
      </PageScroll>
    </div>
  )
}

export default Docs