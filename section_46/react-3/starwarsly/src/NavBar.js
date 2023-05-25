import React from 'react';
import { NavLink } from 'react-router-dom';

import "./NavBar.css"


function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" exact to="/">StarWars.ly</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/films">Films</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/planets">Planets</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/people">People</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}


export default NavBar