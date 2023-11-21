import React from "react";

const CartItem = ({ id, name, price, quantity }) => {
    return (
        <div>
            <p>Id: {id}</p>
            <p>Name: {name}</p>
            <p>Price: ${price}</p>
            <p>Quantity: {quantity}</p>
        </div>
    );
};

export default CartItem;