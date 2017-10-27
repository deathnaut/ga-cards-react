import React, { Component } from 'react';
// import './App.css';

class Add extends Component {
  constructor(props){
    super(props);

    this.state = {
      preview: "A preview appears here as you type..."
    }
    this._updateText = this._updateText.bind(this);
  };

  _updateText(e){
    this.setState({
      preview: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <form name="add-card" id="add-card">
          <input type="text" name="question" id="question" placeholder="What's your question?" value={this.state.preview} onChange={this._updateText}/>
        </form>
        <br/>
        <div className="card">
          <h4 className="card-title">{this.state.preview}</h4>
          <h6>Cards Against Assembly</h6>
        </div>
      </div>
    );
  }
}

export default Add;
