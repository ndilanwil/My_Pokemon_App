import './PokemonCard.css'
import React, { useState } from 'react';
import changeColor from '../changeColor'
import PokemonDetail from '../PokemonDetail/PokemonDetail';

const PokemonCard = (props) => {
    const [showOverlay, setShowOverlay] = useState(true);
    const toggleOverlay = () => {
        setShowOverlay(!showOverlay);
    };
    let types = props.type
    let color = changeColor(types[0].type.name);
    return (
        <button onClick={toggleOverlay} className="containerPC" style={{background: color}}>
            <div className="image">
                <img src={props.image} alt="test" />
            </div>
            <div className="info">
                <p>{props.name}</p>
                <div className="type">
                {
                    types.map((type)=>{
                        return <p>{type.type.name}</p>
                    })
                }
                </div>
            </div>
            {showOverlay && (
                  <PokemonDetail name={props.name}
                                 image={props.image}
                                 types={types}
                                 height={props.height}
                                 weight={props.weight}
                                 ability={props.ability}
                                 HP={props.HP}
                                 attack={props.attack}
                                 defense={props.defense}
                                 speed={props.speed}/>
                )}
        </button>
        
    )
};

export default PokemonCard; 