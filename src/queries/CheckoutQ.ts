import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import {CheckoutRequest} from "../types/Checkout.ts";
import {Cart} from "../types/Cart.ts";


export const createCheckout = () => {
    return useMutation({
        mutationFn: ({cartId, address}:CheckoutRequest) => {
            return axios.post(`http://localhost:8080/api/v1/checkout/${cartId}`, address)
        },
    })
}

export const finalizeCheckout = () => {
    return useMutation({
        mutationFn: (cart:Cart) => {
            return axios.post(`http://localhost:8080/api/v1/checkout/complete`, cart )
        },
    })
}

