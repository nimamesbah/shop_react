import { useEffect } from "react";
import MainCard from "./Cards";
import { allProductsFetch } from "../../API/api-config";

export default function AllFetch({fetchFunc,products,setProducts}){
    useEffect(()=> {
        async function get(){
            const get = await allProductsFetch.get("products")
            setProducts(get)

        }
        get()

    } ,[])



    return(
        <>
            <div className="flex flex-wrap justify-center items-center gap-6 w-full h-max">
                {
                    products.map((product)=>{
                        return (
                            <>
                                <MainCard items={product} />
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
