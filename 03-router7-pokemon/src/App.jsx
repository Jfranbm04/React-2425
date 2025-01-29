import { RouterProvider } from "react-router-dom"
import { router } from "./routes/router"
import { PokemonProvider } from "./context/PokemonContext"
import { Toaster } from "sonner"

const App = () => {
  // Cuando usemos REACT ROUTER DOM App solo debería tener el ROUTER PROVIDER
  // Y el resto de cosas deberían de estar en RootLayout
  return (
    <PokemonProvider >
      <Toaster position="top-right" richColors duration="2000" />         {/* Aqui va el sonner para que se pueda mostrar */}
      <RouterProvider router={router} />
    </PokemonProvider>
    // <div className="text-4xl text-blue-900">App 🥸</div>
  )
}

export default App