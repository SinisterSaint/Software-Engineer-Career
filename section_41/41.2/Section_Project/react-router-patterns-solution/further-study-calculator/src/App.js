import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';

import Math from "./Math";
import Home from "./Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/:operation/:num1/:num2">
            <Math/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
