import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import {DeleteImageReq, Product} from "../types/Products.ts";

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

export const getProduct = async (id:number) => {
    const {data} = await axios.get(`http://localhost:8080/api/v1/products/${id}`)
    return data
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

export const deleteImage = () => {
    return useMutation({
        mutationFn: (data: DeleteImageReq) => {
            return axios.delete(`http://localhost:8080/api/v1/products/images/${data.productId}/${data.imageUid}`)
        },
        onSuccess:() => {}
    })
}

export const updateProduct = () => {
    return useMutation({
        mutationFn: (data:Product) => {
            return axios.put(`http://localhost:8080/api/v1/products/${data.id}`, data )
        },
    })
}

export const updateImages = () => {
    return useMutation({
        mutationFn: (data:FormData) => {
            return axios.put(`http://localhost:8080/api/v1/products/images/${data.get('id')}`, data, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
        },
    })
}