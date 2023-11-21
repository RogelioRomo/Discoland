import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getProducts } from "../../services/firebase/firestore/products"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(() => {

        const asyncFunc = () => getProducts(categoryId)

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return (
        <>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </>
    )
}

export default ItemListContainer