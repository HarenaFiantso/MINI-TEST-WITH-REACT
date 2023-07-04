import React, { Component } from 'react';
import MyCars from './components/MyCars';
import './App.css';

class App extends Component {
  state = {
    titre:'Mon catalogue voitures'
  }
  render() {
    return (
    <div className="App">
      <MyCars title={this.state.titre}/>
    </div>
  );
  }
}

export default App;
