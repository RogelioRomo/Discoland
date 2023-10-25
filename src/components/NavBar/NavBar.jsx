import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"

const NavBar = () =>{
    return(
        <nav className="navbar navFont divider">
            <div class="navLogo">
            <h1>Discoland</h1><img class="navImg" alt="logo discoland" src="./cd.svg" width="60"></img>
            </div>
            <div>
                <button className="navButton">Vinilos</button>
                <button className="navButton">CD's</button>
                <button className="navButton">Cassettes</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar