import { useState } from "react"

const ContadorDoble = () => {

    // Hooks
    const [friends, setFriends] = useState({
        Juan: 0,
        Carlos: 0,
        Maria: 0,
    })
    // Variables

    // Funciones
    function handleClickLike(nombre, numero) {
        setFriends((prevValue) => {
            return { ...prevValue, [nombre]: prevValue[nombre] + numero };
        });
    }

    const calcularMedia = () => {
        const totalLikes = Object.values(friends).reduce((acc, likes) => acc + likes, 0);
        const totalAmigos = Object.keys(friends).length;
        return (totalLikes / totalAmigos).toFixed(2); // Redondeo a 2 decimales
    };


    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-gray-200 shadow-md rounded-md">
            <h1 className="text-2xl font-bold mb-5 text-center">
                Contador de likes de mis amigos
            </h1>
            <div className="text-center mt-4">
                <span>
                    Juan tiene <strong> {friends.Juan} </strong> likes
                </span>
                <div className="flex justify-center gap-4 mt-4">
                    {
                        Object.keys(friends).map((key) => {
                            <div key={key} className="text-center mt-4">
                                <span>
                                    {key} tiene <strong> {friends[key]} </strong> likesssssssssss
                                </span>
                            </div>
                        })

                    }
                    <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                        onClick={() => handleClickLike("Juan", 1)}
                    >Like +</button>
                    <button className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md"
                        onClick={() => handleClickLike("Juan", -1)}
                    >Dislike -</button>
                </div>
            </div>

            <div className="text-center mt-4">
                <span>
                    María tiene <strong> {friends.Maria} </strong> likes
                </span>
                <div className="flex justify-center gap-4 mt-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                        onClick={() => handleClickLike("Maria", 1)}
                    >Like +</button>
                    <button className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md"
                        onClick={() => handleClickLike("Maria", -1)}
                    >Dislike -</button>
                </div>
            </div>
            <br></br>
            <div>
                <h1 className="text-2xl font-bold mb-5 text-center">
                    media aritmética de likes de mis amigos
                </h1>
                <span>
                    La media aritmética de likes es <strong> {calcularMedia()} </strong> likes por amigo.
                </span>

            </div>
        </div>
    )
}

export default ContadorDoble

// Crear una etiqueta p que haga la media aritmética del promedio de likes de todos los usuarios