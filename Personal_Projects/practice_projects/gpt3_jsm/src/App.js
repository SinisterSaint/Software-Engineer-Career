// rafce: a react functional component
import React from 'react'

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers/Index';
import { CTA, Brand, Navbar } from './components';
import './App.css'


const App = () => {
  return (
    <div claaName="App"> 
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App

