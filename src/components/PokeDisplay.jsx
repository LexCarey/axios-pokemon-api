import React, {useState} from 'react'

const PokeDisplay = (props) => {
    const {pokemon} = props
    return (
        <div>
            {
                pokemon?
                <ul style={{display: "inline-block", textAlign: "left"}}>
                    {pokemon.results.map((pokemon, i) => {
                        return <li key={i}>
                        <h1>{pokemon.name}</h1>
                        </li>
                    })}
                </ul>
                :
                <h1>Psst! Click the button!!</h1>
            }
        </div>
    )
}

export default PokeDisplay