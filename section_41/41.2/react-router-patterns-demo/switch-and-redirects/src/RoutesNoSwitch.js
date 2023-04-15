import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import BlogHome from "./BlogHome";
import Post from "./Post";

function Routes() {
  return (
    <div>
      <Route exact path="/about"><About /></Route>
      <Route exact path="/contact"><Contact /></Route>
      <Route exact path="/blog/:slug"><Post /></Route>
      <Route exact path="/blog"><BlogHome /></Route>
      <Route exact path="/"><Home /></Route>
    </div>
  );
}

export default Routes;
