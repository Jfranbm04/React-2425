import { useEffect, useState } from "react"
import ProductCard from "./ProductCard";
import LiCartProduct from "./LiCartProduct";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    const [totalCarrito, setTotalCarrito] = useState(0)


    useEffect(() => {
        fetchProducts();
    }, []);

    // Función que recoje los productos de la api
    const fetchProducts = async () => {

        try {
            const response = await fetch("http://localhost:5173/src/data/db.json");
            if (!response.ok) throw new Error("Error en la peticion");
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.log("Error fetching", error);
        }
    }

    // Funcion para añadir al carrito
    const addCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
        setTotalCarrito(totalCart(cart));
        // setTotalCarrito((prevCarrito) => totalCart(prevCarrito));
    }

    // Funcion para calcular el total del carrito
    const totalCart = (cart) => {
        // recorre el array carrito y sumar precio de los productos (reduce)
        return cart.reduce((acc, product) => acc + product.price, 0);

    }

    // Funcion para quitar un producto del carrito
    // const removeCart = (product) => {

    // }



    return (
        <div className="w-full max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-semibold text-center mb-6">Lista de libros</h1><hr />
            {/* Div que llama a productsCard */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} addCart={addCart} />
                    ))
                }
            </div>
            {/* Div que pinta el carrito de libros */}
            <div className="mt-10">
                <h2 className="text-2xl font-semibold text-center mb-6">
                    Carrito de compras
                </h2>
                <p className="text-xl font-semibold text-center mb-6">Total Carrito: {totalCarrito}</p>

                {/* Si el carrito está vacío, renderizo el parrafo p y si no, renderizo el ul con los libros del carrito */}
                {
                    cart.length === 0 ? (
                        <p>Carrito vacio</p>
                    ) : (
                        <ul>
                            {
                                cart.map((product, index) => (
                                    <LiCartProduct key={index} product={product} />
                                ))
                            }
                        </ul>
                    )
                }


                {/* Si el carrito no está vacío, renderizo con UL los libros del carrito */}
            </div>





            {/* <span>
                {
                    products.length > 0 && products.map(product => (
                        // div necesita una key
                        <div key={product.ID}>
                            <p>{product.title}</p>
                            <p>{product.price}</p>
                            <p>{product.tags}</p>
                            <br />
                        </div>
                    ))
                }
            </span> */}
        </div>
    )
}

export default ProductList