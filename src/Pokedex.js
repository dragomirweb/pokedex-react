import React, { Component } from 'react'
import Pokecard from './Pokecard';

class Pokedex extends Component {
    render() {
        return (
            <div className="Pokedex">
                <p>Pokedex</p>
                <Pokecard />
            </div>
        )
    }
}

export default Pokedex;