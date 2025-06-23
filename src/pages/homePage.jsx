import { useImmer } from 'use-immer'
import Typography from '@mui/material/Typography';
import { Button, CircularProgress } from '@mui/material';
import AllFetch from '../assets/components/all-products-fetch';
import { useNavigate } from 'react-router-dom';
import Header from '../assets/components/Header';
import { useCallback, useEffect } from 'react';
import axios from 'axios';
// question section: cartPage, quantity is one amount behind.,why logo gone,cartCards data as {}



function HomePage() {
    const [allProducts,setAllProducts]=useImmer([])
    const [categories,setCategories]= useImmer([])
    const [isLoading,setIsLoading]=useImmer(true)
    const navigate =useNavigate()
    // const allProductsFetch = useCallback(()=>{
    //   axios.get("https://fakestoreapi.com/products")
    //     .then(res=>console.log("fetch: ",(res)))
        
    // },[])
     const categoriesFetch = useCallback(()=>{
      fetch('https://fakestoreapi.com/products/categories')
      .then(response => response.json())
      .then(data => {setCategories(data); setIsLoading(false)} )
    },[])
    useEffect(()=> categoriesFetch(),[])
    
  
  return (
    <>
    
    <h1 className='text-4xl text-center mt-2.5'>all products</h1>
    <div id="products" className='w-[90%] max-w-container flex justify-center mx-auto h-max mt-2.5 relative'>
      { isLoading ? <CircularProgress size="200px" /> : <AllFetch setProducts={setAllProducts} products={allProducts}/>}
    </div>
      
    </>
  )
}

export default HomePage
