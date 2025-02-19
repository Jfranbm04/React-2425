import React from 'react'
import ProductList from './components/ProductList'
import { ProductsProvider } from './context/ProductsContext'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { AuthProvider } from './context/AuthContext'

const App = () => {
    return (
        <AuthProvider>
            <ProductsProvider>
                <RouterProvider router={router} />
            </ProductsProvider>
        </AuthProvider>

    )
}

export default App