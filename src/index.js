import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
//import Movies from "./components/Movies";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
