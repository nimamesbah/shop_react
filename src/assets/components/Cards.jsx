

import { filledInputClasses, Rating } from "@mui/material"

import { useContext, useEffect, useRef } from "react"
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
    const [inpVal,setInpVal]=useImmer(0)
    const inpRef = useRef(null)
    
    function addToCart(input){
        setCart(draft=>{
            draft.push({id:input,amount:inpVal})
            
        })
        setInpVal(0)
        

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
                    <div className="flex flex-col sm:flex-row gap-2 w-full items-center">
                        {
                            cart.some(item=>item.id===id) ?<button onClick={()=>removeFromCart(id)} className="bg-black animate-pulse [animation-iteration-count:1] px-2 py-1.5 w-full capitalize text-white rounded-3xl cursor-pointer hover:bg-global-red duration-200">remove to cart</button>:<button onClick={()=>addToCart(id)} className="bg-global-red animate-pulse [animation-iteration-count:1] px-2 py-1.5 w-full capitalize text-white rounded-3xl cursor-pointer hover:bg-black duration-200">add to cart</button>
                        }
                        {
                            !cart.some(item=>item.id===id)?<input ref={inpRef} onChange={()=>setInpVal(inpRef.current.value)}  className="w-20 text-2xl bg-blue-400 py-2 px-2.5 rounded-2xl  " value={inpVal} type="number" name="" id="" min={0} step={1}/>:""
                        }
                            
                    </div>
                    
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
                    <div className=" text-4xl bg-gray-400 max-sm:text-center rounded-3xl w-full h-6"></div>
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
export function CartCards({items:{id,amount}}){
    const {setCart}= useContext(CartContext)
    const [{price,title,image},setData]=useImmer({})
    const [inpVal,setInpVal]=useImmer(amount)

    useEffect(()=>{fetch(`https://fakestoreapi.com/products/${id}`)
  .then(response => response.json())
  .then(data => setData(data))},[])

    function inputSetter(event){
        setInpVal(event.target.value)
        setCart(draft=>{
            draft.find(item=>item.id===id).amount=inpVal

        })
    
    }
    function removeFromCart(input){
        setCart(draft=>{
            draft.splice(draft.findIndex(item=>item.id===input),1)
        })
    }

    return(
        <>
            <div className="flex gap-2.5 flex-col w-full items-center">
                <img className=" aspect-square object-contain h-96" src={image} alt="" />
                <h1 className="text-center">{title}</h1>
                <span className="text-xl mr-2">price:<span className="text-global-red text-2xl">${price}</span></span>
                <div className=""><span className="text-xl mr-2">quantity:</span>
                    {
                        <input className="text-center w-20 text-xl bg-blue-400  px-2.5 rounded-2xl  " onChange={inputSetter} type="number" min={0} value={inpVal} />    
                    }
                </div>
                <button onClick={()=>removeFromCart(id)} className="bg-black animate-pulse [animation-iteration-count:1] px-2 py-1.5 w-full capitalize text-white rounded-3xl cursor-pointer hover:bg-global-red duration-200">remove to cart</button>



            </div>
        </>
    )
}