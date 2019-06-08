import React, { Component } from 'react';
import './Pokegame.scss';
import Pokedex from './Pokedex';

class Pokegame extends Component {
    static defaultProps = {

    }
    render() {
        return (
            <div className="Pokegame">
                <Pokedex />
                <Pokedex />
            </div>
        )
    }
}

export default Pokegame;