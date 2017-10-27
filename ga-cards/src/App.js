import React, { Component } from 'react';
import './App.css';
import Home from './Home.js';
import About from './components/About.js';
import Add from './components/Add.js';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <h1>Cards Against Assembly</h1>
            <nav className="tabs">
              <NavLink exact to="/">Home</NavLink>{" "}
              <NavLink to="/about">About</NavLink>{" "}
              <NavLink to="/add">Add</NavLink>
            </nav>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/add" component={Add}/>
           </Switch>
            <footer>
              <p>Made with <span className="heart">♥︎</span> at General Assembly</p>
            </footer>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
