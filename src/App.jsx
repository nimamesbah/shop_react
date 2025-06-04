
import { useImmer } from 'use-immer'
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import AllFetch from './assets/components/all-products-fetch';

import './App.css'
import HomePage from './pages/homePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    
  
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<HomePage />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
