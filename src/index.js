import { StrictMode } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceworker";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
serviceWorker.register();
