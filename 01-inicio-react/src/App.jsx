// import Contador from "./components/Contador"
// import ContadorDoble from "./components/ContadorDoble"

// import Contador from "./components/Contador"
// import ContadorDoble from "./components/ContadorDoble"

import Hijo from "./components/parametros/Hijo"
import { useState } from "react";
import Padre from "./components/parametros/Padre"


const initialStateInfo = { nombre: "Isaias", edad: 25, isAdmin: false };

const App = () => {
  const [info, setInfo] = useState(initialStateInfo);
  const handleClickEdad = () => {
    setInfo((prevInfo) => ({ ...prevInfo, edad: prevInfo.edad + 1 }));
  };
  return (
    <>
      {/* <div>adios</div>
      <div>Hola Mundo</div>
      <Contador /> */}
      <p>El nombre es: {info.nombre}</p>
      <p>La edad es: {info.edad}</p>
      <Padre info={info} setInfo={setInfo} handleClickEdad={handleClickEdad}>
        <Hijo info={info} handleClickEdad={handleClickEdad} />
      </Padre>
    </>
  );
};

export default App;
