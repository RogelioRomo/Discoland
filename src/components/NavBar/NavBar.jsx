import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import { NavLink, Link } from "react-router-dom"

const NavBar = () =>{
    return(
        <nav className="navbar navFont divider">
            <Link to='/' className="navLogo">
                <h1>Discoland</h1><img className="navImg" alt="logo discoland" src="./cd.svg" width="60"></img>
            </Link>
            <div>
                <NavLink to={'/category/Vinilo'} className={({isActive}) => isActive ? 'navButton navButtonHover' : ' navButton navButtonHover'}>Vinilos</NavLink>
                <NavLink to={`/category/CD`} className={({isActive}) => isActive ? 'navButton navButtonHover' : 'navButton navButtonHover'}>CD's</NavLink>
                <NavLink to={`/category/Cassette`} className={({isActive}) => isActive ? 'navButton navButtonHover' : 'navButton navButtonHover'}>Cassette</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar