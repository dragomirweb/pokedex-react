import React, { Component } from 'react';
import './App.scss';
import Pokecard from './Pokecard';
import Pokedex from './Pokedex';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2 className="title">Pokedex</h2>
        <Pokedex />
      </div>
    )}
}

export default App;
