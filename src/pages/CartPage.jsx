import { useContext, useEffect } from "react"
import { CartContext } from "../App"
import { CartCards } from "../assets/components/Cards"
import { useImmer } from "use-immer"
import { useNavigate } from "react-router-dom"

export default function CartPage(){
    const {cart,setCart} = useContext(CartContext)
    const [prices,setPrices] = useImmer(cart.map((item=>item=item.price)))
    const navigate= useNavigate()
    

    
    return(
        <>
          <div className="w-[90%] flex flex-col sm:flex-row max-w-container mx-auto mt-3 gap-4 items-end">
            <div className="flex flex-col gap-16 ">
                {
                    cart.map(item=> <CartCards items={item} />)
                }
            </div>
            <div className="sticky bottom-0 left-0 w-full flex sm:flex-col mt-3.5 gap-3 items-center justify-center h-max py-2 px-2 rounded-2xl bg-[#1E1F29] text-white">
                <span className="">orders:  <span className="text-global-red text-xl">{cart.length}</span></span>
                <span className="">Fee: <span className="text-xl text-global-red">${prices.reduce((total,current)=>total+Number(current))}</span></span>
                <button onClick={()=>navigate("/")} className="cursor-pointer border-b rounded-2xl border-global-red px-2 py-1 text-center">shop</button>
                <button className="w-max  cursor-pointer rounded-2xl border-b border-global-red py-1 px-2">Buy Now</button>
            </div>
           </div> 
        </>
    )
}