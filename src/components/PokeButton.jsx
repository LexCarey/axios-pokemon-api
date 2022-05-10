import React from 'react'
import axios from 'axios';

const PokeButton = (props) => {

    const pokemonFetch = async() => {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=898')
        props.update(response.data)
    }

    return (
        <div>
            <button className='btn btn-primary' onClick={pokemonFetch}>Fetch Pokemon</button>
        </div>
    )
}

export default PokeButton