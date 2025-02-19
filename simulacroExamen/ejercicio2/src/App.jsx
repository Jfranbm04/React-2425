import React from 'react'
import ProductList from './components/ProductList'
import { productsProvider } from './context/ProductsContext'

const App = () => {
    return (
        <productsProvider>
            <ProductList />
        </productsProvider>
    )
}

export default App