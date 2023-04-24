import './PokemonCard.css'
import pokeball from '../../images/pokeball.png'
import Pokemon from "../fetchOnePokemon.js"


const PokemonCard = (props) => {
    let types = props.type
    return (
        <div class="containerPC">
            <div class="image">
                <img src={props.image} alt="test" />
            </div>
            <div class="info">
                <p>{props.name}</p>
                <div class="type">
                {
                    types.map((type)=>{
                        return <p>{type.type.name}</p>
                    })
                }
                </div>
            </div>
        </div>
    )
};

export default PokemonCard; 