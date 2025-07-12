

import { Button, filledInputClasses, Rating, TextField } from "@mui/material"

import { useContext, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { useImmer } from "use-immer"
import { CartContext } from "../../App"
import useGetSingleProducts from "../../hooks/useGetSingleProduct"
import { actionTypes } from "../reducers/cartReducer"
import InputMui from "../themes/inputMui"
import { useCartStore } from "../../hooks/usecartStore"

// why cart.find(item=>item.id===id).amount directly in input value doesnt work
export default function MainCard({items:{id,category,image,title,price}}){
     const {cart,addToCart,removeFromCart}= useCartStore()
     const [inpVal,setInpVal]=useImmer(1)
    const navigate= useNavigate()
    const inpRef=useRef(null)
    
    
    // function removeFromCart(event){
    //     event.stopPropagation()
    //     dispatch({
    //         type:actionTypes.remove,
    //         payload:{id,price:Number(price),ref:inpRef}
    //     })
    // }
    return(
        <>
        <div onClick={()=> navigate(`/product/${id}`)} id={`item${id}`} className="flex flex-col gap-2 justify-between items-center w-52 hover:shadow-[0_0_0_2px_#D10024] py-2 px-4 shadow-[0_0_0_1px_#E4E7ED] h-[500px] text-center cursor-pointer duration-100  ">
            <img className="object-contain w-full h-[260px]" src={image} alt="" />
            <div className="">{category}</div>
            <div className="break-words">{title}</div>
            <div>{price}$</div>
            <div className="flex justify-between items-center gap-2">
            {
                            cart.some(item=>item.id===id) ?<div className="flex justify-between w-full gap-4"><button className=" cursor-pointer hover:bg-black bg-global-red text-white px-2 rounded-full" onClick={(event)=>addToCart(id,price,event)}>+</button><input ref={inpRef} onClick={(event)=>{event.stopPropagation()}} value={cart.find(item=>item.id===id).amount||1} className="border border-global-red w-16 rounded-2xl px-2 py-1" type="number" /><button  className=" cursor-pointer hover:bg-black bg-global-red text-white px-2 rounded-full" onClick={(event)=>removeFromCart(id,event,price)}>-</button></div>:<button onClick={(event)=>addToCart(id,price,event)} className="bg-global-red text-sm animate-pulse [animation-iteration-count:1] px-2 py-1.5 w-full capitalize text-white rounded-3xl cursor-pointer hover:bg-black duration-200">add to cart</button>
                        }
                        
            </div>
        </div>
        </>
    )
}
export function SingleCard({data:{id,category,image,title,price,rating,description}}){
    const {dispatch,cart}= useContext(CartContext)
    const inpRef = useRef(null)
    
    function addToCart(){
        
        
        dispatch(
           
            {
              type:actionTypes.add,
              payload: {id,price:Number(price),ref:inpRef}
            
    })
            
    }
    
    function removeFromCart(){
        dispatch({
            type:actionTypes.remove,
            payload:{id,price:Number(price),ref:inpRef}
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
                            cart.some(item=>item.id===id) ?<div className="flex  w-full gap-4"><button className=" cursor-pointer hover:bg-black bg-global-red text-white px-2 rounded-full" onClick={addToCart}>+</button><input ref={inpRef} onClick={(event)=>{event.stopPropagation()}} value={cart.find(item=>item.id===id).amount||1} className="border border-global-red w-16 rounded-2xl px-2 py-1" type="number" /><button  className=" cursor-pointer hover:bg-black bg-global-red text-white px-2 rounded-full" onClick={(event)=>removeFromCart(event)}>-</button></div>:<button onClick={addToCart} className="bg-global-red text-sm animate-pulse [animation-iteration-count:1] px-2 py-1.5 w-full capitalize text-white rounded-3xl cursor-pointer hover:bg-black duration-200">add to cart</button>                        }
                        
                            
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
export function CartCards({items:{id,amount,price}}){
    const {data,isLoading} = useGetSingleProducts(id)
    const {cart,addToCart,removeFromCart}=useCartStore()
    // const [{price,title,image},setData]=useImmer({})
    // const [inpVal,setInpVal]=useImmer(amount)
    const inpRef = useRef()
    // useEffect(()=>{setData(data)},[])

//     useEffect(()=>{fetch(`https://fakestoreapi.com/products/${id}`)
//   .then(response => response.json())
//   .then(data => setData(data))},[])
    
     
    
   

    return(
        <>{
            isLoading?
             <div className="">loading...</div>
            :
            <div className="flex gap-2.5 flex-col w-full items-center shadow-2xl overflow-hidden rounded-2xl px-2.5 py-2">
                <img className=" aspect-square object-contain h-96 border-b" src={data.image} alt="" />
                <h1 className="text-center">{data.title}</h1>
                <span className="text-xl mr-2">price:<span className="text-global-red text-2xl">${data.price}</span></span>
                <div className=""><span className="text-xl mr-2">quantity:</span>
                    {
                            cart.some(item=>item.id===id) ?<div className="flex  w-full gap-4"><button className=" cursor-pointer hover:bg-black bg-global-red text-white px-2 rounded-full" onClick={(event)=>addToCart(id, data.price, event)}>+</button><input ref={inpRef} onClick={(event)=>{event.stopPropagation()}} value={cart.find(item=>item.id===id).amount||1} className="border border-global-red w-16 rounded-2xl px-2 py-1" type="number" /><button  className=" cursor-pointer hover:bg-black bg-global-red text-white px-2 rounded-full" onClick={(event)=>removeFromCart(id,event,data.price)}>-</button></div>:<button onClick={(event)=>addToCart(id, data.price, event)} className="bg-global-red text-sm animate-pulse [animation-iteration-count:1] px-2 py-1.5 w-full capitalize text-white rounded-3xl cursor-pointer hover:bg-black duration-200">add to cart</button>                                            
                    }
                </div>



            </div>
            }
        </>
    )
}
export function FilterCard({items:{image,price,title,id},setFiltered,input}){
    const navigate = useNavigate()
    
    
    return(
        <>
            <div onClick={()=>{navigate(`/product/${id}`);setFiltered([]);input.current.value=""}} className="flex py-1 px-2 cursor-pointer hover:text-global-red hover:scale-[1.1] bg-white hover:rounded-2xl border-b border-black gap-2.5 h-14 items-center w-full">
                            <img className="h-full aspect-square " src={image} alt="" />
                            <h1 className="text-center text-sm w-[200px] overflow-hidden">{title}</h1>
                            <p className="text-end grow-[10] text-red-400">${price}</p>
            </div >
        </>
    )
}