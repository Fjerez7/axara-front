
export interface AddressType {
    id: number;
    address: string;
    city: string;
    departament: string;
    postalCode: string;
    phone: string;
}

export interface CheckoutRequest{
    cartId: number;
    address: AddressType;
}