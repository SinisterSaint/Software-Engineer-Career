import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import './App.css';

import NavBar from "./NavBar";
import Routes from "./Routes";


function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <NavBar />
        <Routes />
      </BrowserRouter>
    </div>
  );
}


export default App;
