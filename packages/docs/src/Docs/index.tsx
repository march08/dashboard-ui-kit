import * as React from 'react';
import { RouteComponentProps, Switch, Route, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ContainerVertical } from '@duik/it';

import { DocsTopBar } from './TopBar';

import DocsReact from './React';

export const Docs = (props: RouteComponentProps) => {
  const { match } = props;

  return (
    <>
      <Helmet
        titleTemplate="%s - React Docs -  Dashboard UI Kit"
        defaultTitle="React Docs -  Dashboard UI Kit"
      />
      <ContainerVertical>
        <DocsTopBar />
        <Switch>
          <Route path={`${match.path}/react`} component={DocsReact} />
          <Redirect to={`${match.path}/react`} />
        </Switch>
      </ContainerVertical>
    </>
  );
};

export default Docs;
