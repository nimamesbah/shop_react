import { useEffect } from "react";

export default function AllFetch({fetchFunc,products}){
    useEffect(()=> fetchFunc(),[])



    return(
        <>
            <div className="flex flex-wrap justify-center items-center gap-6 w-full h-max">
                {
                    products.map((product)=>{
                        return (
                            <>
                                <div id={product.id} className="flex flex-col gap-2 justify-between items-center w-52 hover:shadow-[0_0_0_2px_#D10024] py-2 px-4 shadow-[0_0_0_1px_#E4E7ED] h-[450px] text-center cursor-pointer duration-100  ">
                                    <img className="object-contain w-full h-[260px]" src={product.image} alt="" />
                                    <div className="">{product.category}</div>
                                    <div className="break-words">{product.title}</div>
                                    <div>{product.price}$</div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
