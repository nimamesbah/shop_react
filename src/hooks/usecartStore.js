import {
    create
} from "zustand";
import {
    immer
} from "zustand/middleware/immer";

export const useCartStore = create(immer((set) => ({
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    addToCart: (id, price, event) => {
        event.stopPropagation()


        set(state => {
            const foundIndex = state.cart.findIndex(item => item.id === id)
            if (foundIndex !== -1) {
                state.cart[foundIndex].amount += 1
                state.cart[foundIndex].price = price * state.cart[foundIndex].amount
                localStorage.setItem("cart", JSON.stringify(state.cart))
            } else {
                state.cart.push({
                    id,
                    amount: 1,
                    price
                })
                localStorage.setItem("cart", JSON.stringify(state.cart))
            }



        })



    },
    removeFromCart: (id, event, price) => {
        event.stopPropagation()
        set(state => {
            const foundIndex = state.cart.findIndex(item => item.id === id)
            state.cart[foundIndex].amount -= 1
            state.cart[foundIndex].price = price * state.cart[foundIndex].amount
            if (state.cart[foundIndex].amount === 0) {
                state.cart.splice(foundIndex, 1)
            }
            localStorage.setItem("cart", JSON.stringify(state.cart))


        })

    }
})))