import axios from "axios";


export const allProductsFetch = axios.create({
    baseURL:"https://fakestoreapi.com/",
})

allProductsFetch.interceptors.response.use(request=>{
    
    
    return request.data
})