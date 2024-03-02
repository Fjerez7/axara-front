import {useMutation} from "@tanstack/react-query";
import axios from "axios";

export const uploadProduct = () => {
    return useMutation({
        mutationFn: (data: FormData) => {
            return axios.post("http://localhost:8080/api/v1/products", data, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            } )
        },
    })
}

export const getAllProducts = async () => {
    const {data} = await axios.get('http://localhost:8080/api/v1/products')
    return data
}

export const deleteProduct = () => {
    return useMutation({
        mutationFn: (id:number) => {
            return axios.delete(`http://localhost:8080/api/v1/products/${id}`)
        },
        onSuccess:() => {}
    })
}