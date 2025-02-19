
/**
 * Crea un componente que a través de un input añada en otro componente
el texto introducido dentro de un DIV.
 */

import React, { useState } from 'react'

const Input = () => {

    const [text, setText] = useState("...")

    const handleChange = (e) => {
        setText(e.target.value);
    }



    return (
        <input type="text"
            onChange={handleChange}
            placeholder='Escribe algo...' />
    )
}

export default Input