import React from "react";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { hydrate, render } from "react-dom";

const rootElement = document.getElementById("root");
if (rootElement!.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
