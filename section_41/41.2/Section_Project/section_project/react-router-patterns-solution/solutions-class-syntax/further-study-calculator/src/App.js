import React, { Component } from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';

import Math from "./Math";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/:operation/:num1/:num2"
                   render={props => <Math {...props} />} />
            <Route exact path="/" render={() => <Home />} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
