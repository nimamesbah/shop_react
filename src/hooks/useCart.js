import {
    useEffect
} from "react";
import {
    useImmer
} from "use-immer";

export default function useCart() {
    const [cart, setCart] = useImmer(JSON.parse(localStorage.getItem("cart")) || [])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    return [cart, setCart]
}