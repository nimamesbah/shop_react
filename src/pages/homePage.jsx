import { useImmer } from 'use-immer'
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import AllFetch from '../assets/components/all-products-fetch';
import { useNavigate } from 'react-router-dom';
import Header from '../assets/components/Header';



function HomePage() {
    const [allProducts,setAllProducts]=useImmer([])
    function allProductsFetch(){
      fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setAllProducts(data ));
    }
  
  return (
    <>
    
    <h1 className='text-4xl text-center mt-2.5'>all products</h1>
    <div id="products" className='w-[90%] max-w-container mx-auto h-max mt-2.5'>
      <AllFetch fetchFunc={allProductsFetch} products={allProducts}/>
    </div>
      
    </>
  )
}

export default HomePage
