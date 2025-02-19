import { useState } from "react"


/*
    Crear un componente que contenga un botón. Al pulsar dicho botón se
    cambiará el fondo de la pantalla a un color #abb8c3
*/

const boton = () => {

    // Hook con estado
    const [background, setBackground] = useState(null)


    const handleColor = (color) => {
        setBackground(color);
    }

    return (
        <div style={{ background: background }}>
            <button
                onClick={() => handleColor("#abb8c3")}
            >Cambiar color del background</button>
        </div>
    )
}

export default boton