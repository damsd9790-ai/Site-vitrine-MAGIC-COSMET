import { useState } from "react";

const whatsappNumber = 687352984;

function RendezVous(){
    const [nom, setNom] = useState("");
    const [telephone, setTelephone] = useState("");
    const [date, setDate] = useState("");
    const [motif, setMotif] = useState("")

    function envoyer(e){
    //empêcher le rechargement de la page
        e.preventDefault();

    //message whatsapp
    const message = `Bonjour je suis ${RendezVous.nom} et je voudrai en savoir plus sur ${RendezVous.motif} le ${RendezVous.date}  je reponds au numero suivant ${RendezVous.telephone} !!!`;

    //encodage du message whatsaapp
    const HashMessage = encodeURIComponent(message);
    
    //fabrication du lien du message
    const MessageLink = `https://wa.me/237620180149?text=${HashMessage}`;
    
    //ouverture du lien
    window.open(`https://wa.me/237620180149?text=${HashMessage}`, "_blanck");
    
    }

    return(
        <>
            <form onSubmit={envoyer}>
                <label htmlFor="nom">Nom</label>
                <input type="text" name="nom" id="nom" placeholder="veuilliez entrer votre nom"required/>

                <label htmlFor="telephone">Téléphone</label>
                <input type="tel" name="telephone" id="telephone" placeholder="veuillez entrer votre numero de téléphone" required/>

                <label htmlFor="date">Date</label>
                <input type="date" name="date" id="date" required/>

                <label htmlFor="motif">Motif</label>
                <select value={categorie} onChange={(e) => setCategorie(e.target.value)} required id="motif">
                    <option value="">choisir le motif</option>
                    <option value="je voudrais demander un conseil à propos d'un produit">demander un conseil</option>
                    <option value="je suis intéréssé je voudrais en connaître d'avantage">intéréssé</option>
                </select>

                <button type="submit">Envoyer</button>
                
            </form>
        </>
    );
} 

export default RendezVous;