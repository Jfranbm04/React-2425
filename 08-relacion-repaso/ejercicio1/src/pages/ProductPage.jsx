import React from 'react'
import { useParams } from 'react-router-dom'

const ProductPage = ({ action }) => {
    // Saco el id (del GET)
    const { id } = useParams();

    return (
        <div>
            ProductPage action: {action} id: {id}
        </div>
    )
}

export default ProductPage