import {
    useMutation
} from "@tanstack/react-query";
import {
    allProductsFetch
} from "../API/api-config";

export default function useLogin() {
    async function mutationFn({
        username,
        password
    }) {
        const post = await allProductsFetch.post("auth/login", {
            username,
            password
        })
        return post
    }

    return useMutation({
        mutationFn
    })
}