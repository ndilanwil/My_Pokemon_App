import './PokemonCard.css'
import changeColor from '../changeColor'

const PokemonCard = (props) => {
    let types = props.type
    let color = changeColor(types[0].type.name);
    return (
        <div className="containerPC" style={{background: color}}>
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
        </div>
    )
};

export default PokemonCard; 