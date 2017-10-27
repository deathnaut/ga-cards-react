import React, { Component } from 'react';
// import './App.css';
import { database } from '../utils/firebase.js';
import './Add.css';


class Add extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: ""
    };

    this._updateText = this._updateText.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  };

  _updateText(e){
    this.setState({
      title: e.target.value
    });
  }

  _handleSubmit(e){
    e.preventDefault();
    // TODO: if duplicate, don't let it happen
    database.ref('/cards')
      .push({
        title: this.state.title
      })
      .then(()=>{
        window.location.replace('/');
      });
  }

  render() {
    return (
      <div className="App">
        <form name="add-card" id="add-card" onSubmit={this._handleSubmit}>
          <input type="text" name="question" id="question" placeholder="What's your question?" value={this.state.preview} onChange={this._updateText}/>
          <button onClick={this._handleClick}>SUBMIT</button>
        </form>
        <br/>
        <div className="card">
          <h4 className="card-title">{this.state.title}</h4>
          <h6>Cards Against Assembly</h6>
        </div>
      </div>
    );
  }
}

export default Add;
