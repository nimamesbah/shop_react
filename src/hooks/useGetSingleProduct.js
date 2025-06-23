import { useQuery } from "@tanstack/react-query"
import { allProductsFetch } from "../API/api-config"


export default function useGetSingleProducts(id){
    async function queryFn() {
        return await allProductsFetch.get(`products/${id}`)
        
    }


    return useQuery({queryFn,queryKey:[`products-${id}`]})
}