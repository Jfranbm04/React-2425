import Button from "./Button";


const ProductCard = (props) => {
    const { product, addCart } = props;

    const handleClick = () => {
        addCart(product);
    }

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between ">
            <h2 className="text-xl font-bold mb-2">{product?.title}</h2>
            <p className="text-gray-700 mb-4">{product?.price}</p>
            <button
                onClick={handleClick}
                className="bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded transition">
                Añadir al fokin carro
            </button>
            {/* <Button className="bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded transition">
                Añadir al fokin carro
            </Button> */}
        </div>
    )
}

export default ProductCard
