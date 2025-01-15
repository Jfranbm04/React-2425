// rafce

const Padre = (params) => {     // Es obligatorio poner params al poner en app.jsx:  <Padre info={{ nombre: "Isaias", edad: 25 }}>
    let handleClick = (() => {
        setInfo({ ...info, nombre: "Pedro" });
    });

    let handleClickEdad = (() => {
        setInfo((prevInfo) => ({ ...prevInfo, edad: prevInfo.edad + 1 }));
    });


    const { info, isAdmin, setInfo, children } = params;

    return (
        <>
            <section>
                <h2>Bienvenido {info.nombre}</h2>
                <p>Edad: {info.edad}</p>
                {isAdmin && (<p>Es administrador</p>)}
                <div>
                    <button onClick={handleClick}> Modificar </button>
                </div>
                <div>
                    <button onClick={handleClickEdad}> Sumar edad </button>
                </div>
            </section>
            <br></br>
            <section>
                <p>Niños: {children}</p>
            </section>
        </>


    )
}

export default Padre