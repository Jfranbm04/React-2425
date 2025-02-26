import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {


    const navigate = useNavigate();

    // Aqui saco todos los metodos e informacion de AuthContext (del useAuth)
    const { loginUser } = useAuth();


    // Hago una peticion a la api con los datos del formulario para verificar si el usuario existe en la base de datos
    // En el ejemplo de simulacroExamen/ejercicio3 tengo una funcion onChange que actualiza formData y otra onSubmit. Aquí he juntado ambas por simplicidad
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value.trim(); // Capturamos el valor del input email
        const password = e.target.password.value.trim(); // Capturamos el valor del input password

        try {
            await loginUser({ email, password }); // Llamamos a loginUser con los datos capturados
            navigate("products"); // Redirigimos al usuario
        } catch (error) {
            console.log("Error al iniciar sesión", error);
        }
    };

    return (
        <div className="max-w-md mx-auto my-10 p-5 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold">Inicia Sesión</h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label
                        htmlFor="email"
                        className="block text-xl font-semibold text-gray-900"
                    >
                        Correo Electrónico
                    </label>
                    <input
                        type="email" id="email" name="email" required
                        className="block w-full px-4 py-2 mt-2 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    ></input>
                </div>
                <div>
                    <label
                        className="block text-xl font-semibold text-gray-900"
                        htmlFor="password"
                    >
                        Contraseña
                    </label>
                    <input
                        type="password" id="password" name="password" required
                        className="block w-full px-4 py-2 mt-2 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    ></input>
                </div>
                <button
                    type="submit"
                    className="w-full px-4 py-2 mt-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                >
                    Iniciar Sesión
                </button>
            </form>
        </div>
    )
}

export default LoginPage