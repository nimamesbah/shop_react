import {
    useQuery
} from "@tanstack/react-query"
import {
    allProductsFetch
} from "../API/api-config"

export default function useGetAllProducts() {
    async function queryFn() {
        return await allProductsFetch("products")

    }
    return useQuery({
        queryFn,
        queryKey: ["products"],
        retry: 2
    })
}