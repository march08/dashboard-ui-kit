import React, { useState } from 'react';
import '@duik/react/dist/styles.css'
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import '@duik/react/dist/styles.css'

import Docs from './Docs'

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/docs" component={Docs} />
        <Redirect to="/docs" />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
