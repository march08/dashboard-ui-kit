import * as React from 'react';
import { RouteComponentProps, Switch, Route, Redirect, NavLink as RRNavLink } from 'react-router-dom';
import { NavPanel, NavSection, NavLink, NavSectionTitle, NavTitle } from '@duik/it';
import { PageScroll } from 'components';
import { Icon } from '@duik/icon'

import links from './links'

export const DocsReact = (props: RouteComponentProps) => {
  const { match, location } = props

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <NavPanel dark>
        <NavTitle>React Docs</NavTitle>
        <NavSection>
          <NavSectionTitle>Components</NavSectionTitle>
          {links.map(item => {
            return (
              <NavLink
                to={`${match.path}${item.to}`}
                Component={RRNavLink}
                dark
                key={item.to}
                rightEl={<Icon>arrow_right</Icon>}
              >
                {item.text}
              </NavLink>
            )
          })}
        </NavSection>
      </NavPanel>
      <PageScroll key={location.pathname}>
        <Switch>
          {links.map(item => {
            return (
              <Route key={item.to} path={`${match.path}${item.to}`} component={item.component} />
            )
          })}
          <Redirect to={`${match.path}/button`} />
        </Switch>
      </PageScroll>
    </div >
  )
}

export default DocsReact