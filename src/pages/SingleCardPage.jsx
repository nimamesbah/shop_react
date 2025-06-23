import { useEffect } from "react"
import { useImmer } from "use-immer"
import { SingleCard, SingleCardSkeleton } from "../assets/components/Cards"
import { useParams } from "react-router-dom"
import useGetSingleProducts from "../hooks/useGetSingleProduct"


export default function SingleCardPage(){
    const {id} = useParams()
    // const [singleData,setSingleData] = useImmer(null)
    // const [isLoading,setIsLoading]= useImmer(true)
    const {data, isLoading} = useGetSingleProducts(id)

    // useEffect(()=>{
    // fetch(`https://fakestoreapi.com/products/${id}`)
    //  .then(res=>res.json())
    //  .then(json=> {
    //     setIsLoading(false)
    //     setSingleData(json)})
    //     }
    // ,[id])
    console.log("useParame",id)

    return(
        <>
            <div className="max-w-container mx-auto mt-3 ">
                {
                    isLoading? <SingleCardSkeleton /> : <SingleCard data={data} />
                }
                
            </div>
        </>
    )
}