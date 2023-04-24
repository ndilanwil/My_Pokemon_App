import './Body.css'
import { useState } from "react"
import pokeball from "../../images/pokeball.png"
import PokemonCard from "../PokemonCard/PokemonCard.js"
import AllPokemons from "../fetchAllPokemons.js"

function Body() {
    var data=AllPokemons();
    var yo;
    let i=0
    return (
        <div class="body">
            <div class="bopoke">
                {data.map((poke)=>{
                        return <PokemonCard name={poke.name} image={poke.sprites.other['official-artwork'].front_default} type={poke.types}/> 
                })}
            </div>
        </div>
    )
}

export default Body;