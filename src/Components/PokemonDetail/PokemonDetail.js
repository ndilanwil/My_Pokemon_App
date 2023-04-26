import './PokemonDetail.css'
import pokeball from '../../images/pokeball.png'

const PokemonDetail = (props) => {
    return (
      <div className='shadow'>
        <div className='onclick'>
            <p>X</p>
        </div>
        <div className='card'>
            <div className='image'>
              <img src={pokeball} alt="" />
            </div>
            <div className="name">
                <h1>Name</h1>
                <div className="type">
                {/* {
                    types.map((type)=>{
                        return <p>{type.type.name}</p>
                    })
                } */}
                </div>
            </div>
            <div className='about'>
              <h1>About</h1>
              <center>
              <table>
                <tr>
                  <td>Species</td>
                  <td>Species</td>
                </tr>
                <tr>
                  <td>Height</td>
                  <td>Species</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>Species</td>
                </tr>
                <tr>
                  <td>Abilities</td>
                  <td>Species</td>
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
                  <td>Species</td>
                </tr>
                <tr>
                  <td>Attack</td>
                  <td>Species</td>
                </tr>
                <tr>
                  <td>Defense</td>
                  <td>Species</td>
                </tr>
                <tr>
                  <td>Speed</td>
                  <td>Species</td>
                </tr>
              </table>
              </center>
            </div>
        </div>
      </div>
    )
};

export default PokemonDetail; 