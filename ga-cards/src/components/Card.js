import React, { Component } from 'react';
import './Card.css'

class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
      showTitle: this.props.showTitle || false
    }
    this._showCard = this._showCard.bind(this);
  }

  _showCard(e){
    this.setState({
      showTitle: !this.state.showTitle
    })
  }

  render() {
    let question = this.state.showTitle ? this.props.title + ' __________.' : '';
    return (
      <div className="col-sm-6 col-md-4 col-lg-4">
          <div className="card" onClick={this._showCard}>
            <h4 className="card-title">{question}</h4>
            <h6>Cards Against Assembly</h6>
          </div>
      </div>
    );
  }
}

export default Card;
