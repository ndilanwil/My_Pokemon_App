import './Header.css'
import React, { useState, useEffect } from 'react';
import pokedex from '../../images/pokedex.png'
import pokeball from '../../images/pokeball.png'

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [pokemons, setPokemons] = useState([]);
  
    useEffect(() => {
      const getPokemons = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`);
        const data = await response.json();
        setPokemons([data]);
      };
  
      if (searchTerm !== '') {
        getPokemons();
      }
    }, [searchTerm]);
  
    const handleSearch = (e) => {
      setSearchTerm(e.target.value.toLowerCase());
    };
        return (
        <div className="containerH">
            <div className="left">
                <img src={pokedex} alt="pokedex from Dilan" />
            </div>
            <div className="right">
                <input type="text" onChange={handleSearch} placeholder="Enter a Pokemon name or ID" />
                {pokemons.map((pokemon) => (
                    <div key={pokemon.id}>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <h3>{pokemon.name}</h3>
                    <h3>{pokemon.types[0].type.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Header;