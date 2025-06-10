import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useImmer } from "use-immer"
import MainCard from "../assets/components/Cards"
import { CircularProgress } from "@mui/material"

export default function CategoryPage(){
    const {category} = useParams()
    const [products,setProducts]= useImmer([])
    const [isLoading,setIsLoading]=useImmer(true)
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(response => response.json())
        .then(data => {setProducts(data); setIsLoading(false)});
    },[category])

    return(
        <>
            <h1 className="text-center text-2xl mt-4">{category}</h1>
            <div className="flex flex-wrap justify-center items-center gap-6 w-full mt-3 h-max">
                            {
                               isLoading? <CircularProgress size="200px" /> :products.map((product)=><MainCard items={product} />)
                            }
            </div>
        </>
    )
}