import React, { Component } from 'react';
import CardList from './components/CardList.js';
import './components/Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <section id="cards" className="container-fluid">
          <div className="row">
            <CardList />
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
