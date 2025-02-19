import React, { useEffect, useState } from 'react'

const BASE_URL = import.meta.env.VITE_BASE_URL;

const ProductList = () => {


    const [productList, setProductList] = useState([]);

    // Fetch api
    const fetchFromApi = async () => {
        try {
            const response = await fetch(`${BASE_URL}/api/products`);
            const data = await response.json();
            setProductList(data);
        } catch (error) {
            throw new Error("Error fetching data");
        }
    };

    useEffect(() => {
        fetchFromApi();
    }, [])


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