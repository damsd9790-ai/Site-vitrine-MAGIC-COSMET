import ProductCards from './productCards.jsx';
import { produits } from '../data/produits.js';
export default function Catalogue(){
    return (
        <section className='catalogue'>
            {produits.map((h) => (
            <ProductCards key = {h.id} nom = {h.nom} description = {h.description} prix = {h.prix} image = {h.image}/>
            ))}
        </section>
    );
}