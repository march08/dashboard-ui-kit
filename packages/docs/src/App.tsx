import React, { useState } from 'react';
import logo from './logo.svg';

import { DynamicFields, Button } from '@duik/react'
import '@duik/react/dist/styles.css'

const App = () => {

  const [count, setCount] = useState(0);

  return (

    <div className="App">
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
      <Button onClick={() => { console.log('click') }}>Hello</Button>
      <Button primary>Hello</Button>
      <Button success>Hello</Button>
      <Button error>Hello</Button>
    </div >
  )
}

export default App;
