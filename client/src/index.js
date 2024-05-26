import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "remixicon/fonts/remixicon.css";
import "./index.css";

import store from "./store/store";
import { Provider } from "react-redux";

import Context from './components/ContextProvider/Context';


import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Context>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </Context>
);
