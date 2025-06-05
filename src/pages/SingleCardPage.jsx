import { useEffect } from "react"
import { useImmer } from "use-immer"
import { SingleCard } from "../assets/components/Cards"
import { useParams } from "react-router-dom"

export default function SingleCardPage(){
    const {id} = useParams()
    const [singleData,setSingleData] = useImmer(null)
    const [isLoading,setIsLoading]= useImmer(true)
    useEffect(()=>{fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json())
    .then(json=> {
        setIsLoading(false)
        setSingleData(json)})
        }
    ,[id])
    console.log("useParame",id)

    return(
        <>
            <div className="max-w-container mx-auto">
                {
                    isLoading? <h1>loading.....</h1> : <SingleCard data={singleData} />
                }
                
            </div>
        </>
    )
}