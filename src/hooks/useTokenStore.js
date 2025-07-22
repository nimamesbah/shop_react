import {
    create
} from "zustand";
import {
    immer
} from "zustand/middleware/immer";
import Cookies from "js-cookie"

export const useTokenStore = create(immer((set) => ({
    user: Cookies.get("user") || "",
    token: Cookies.get("token") || "",
    setToken: (data) => {
        set((state) => {
            state.token = data
            console.log("tk", state.token)
        })

    },
    clearToken: () => {
        set((state) => {
            Cookies.remove("token")
            state.token = ""
            Cookies.remove("user")
            state.user = ""
            // window.location.reload()

        })
    },
    setUser: (username) => {
        set(state => {
            state.user = username
        })
    }

})))