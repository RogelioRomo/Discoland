import "./ItemDetail.css"
import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const ItemDetail = ({id, name, img, category, description, price, stock})=>{
    const navigate = useNavigate()

    const [quantityAdded, setQuantityAdded] = useState(0)
    
    const { addItem, isInCart } = useCart()

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const productToAdd = {
            id, name, price, quantity
        }

        addItem(productToAdd)
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
                    isInCart(id) ? (
                        <button onClick={() => navigate('/cart')}>Terminar compra</button>
                        
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
                
            </footer>
        </article>
    )
}

export default ItemDetail