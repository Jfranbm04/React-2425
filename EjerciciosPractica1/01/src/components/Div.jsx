
/**
 * Crea un componente que a través de un input añada en otro componente
el texto introducido dentro de un DIV.
 */

import React from 'react'

const Div = ({ texto }) => {
    return (
        <div>
            Hola: {texto}
        </div>
    )
}

export default Div