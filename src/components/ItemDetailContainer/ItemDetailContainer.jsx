import "./ItemDetailContainer.css"
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getDoc, doc} from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const ItemDetailContainer = () =>{
    const [products, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        const productRef = doc(db, 'products', itemId)

        getDoc(productRef)
            .then(documentSnapshot => {
                const fields = documentSnapshot.data()
                const productAdapted = {id: documentSnapshot.id, ...fields}
                setProduct(productAdapted)
            })
    }, [itemId])

    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...products} />
        </div>
    )
}

export default ItemDetailContainer