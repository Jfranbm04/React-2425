import React from 'react'
import { router } from './router'
import { RouterProvider } from 'react-router-dom'
import { FavoritesProvider } from './contexts/FavoritesContext'
import { ReviewProvider } from './contexts/ReviewContext'
import { ToastProvider } from './contexts/ToastContext'

const App = () => {
  return (
    <ToastProvider>
      <ReviewProvider>
        <FavoritesProvider>
          <RouterProvider router={router} />
        </FavoritesProvider>
      </ReviewProvider>
    </ToastProvider>
  )
}

export default App