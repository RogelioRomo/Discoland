import { useState, createContext, useContext } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    console.log(cart)

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const addItem = (productToAdd) => {

        const isInCart = (id) => {
            return cart.some(prod => prod.id === id)
        }

        if (!isInCart(productToAdd.id)) {
            setCart(prev => [...prev, productToAdd])
        } else {
            console.log('el producto ya esta agregado')
        }

    }

    const removeItem = (id) => {
        const cartUpdated = cart.filter(prod => prod.id != id)
        setCart(cartUpdated)
    }

    const getTotalQuantity = () => {
        let totalQuantity = 0

        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })

        return totalQuantity

    }

    const totalQuantity = getTotalQuantity()

    const getTotal = () => {
        let total = 0

        cart.forEach(prod => {
            total += prod.price * prod.quantity
        })

        return total
    }

    const total = getTotal()

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ cart, addItem, totalQuantity, isInCart, total, clearCart, removeItem }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}