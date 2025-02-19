import React from 'react'
import { router } from './router'
import { RouterProvider } from 'react-router-dom'

const App = () => {
  return (
    <favoritesProvider>
      <RouterProvider router={router} />
    </favoritesProvider>
  )
}

export default App