import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";

import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { StateProvider } from "./context/StateProvider";
import reducer from "./context/reducer";
import { intialState } from "./context/initalState";
import {defult as HomeContainer} from './components/HomeContainer'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <StateProvider initialState={intialState} reducer={reducer}>
        <App />
      </StateProvider>
    </Router>

  </React.StrictMode>
);
