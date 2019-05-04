import React, { Component, useState } from 'react';
import logo from './logo.svg';

import DynamicFields from '@duik/dynamic-fields'
import '@duik/dynamic-fields/dist/styles.css'
import './App.css';

const App = () => {

  const [count, setCount] = useState(0);

  return (

    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <DynamicFields />
    </header>
  </div>
  )
}

export default App;
