import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/App";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import $ from "jquery";
import Popper from "popper.js";
import "./styles/Header.css";
import "./styles/Homepage.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
ReactDom.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById("App")
);
