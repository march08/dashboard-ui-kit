import React from 'react';
import { Helmet } from 'react-helmet';
// import './bootstrap.css';
import '@duik/it/dist/styles.css';
import '@duik/icon/dist/styles.css';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Docs from './Docs';

const App = () => {
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - Dashboard UI Kit"
        defaultTitle="Dashboard UI Kit"
      />
      <Switch>
        <Route path="/docs" component={Docs} />
        <Redirect to="/docs" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
