
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

export const CartContext = createContext()
function App() {
    const [cart,setCart] = useCart()
    
    
  
  return (
    <>
    <BrowserRouter>
      <CartContext.Provider value={{cart,setCart}}>
       <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/product/:id'  element={<SingleCardPage />}/>
          <Route path='/cart' element={<CartPage />} />
        </Routes>
       </Layout>
      </CartContext.Provider>
    </BrowserRouter>
    </>
  )
}

export default App
