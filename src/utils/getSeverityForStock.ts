import {Product} from "../types/Products.ts";

export const getSeverityForStock = (product:Product) => {
    const stock = product.stock
    if (stock == 0){
        return 'danger';
    } else if (stock > 5){
        return 'success'
    }else{
        return 'warning'
    }
}

export const getStatusNameStock = (product:Product) => {
    const stock = product.stock
    if (stock == 0){
        return 'OUT OF STOCK'
    } else if (stock > 5){
        return 'IN STOCK'
    }else {
        return 'LOW STOCK'
    }
}