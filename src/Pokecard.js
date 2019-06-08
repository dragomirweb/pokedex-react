import React, { Component } from "react";
import './Pokecard.scss';

class Pokecard extends Component {
  static defaultProps = {
    pokemon: { id: 4, name: "Charmander", type: "fire", base_experience: 62 }
  }
  render() {
    const pokemon = this.props.pokemon;

    function getImage(num) {
      if (num <= 10) {
        return `00${num}`;
      } else if (num < 99) {
        return `0${num}`;
      } else {
        return num;
      }
    }
    return (
      <div className="Pokecard">
        <h3 className="Pokecard-title">{pokemon.name}</h3>
        <div className="Pokecard-image">
          <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${getImage(pokemon.id)}.png`} alt="Pokemon"/>
        </div>
        <p className="Pokecard-type">Type: <span>{pokemon.type}</span></p>
        <p className="Pokecard-exp">Experience: <span>{pokemon.base_experience}</span></p>
      </div>
    );
  }
}
export default Pokecard;
