import "./Item.css"

const Item = ({id, name, img, price, stock})=>{
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
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className="itemFooter">
                <button className="option">Ver detalle</button>
            </footer>
        </article>
    )
}

export default Item