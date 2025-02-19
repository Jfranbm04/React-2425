import React, { useEffect, useState } from 'react'
import { useProducts } from '../context/ProductsContext';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const ProductList = () => {

    // Llamo al hook de productContext donde hace el fetching de productos de la base de datos
    const { productList } = useProducts();


    return (
        <ul>
            {/* Renderizar la lista de productos */}
            {productList.map((product) => (
                <li key={product.id}>
                    {product.name}
                </li>
            ))}
        </ul>
    )
}

export default ProductList