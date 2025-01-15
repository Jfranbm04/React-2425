// importar imagen
import carrito from "../../assets/carrito.png";


const Button = (props) => {
    const { className } = props;
    return (
        <button className={className}>
            <img src={carrito} alt="Carrito" className="w-6 h-6 inline-block m-2" />
            {props.children}
        </button>
    )
}

export default Button