import React, { Component } from 'react';
import '../App.css';
import Card from './Card.js';
import { database, firebaseListToArray } from '../utils/firebase.js';

class CardList extends Component {
  constructor(props){
    super(props);

    this.state = {
      cards: []
    };
  }

  componentWillMount() {
    database.ref('/cards')
      .on('value', data => {
        const results = firebaseListToArray(data.val());
        this.setState({
          cards: results
        });
      })
  }

  render() {
    var cardComponents = this.state.cards.map((cardData=>
      <Card key={cardData.id} title={cardData.title}/>
    ));
    return (
      <section id="cards" className="container-fluid">
        <div className="row">
          {cardComponents}
        </div>
      </section>
    );
  }
  // componentWillUnmount(){
  //   database.off();
  // }
}

export default CardList;
