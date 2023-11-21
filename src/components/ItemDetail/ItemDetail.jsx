import "./ItemDetail.css"
import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({id, name, img, category, description, price, stock})=>{
    
    const [quantityAdded, setQuantityAdded] = useState(0)
    
    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }

        addItem(item, quantity)
    }
    
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
                {
                    quantityAdded > 0 ? (
                        <Link to="/cart" className="button">Terminar Compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
                
            </footer>
        </article>
    )
}

export default ItemDetail