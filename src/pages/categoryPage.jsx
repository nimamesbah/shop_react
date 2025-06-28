import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useImmer } from "use-immer"
import MainCard from "../assets/components/Cards"
import { CircularProgress } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { allProductsFetch } from "../API/api-config"

export default function CategoryPage(){
    const {category} = useParams()
    const {data,isLoading,isError}= useQuery({
        queryFn:async ()=> await allProductsFetch(`products/category/${category}`),
        retry:2, 
        queryKey:[`category-${category}`]
    })
    
    

    return(
        <>
            <h1 className="text-center text-2xl mt-4">{category}</h1>
            <div className="flex flex-wrap justify-center items-center gap-6 w-full mt-3 h-max">
                            {
                               isLoading? <CircularProgress size="200px" /> : isError? <h1 className="text-4xl mt-2.5 mb-70 text-center">cannot fetch data!!</h1> : data.map((product)=><MainCard items={product} />)
                            }
            </div>
        </>
    )
}