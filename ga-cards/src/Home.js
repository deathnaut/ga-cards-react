import React, { Component } from 'react';
import CardList from './components/CardList.js';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>home</h2>
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
