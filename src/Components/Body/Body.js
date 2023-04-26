import './Body.css'
import React, { useState } from 'react';
import pokeball from "../../images/pokeball.png"
import PokemonCard from "../PokemonCard/PokemonCard.js"
import AllPokemons from "../fetchAllPokemons.js"
import PokemonDetail from "../PokemonDetail/PokemonDetail"

const Body = () => {
    const [showOverlay, setShowOverlay] = useState(false);
    const toggleOverlay = () => {
        setShowOverlay(!showOverlay);
    };
    var data=AllPokemons();
    var yo;
    let i=0
    return (
        <div className="body">
            <button onClick={toggleOverlay} className="bopoke">
                {data.map((poke)=>{
                        return <PokemonCard name={poke.name} image={poke.sprites.other['official-artwork'].front_default} type={poke.types}/> 
                })}
                {showOverlay && (
                  <PokemonDetail />
                )}
            </button>
        </div>
    )
}

export default Body;


// function App() {
//   const [showOverlay, setShowOverlay] = useState(false);
//   return (
//     <div>
//       <h1>Welcome to my website</h1>
//       <button onClick={toggleOverlay}>Click me to show overlay</button>
//       {showOverlay && (
//         <div classNameName="overlay">
//           <h2>Overlay content</h2>
//           <button onClick={toggleOverlay}>Close overlay</button>
//         </div>
//       )}
//     </div>
//   );
// }