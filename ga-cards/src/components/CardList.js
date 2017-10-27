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
      // return one meme component and insert url into {url}
      <Card key={cardData.id} title={cardData.title}/>
    ));

    // alt solution for above
    // var memeComponents = [];
    // for (let i = 0; i<imageUrls.length; i++){
    //   memeComponents.push(<Meme key={i} url={imageUrls[i]} />);
    // }

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
