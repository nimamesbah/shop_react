
import { useImmer } from 'use-immer'
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import AllFetch from './assets/components/all-products-fetch';

import './App.css'
import HomePage from './pages/homePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import SingleCardPage from './pages/SingleCardPage';
import { useContext, useEffect } from 'react';

function App() {
    
    
    
  
  return (
    <>
    <BrowserRouter>
      
       <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/product/:id'  element={<SingleCardPage />}/>
        </Routes>
       </Layout>
      
    </BrowserRouter>
    </>
  )
}

export default App
