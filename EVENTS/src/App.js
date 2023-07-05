import React, { Component } from 'react';
import MyCars from './components/MyCars';
import './App.css';

class App extends Component {
  state = {
    titre: 'Mon catalogue voitures'
  }
  changingTitle = () => {
    this.setState({
      titre: 'Titre changer en dur'
    });
  }
  changingTitleViaParam = (titre) => {
    this.setState({
      titre: titre
    });
  }
  changingTitleViaBind = (param) => {
    this.setState({
      titre: param
    });
  }
  changingTitleViaInput = (e) => {
    this.setState({
      titre: e.target.value
    });
  }
  render() {
    return (
      <div className="App">
        <MyCars title={this.state.titre} />
        <button onClick={this.changingTitle}>Changer le titre en dur</button>
        <button onClick={() => this.changingTitleViaParam('Titre changer via paramètre')}>Changer le titre via Paramètre</button>
        <button onClick={this.changingTitleViaBind.bind(this, 'Titre changer via bind')}>Changer le titre via Bind</button>
        <input type="text" onChange={this.changingTitleViaInput} value={this.state.titre}/>
      </div>
    );
  }
}

export default App;
