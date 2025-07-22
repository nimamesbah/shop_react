import {
    useQuery
} from "@tanstack/react-query";
import {
    allProductsFetch
} from "../API/api-config";

export default function useGetUser(username) {
    async function queryFn() {
        const users = await allProductsFetch.get("users")
        return users.find(user => user.username === username)


    }
    return useQuery({
        queryFn,
        queryKey: [`user-${username}`]
    })
}