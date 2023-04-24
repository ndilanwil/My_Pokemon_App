import { useState, useEffect } from "react"

function AllPokemons() {
    const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
      const data = await response.json();
      const results = await Promise.all(data.results.map(async (pokemon) => {
        const pokemonResponse = await fetch(pokemon.url);
        return pokemonResponse.json();
      }));
      setPokemons(results);
    };
    fetchData();
  }, []);
  return pokemons
}
    

export default AllPokemons;