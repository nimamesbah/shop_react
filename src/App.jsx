
import { useImmer } from 'use-immer'
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import AllFetch from './assets/components/all-products-fetch';

import './App.css'
import HomePage from './pages/homePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import SingleCardPage from './pages/SingleCardPage';
import { createContext, useContext, useEffect } from 'react';
import useCart from './hooks/useCart';
import CartPage from './pages/CartPage';
import CategoryPage from './pages/categoryPage';
import NotFoundPage from './pages/notFoundPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SearchedPage from './pages/SearchedPage';

export const CartContext = createContext()
const queryClient = new QueryClient()
function App() {
    const [cart,setCart] = useCart()
    
    
  
  return (
    <>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <CartContext.Provider value={{cart,setCart}}>
       <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/product/:id'  element={<SingleCardPage />}/>
          <Route path='/cart' element={<CartPage />} />
          <Route path='/products/category/:category' element={<CategoryPage />} />
          <Route path='/404' element={<NotFoundPage />} />
          <Route path='/searched/:items' element={<SearchedPage />} />
        </Routes>
       </Layout>
      </CartContext.Provider>
    </QueryClientProvider>
    </BrowserRouter>
    </>
  )
}

export default App
