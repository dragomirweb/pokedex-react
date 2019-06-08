import React, { Component } from 'react';
import './App.scss';
import Pokegame from './Pokegame';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2 className="title">Pokedex</h2>
        <Pokegame />
      </div>
    )}
}

export default App;
