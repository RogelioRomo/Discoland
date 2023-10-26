import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id, name, img, category, description, price, stock})=>{
    return (
        <article className="cardItem">
            <header className="header">
                <h2 className="itemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="itemImg"/>
            </picture>
            <section>
                <p className="info">
                    Precio: ${price}
                </p>
                <p className="info">
                    Categoría: {category}
                </p>
                <p className="info">
                    Descripción: {description}
                </p>
            </section>
            <footer className="itemFooter">
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("Cantidad agregada ", quantity)}/>
            </footer>
        </article>
    )
}

export default ItemDetail