import React from "react";
import Navbar from "../Header/Navbar";
import Home from '../Homepage/Home'
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div class="container">
        <Navbar></Navbar>
        <main>
          <Switch>
            <Route path="/" component={Home} exact />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
