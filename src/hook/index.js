import * as api from "../api"
import { useQuery, useMutation } from "react-query"



const useAllProducts = () => {
    return useQuery("products", api.getAllProducts)
}
const useSignIn = () => {
    const mutation = useMutation(api.signUP)
    return mutation
}
const useLogin = (value) => {
    const mutation = useMutation(api.login)
    return mutation
}

export {
    useAllProducts,
    useSignIn,
    useLogin
}