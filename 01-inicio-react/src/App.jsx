// import Contador from "./components/Contador"
// import ContadorDoble from "./components/ContadorDoble"

import Hijo from "./components/parametros/Hijo"
import { useState } from "react";
import Padre from "./components/parametros/Padre"


const initialStateInfo = { nombre: "Isaias", edad: 25, isAdmin: false };

export const App = () => {
  const [info, setInfo] = useState(initialStateInfo);

  return (
    // El <> es especial de react, hace de div padre 
    <>

      <Padre info={info} setInfo={setInfo}>
        <Hijo info={info} />
      </Padre>







      {/* <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Ejemplos de componentes y estados en React
        </h1>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">Contador simple</h2>
          <Contador/>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">Contador doble</h2>
          <ContadorDoble/>
        </div>
        </div> */}

    </>

  )
}


export default App
