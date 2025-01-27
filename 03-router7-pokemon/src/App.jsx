import { RouterProvider } from "react-router-dom"
import { router } from "./routes/router"
import { PokemonProvider } from "./context/PokemonContext"

const App = () => {
  // Cuando usemos REACT ROUTER DOM App solo debería tener el ROUTER PROVIDER
  // Y el resto de cosas deberían de estar en RootLayout
  return (
    <PokemonProvider >
      <RouterProvider router={router} />
    </PokemonProvider>
    // <div className="text-4xl text-blue-900">App 🥸</div>
  )
}

export default App