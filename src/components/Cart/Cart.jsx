import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './Cart.css'


export const Cart = () => {
    const navigate = useNavigate()

    const {cart, totalQuantity, total, clearCart} = useCart()

    if(totalQuantity === 0){
        return (
            <div>
                <h1>No hay productos en el carrito</h1>
                <Link to='/' className=''>Visitar tienda</Link>
            </div>
        )
    }

    return (
        <div>
            <h1>Carrito de compra</h1>
            <div>
                    {
                        cart.map(prod => {
                            return(
                                <div className="cardCart">
                                    <div key={prod.id} className="element">
                                        <h3>{prod.name}</h3>
                                        <h3>Cantidad:{prod.quantity}</h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                
                <div className="element2">
                    <div>
                        <h3>Cantidad Total: {totalQuantity}</h3>
                        <h3>Total: ${total}</h3>
                    </div>
                    <button onClick={() => clearCart() }>Limpiar el carrito</button>
                    <button onClick={() => navigate('/checkout')}>Checkout</button>
                </div>
            </div>
        </div>
    )
}