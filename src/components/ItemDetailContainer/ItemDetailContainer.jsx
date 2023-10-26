import "./ItemDetailContainer.css"
import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () =>{
    const [products, setProduct] = useState(null)

    useEffect(() => {
        getProductById("1")
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return (
        <>
            <ItemDetail {...products} />
        </>
    )
}

export default ItemDetailContainer