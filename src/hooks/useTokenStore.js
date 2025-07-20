import {
    create
} from "zustand";
import {
    immer
} from "zustand/middleware/immer";
import Cookies from "js-cookie"

export const useTokenStore = create(immer((set) => ({
    token: Cookies.get("token") || "",
    setToken: (data) => {
        set((state) => {
            state.token = data
            console.log("tk", state.token)
        })

    },
    clearToken: () => {},

})))