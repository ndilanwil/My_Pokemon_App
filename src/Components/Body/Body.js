import './Body.css'
import React, { lazy, Suspense } from 'react';
import PokemonCard from "../PokemonCard/PokemonCard.js"
import AllPokemons from "../fetchAllPokemons.js"

const Body = () => {
    var data=AllPokemons();
    return (
        <div className="body">
            <div className="bopoke">
                {data.map((poke)=>{
                    return <PokemonCard name={poke.name}
                                        image={poke.sprites.other['official-artwork'].front_default}
                                        type={poke.types}
                                        height={poke.height}
                                        weight={poke.weight}
                                        ability={poke.abilities[0].ability.name}
                                        HP={poke.stats[0].base_stat}
                                        attack={poke.stats[1].base_stat}
                                        defense={poke.stats[2].base_stat}
                                        speed={poke.stats[5].base_stat}/> 
                })}
            </div>
        </div>
    )
}

export default Body;
