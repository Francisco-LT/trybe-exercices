import React from 'react';
import Pokedex from './pokedex'
import './App.css';
import pokemons from './data'

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <Pokedex pokemons={pokemons}/>
    </div>
  );
}

export default App;
