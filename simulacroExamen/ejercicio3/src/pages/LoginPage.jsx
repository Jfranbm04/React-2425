import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';

const LoginPage = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  // Aqui saco todos los metodos e informacion de AuthContext (del useAuth)
  const { loginUser } = useAuth();



  // Evento que funciona cada vez que se modifica el label (se pulsa una tecla)
  const handleChange = (e) => {
    const nombre = e.target.name;
    // Hago un setFormData (Utilizo [nombre] en lugar de sin [] para que busque la clave en el objeto)
    setFormData({ ...formData, [nombre]: e.target.value.trim() }) // [...formData] es lo mismo que (prevData) => prevData = nombre
  }

  // Hago una peticion a la api con los datos del formulario para verificar si el usuario existe en la base de datos
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Aqui hacemos un login
      await loginUser(formData);
      // redirigir a la pagina de productos si hay exito
      navigate("dashboard");

    } catch (error) {
      console.log("Error al iniciar sesión", error);
    }
  }



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
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
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
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
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
  );
}

export default LoginPage