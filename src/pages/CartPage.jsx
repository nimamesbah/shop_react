import { useContext } from "react"
import { CartContext } from "../App"
import { CartCards } from "../assets/components/Cards"

export default function CartPage(){
    const {cart,setCart} = useContext(CartContext)
    console.log("cart",cart)
    return(
        <>
          <div className="w-[90%] flex flex-col sm:flex-row max-w-container mx-auto mt-3">
            <div className="flex flex-col gap-3 ">
                {
                    cart.map(item=> <CartCards items={item} />)
                }
            </div>
           </div> 
        </>
    )
}