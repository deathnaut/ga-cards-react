import React, { Component } from 'react';

class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
    }
    this._showContent = this._showContent.bind(this);
  }

  _showContent(e){
    console.log("hide/show content!");
  }

  render() {
    return (
      <div className="row card">
        <div className="col-sm-6 col-md-4 col-lg-4">
            <div className="card" onClick={this._showContent}>
              <h4 className="card-title">{this.props.title}</h4>
              <h6>Cards Against Assembly</h6>
            </div>
        </div>
      </div>
    );
  }
}

export default Card;
