import { Link } from "react-router-dom"
export default function Hero({titre, slogan, texteBouton}){
    return(
        <section className="hero">
            <h2>{titre}</h2>
            <p>{slogan}</p>
            <button><Link to = "/Produits">{texteBouton}</Link></button>
        </section>
    )
}