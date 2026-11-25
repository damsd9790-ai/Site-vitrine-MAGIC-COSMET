import { Link } from "react-router-dom";
import Home from '../pages/Accueill.jsx'

export default function Salutation ({nom, theme, onToggleTheme}){
    return(
     <>   
    <header className="header">
        <h1 className="logo">{nom}</h1>
        <nav className="menu">
            <ul className="nav-Link">

                <button onClick={onToggleTheme} className="btn-theme">
                    {theme === "light" ? "sombre" : "clair"}
                </button>

                <Link to="/Accueil" >Accueil</Link>

                <Link to="/Produits">Nos produits</Link>

                <Link to="/Apropos">À propos de nous</Link>

                <Link to="/contact">Contact</Link>
            </ul>
            
        </nav>


    </header>
        <Home/>

     </>   


    );
}


