

import { Rating } from "@mui/material"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { useImmer } from "use-immer"
import { CartContext } from "../../App"


export default function MainCard({items:{id,category,image,title,price}}){
    
    const navigate= useNavigate()
    return(
        <>
        <div onClick={()=> navigate(`/product/${id}`)} id={`item${id}`} className="flex flex-col gap-2 justify-between items-center w-52 hover:shadow-[0_0_0_2px_#D10024] py-2 px-4 shadow-[0_0_0_1px_#E4E7ED] h-[450px] text-center cursor-pointer duration-100  ">
            <img className="object-contain w-full h-[260px]" src={image} alt="" />
            <div className="">{category}</div>
            <div className="break-words">{title}</div>
            <div>{price}$</div>
        </div>
        </>
    )
}
export function SingleCard({data:{id,category,image,title,price,rating,description}}){
    const {setCart,cart}= useContext(CartContext)
    
    function addToCart(input){
        setCart(draft=>{
            draft.push({id:input,amount:0})
            
        })

    }
    function removeFromCart(input){
        setCart(draft=>{
            draft.splice(draft.findIndex(item=>item.id===input),1)
        })
    }
    

    return(
        
        <>
            <div className="flex flex-col sm:flex-row sm:justify-start sm:items-start gap-4 justify-between items-center max-w-container mx-auto w-[90%]">
                <img className=" object-contain rounded-2xl aspect-square h-96 shadow-[0_5px_20px_0_rgba(0,0,0,0.1)] animate-pulse [animation-iteration-count:1]" src={image}  alt="" />
                <div className="flex flex-col gap-3 justify-between items-center sm:items-start">
                    <div className=" text-4xl max-sm:text-center">{title}</div>
                    <div id="rating" className="flex gap-2.5 justify-between items-center">
                        <Rating name="half-rating-read" defaultValue={rating.rate} precision={0.5} readOnly />
                        <span>'{rating.count}'</span>
                    </div>
                    <span className="text-3xl sm:text-center sm:w-32 ">${price}</span>
                    {
                        cart.some(item=>item.id===id) ?<button onClick={()=>removeFromCart(id)} className="bg-black animate-pulse [animation-iteration-count:1] px-2 py-1.5 w-full capitalize text-white rounded-3xl cursor-pointer hover:bg-global-red duration-200">remove to cart</button>:<button onClick={()=>addToCart(id)} className="bg-global-red animate-pulse [animation-iteration-count:1] px-2 py-1.5 w-full capitalize text-white rounded-3xl cursor-pointer hover:bg-black duration-200">add to cart</button>
                    }
                    
                    <div  className="flex flex-col gap-2 max-sm:text-center" id="desc">
                        <h1 className="text-3xl border-b w-[250px] mx-auto py-2.5 sm:w-full">Description</h1>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export function SingleCardSkeleton(){
    
     return(
        
        <>
            <div className="flex flex-col sm:flex-row sm:justify-start sm:items-start gap-4 justify-between items-center max-w-container mx-auto w-[90%] animate-pulse">
                <img className=" object-contain rounded-2xl bg-gray-200  aspect-square h-96 "   alt="" />
                <div className="flex flex-col  gap-3 justify-between items-center sm:items-start">
                    <div className=" text-4xl bg-gray-400 max-sm:text-center w-16 h-6"></div>
                    <div id="rating" className="flex  gap-2.5 justify-between items-center">
                        <div className="w-28 h-6 bg-gray-200 rounded-3xl"></div>
                        <span className="w-10 h-6 bg-gray-200 rounded-3xl"> </span>
                    </div>
                    <span className="text-3x bg-gray-400l sm:text-center sm:w-32 animate-bounce [animation-iteration-count:2] h-6"></span>
                    <button className=" bg-gray-400 animate-pulse [animation-iteration-count:1] px-2 py-1.5 w-full capitalize text-white rounded-3xl cursor-pointer hover:bg-black duration-200 h-6"></button>
                    <div className="flex flex-col  gap-2 max-sm:text-center mt-24" id="desc">
                        <h1 className="text-3xl bg-gray-200 rounded-3xl border-b w-[250px] mx-auto py-2.5 sm:w-full h-6"></h1>
                        <p className="h-20 w-full bg-gray-200 rounded-3xl sm:w-[600px]"></p>
                    </div>
                </div>
            </div>
        </>
    )
}