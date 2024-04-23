import {createContext, FC, ReactNode, useState} from "react";
import {Cart, CartContextType} from "../types/Cart.ts";


export const CartContext = createContext<CartContextType>({
    cartData: null,
    updateCart: () => {}
})

export const CartProvider:FC<{children:ReactNode}> = ({children}) => {
    const [cartData, setCartData] = useState<Cart | null>(null)
    const updateCart = (newCart:Cart | null) => {
        setCartData(newCart)
    }
    return (
        <CartContext.Provider value={{cartData, updateCart}}>
            {children}
        </CartContext.Provider>
    )
}