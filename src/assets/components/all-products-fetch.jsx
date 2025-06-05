import { useEffect } from "react";
import MainCard from "./Cards";

export default function AllFetch({fetchFunc,products}){
    useEffect(()=> fetchFunc(),[])



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
