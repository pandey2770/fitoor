import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./Component/App";
import store from "./store";
import * as serviceWorker from "./serviceWorker";
import "antd/dist/antd.css";
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App user={{ test: "***" }} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
