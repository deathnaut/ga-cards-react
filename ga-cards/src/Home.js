import React, { Component } from 'react';
// import './App.css';
import About from './components/About.js';
import Add from './components/Add.js';


class Home extends Component {
  render() {
    return (
      <div className="App">
        <h1>Cards Against Assembly</h1>
        <About />
        <Add />
      </div>
    );
  }
}

export default Home;
