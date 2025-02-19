/*
    Crear un componente de tipo img que contenga una imagen. Al posicionar el cursor encima de la imagen cambiaremos la opacidad de la imagen. 
    Al posicionar el cursor fuera de la imagen restableceremos el valor a la opacidad. 
    Adicionalmente a través de una etiqueta h2 mostraremos cuando estemos encima o fuera de la imagen el valor de la opacidad.
*/

import { useState } from "react"

const imagen = () => {

    const [opacidad, setOpacidad] = useState(1)

    const handleMouseOver = () => {
        setOpacidad(0);
    }

    const handleMouseOut = () => {
        setOpacidad(1);
    }

    return (
        <>
            <img
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                style={{ opacity: opacidad }}
                src="../public/Rico.png" alt="" />
            <h2>Opacidad: {opacidad}</h2>
        </>

    )
}

export default imagen