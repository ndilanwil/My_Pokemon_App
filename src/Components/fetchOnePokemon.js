import { useState } from "react"

function Pokemon(name) {
    const [pokemon, set] = useState({});
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((res)=> res.json())
        .then((resJson)=>{  
            set(resJson)
        })
    return pokemon;
}
    

export default Pokemon;