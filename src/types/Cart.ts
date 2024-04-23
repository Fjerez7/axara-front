import {Product} from "./Products.ts";

export interface AddItemToOrderItem{
    productId: number;
    cartId: number;
}
export interface OrderItem{
    id: number;
    price: number;
    product: Product;
    quantity: number;
}
export interface Cart{
    id: number;
    userId: number;
    orderItems: OrderItem[];
    totalAmount: number;
}
export interface CartContextType{
    cartData: Cart | null;
    updateCart: (newCart: Cart) => void;
}