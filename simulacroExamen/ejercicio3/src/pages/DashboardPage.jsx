import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../context/ProductsContext';


// Crear en el dashboard un formulario para filtrar los productos por nombre en tiempo real.
// 2.0) Puedo crear un hook para filtrar?

const DashboardPage = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth();

    const { productList } = useProducts();
    const [filteredProducts, setFilteredProducts] = useState(productList);


    // Sincroniza filteredProducts con productList cuando productList cambia
    useEffect(() => {
        setFilteredProducts(productList);
    }, [productList]);

    const handleClick = () => {
        logOut();
        navigate("/");
    }
    const handleChange = (event) => {
        const texto = event.target.value.toLowerCase();
        console.log(texto);

        // Hago consultas a la api y hago un setProducts
        setFilteredProducts((prevProducts) => {
            return (prevProducts.filter((product) => product.name.toLowerCase().includes(texto)));
        });
    }

    return (
        <div>
            <button onClick={handleClick}>Logout</button>
            <div>DashboardPage PROTEGIDO</div>
            <div>
                <h2>Lista de productos</h2>
                <input type="text" onChange={handleChange} placeholder='Busca un producto' />
                <div>
                    {filteredProducts.map((product) => (
                        <div key={product._id}>{product.name}</div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default DashboardPage