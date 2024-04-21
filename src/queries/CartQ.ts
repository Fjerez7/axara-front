import axios from "axios";
import {useMutation} from "@tanstack/react-query";
import {AddItemToOrderItem} from "../types/Cart.ts";

export const createCart = () => {
    return useMutation({
        mutationFn: (userId:number) => {
            return axios.post(`http://localhost:8080/api/v1/cart?userId=${userId}`)
        },
    })
}
export const addItemToOrderItem =  () => {
    return useMutation({
        mutationFn: ({cartId, productId}:AddItemToOrderItem) => {
            return axios.post(`http://localhost:8080/api/v1/order-items/${cartId}/items/${productId}`)
        }
    })
}

export const getCart = async (id:number) => {
    const {data} = await axios.get(`http://localhost:8080/api/v1/cart/${id}`)
    return data
}

export const removeOrderItem = () => {
    return useMutation({
        mutationFn: (id:number) => {
            return axios.delete(`http://localhost:8080/api/v1/order-items/${id}`)
        }
    })
}