import { useState } from "react";

const Contador = () => {
    // hooks                // Los hooks son ASINCRONOS

    // useStateSnippet
    const [contador, setContador] = useState(0)

    // Variables

    // Funciones
    const handleClick = (numero) => {
        // Suma 1 a la variable contador
        
        setContador((prevContador)=>prevContador + numero);     // Se pone con prevContador porque los hooks son asincronos (llama siempre y trabaja con la variable pasada)
    }
    
  return (
    <>
        <div className="max-w-sm mx-auto mt-8 p-6 bg-gray-200 shadow-sm rounded-md">
            <h1 className="text-3xl font-bold text-center">Hola soy un turbo contador</h1>
            <p className="text-2xl text-center text-blue-500 font-semibold">{contador}</p>

            <div className="flex justify-center mt-5 gap-4">
                <button onClick={() => handleClick(1)} 
                    className="bg-blue-500 text-white" 
                >Aumentar</button>
                -
                <button onClick={() => handleClick(-1)} 
                    className="bg-red-500 text-white"
                >Disminuir</button>
            </div>
        </div> 
    </>
  )
}

export default Contador