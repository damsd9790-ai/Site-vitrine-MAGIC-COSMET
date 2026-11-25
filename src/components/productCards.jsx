export default function ProductCards({nom, description, image, prix}){
    return(
        <article className="carte">
            <div>
                <img src={image} alt="" />
                <h3>{nom}</h3>
                <p>{description}</p>
                <p>{prix}</p>
            </div>
        </article>
    );
}