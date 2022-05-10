import React, {useState} from 'react';
import './App.css';
import PokeButton from './components/PokeButton';
import PokeDisplay from './components/PokeDisplay';

function App() {
  const [pokemon, setPokemon] = useState()
  return (
    <div style={{textAlign: "center"}}>
      <div>
        <div>
        <PokeButton update={setPokemon} />
        </div>
      <PokeDisplay pokemon={pokemon} />
      </div>
    </div>
  );
}

export default App;
