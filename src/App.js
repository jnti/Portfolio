import React, { Component } from 'react';
import './App.css';
import TopBar from './components/topbar'
import Home from './components/home'
import About from './components/about'
import Resume from './components/resume'
import Skills from './components/skills'

class App extends Component {
  render() {
    return (
      <div>
        <TopBar></TopBar>
        <Home></Home>
        <About></About>
        <Resume></Resume>
        <Skills></Skills>
      </div>
    );
  }
}

export default App;
