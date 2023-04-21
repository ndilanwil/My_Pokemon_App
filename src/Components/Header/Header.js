import './Header.css'
import pokedex from '../../images/pokedex.png'
import pokeball from '../../images/pokeball.png'

function Header() {
    return (
        <div class="containerH">
            <div class="left">
                <img src={pokedex} alt="pokedex from Dilan" />
            </div>
            <div class="right">
                <h2>Find a pokemon </h2>&nbsp;&nbsp;&nbsp;&nbsp; <input type="text" id="search" />
                <button type="submit"><img src={pokeball} alt="" style={{width:"30px"}}></img></button>
            </div>
        </div>
    )
}

export default Header;