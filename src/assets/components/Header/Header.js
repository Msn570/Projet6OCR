import logo from "../../images/logo.webp";
import Nav from "../Nav/Nav";

export default function Header(){
    return ( 
        <header className="Header">
            <img className="logo" src={logo} alt="Logo Agence Kasa"></img>
            <Nav className="Nav_Head"/>
        </header>
    )
}