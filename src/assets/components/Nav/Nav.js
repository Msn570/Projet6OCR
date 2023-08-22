import { NavLink } from "react-router-dom";

export default function Nav(){
    return(
        <nav className="Nav_Head">
            <NavLink to="/">
                Accueil
            </NavLink>
            <NavLink to="/About">
                A Propos
            </NavLink>
        </nav>
    )
}