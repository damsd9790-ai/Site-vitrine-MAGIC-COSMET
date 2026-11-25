import ProductCards from '../components/productCards.jsx';
import { produits } from '../data/produits.js';
export default function Catalogue(){
    return (
        <main className="container">
            {produits.map((h) => (
            <ProductCards key = {h.id} nom = {h.nom} description = {h.description} prix = {h.prix} image = {h.image}/>
            ))}
        </main>
    );
}