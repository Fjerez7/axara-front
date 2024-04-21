import {CartContextType} from "../types/Cart.ts";
import {useContext} from "react";
import {CartContext} from "../context/CartProvider.tsx";

export const useCartContext = (): CartContextType => useContext(CartContext)