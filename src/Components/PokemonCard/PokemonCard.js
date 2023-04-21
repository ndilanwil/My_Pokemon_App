import './PokemonCard.css'
import pokeball from '../../images/pokeball.png'
import Pokemon from "../fetchOnePokemon.js"


const PokemonCard = (props) => {
    const data = Pokemon(props.name)
    const photoUrl = data.sprites.front_default;
    console.log(`Photo du Pokémon : ${photoUrl}`);
    return (
        <div class="containerPC">
            <div class="image">
                {/* <img src={data.sprites.other['original-artwork'].front_default} alt="pokemon" /> */}
            </div>
            <div class="info">
                <p>{props.name}</p>
                {/* <p>Type : {data.types[0].type.name}</p> */}
            </div>
        </div>
    )
};

export default PokemonCard; 