import React, { Component } from 'react';
import MyCars from './components/MyCars';
import './App.css';

class App extends Component {
  state = {
    titre:'Mon catalogue voitures'
  }
  changingTitle = (e) => {
    this.setState({
      titre:'Titre changer'
    });
  }
  changingTitleViaParam = (titre) => {
    this.setState({
      titre: titre
    });
  }
  render() {
    return (
    <div className="App">
      <MyCars title={this.state.titre}/>
      <button onClick={this.changingTitle}>Changer le titre</button>
      <button onClick={() => this.changingTitleViaParam('Abracadabra')}>Changer le titre via Paramètre</button>
    </div>
  );
  }
}

export default App;
