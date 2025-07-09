import {
    useEffect
} from "react"

export const actionTypes = {
    add: "ADD_TO_CART",
    remove: "REMOVE_FROM_CART",
    clearAll: "CLEAR_ALL"
}
// why i should set amount to 0 to add a amount:1???
export default function cartReducer(state, action) {

    switch (action.type) {
        case actionTypes.add:
            const indexAdd = state.findIndex(item => item.id === action.payload.id)
            if (indexAdd !== -1) {
                state[indexAdd].amount += 1
                state[indexAdd].price = action.payload.price * state[indexAdd].amount
                action.payload.ref.current.value = state[indexAdd].amount
                localStorage.setItem("cart", JSON.stringify(state))

                console.log(state)
                return state
            } else {
                // state.push({
                //     id: action.payload.id,
                //     amount: 0,
                //     price: action.payload.price
                // })
                // console.log(state)
                localStorage.setItem("cart", JSON.stringify([...state, {
                    id: action.payload.id,
                    amount: 1,
                    price: action.payload.price
                }]))


                return [...state, {
                    id: action.payload.id,
                    amount: 1,
                    price: action.payload.price
                }]
            };
        case actionTypes.remove: {
            const indexRemove = state.findIndex(item => item.id === action.payload.id)

            state[indexRemove].amount -= 1
            action.payload.ref.current.value = state[indexRemove].amount
            state[indexRemove].price = action.payload.price * state[indexRemove].amount
            localStorage.setItem("cart", JSON.stringify(state))
            console.log("remove", state)
            if (state[indexRemove].amount < 1) {
                localStorage.setItem("cart", JSON.stringify(state.filter(item => item.id != action.payload.id)))
                return state.filter(item => item.id != action.payload.id)

            } else
                return state



        }




        default:
            break;
    }




    return
}