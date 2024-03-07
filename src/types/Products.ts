export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    size: string;
    stock: number;
    category: string;
    images: ImageProduct[]
}
export interface ImageProduct {
    uid: string;
    path: string
}

export interface DeleteImageReq{
    productId: number;
    imageUid: string;
}