import './PokemonDetail.css'
import pokeball from '../../images/pokeball.png'
import changeColor from '../changeColor'

const PokemonDetail = (props) => {
    let types = props.types
    let color = changeColor(types[0].type.name);
    return (
      <div className='shadow' style={{background: color}}>
        <div className='onclick'>
            <p>X</p>
        </div>
        <div className='card'>
            <div className='image'>
              <img src={props.image} alt="" />
            </div>
            <div className="name">
                <h1>{props.name}</h1>
                <div className="type">
                {
                    props.types.map((type)=>{
                        return <p>{type.type.name}</p>
                    })
                }
                </div>
            </div>
            <div className='about'>
              <h1>About</h1>
              <center>
              <table>
                <tr>
                  <td>Height</td>
                  <td>{props.height} cm</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>{props.weight} g</td>
                </tr>
                <tr>
                  <td>Abilities</td>
                  <td>{props.ability}</td>
                </tr>
              </table>
              </center>
            </div>
            <div className='stats'>
              <h1>Stats</h1>
              <center>
              <table>
                <tr>
                  <td>HP</td>
                  <td>{props.HP}</td>
                </tr>
                <tr>
                  <td>Attack</td>
                  <td>{props.attack}</td>
                </tr>
                <tr>
                  <td>Defense</td>
                  <td>{props.defense}</td>
                </tr>
                <tr>
                  <td>Speed</td>
                  <td>{props.speed}</td>
                </tr>
              </table>
              </center>
            </div>
        </div>
      </div>
    )
};

export default PokemonDetail; 