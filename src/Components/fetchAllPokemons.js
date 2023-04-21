import { useState } from "react"

function AllPokemons() {
    const [pokemons, set] = useState([]);
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
        .then((res)=> res.json())
        .then((resJson)=>{  
            set(resJson.results)
        })
    return pokemons;
}
    

export default AllPokemons;