import {FC} from "react";
import {OrderItem as OrderItemFromCart} from "../../types/Cart.ts";
import {Button} from "primereact/button";
import styles from './OrderItem.module.css';
import {formatCurrency} from "../../utils/formatCurrency.ts";
import {Divider} from "primereact/divider";

interface OrderItemProps {
    item: OrderItemFromCart;
    onDelete: any;
}

export const OrderItem:FC<OrderItemProps> = ({item,onDelete}) => {
    const imageUuid = item.product.images[0].uid;

    return (
        <>
            <div className={styles.orderItem}>
                <div className={styles.sectionImg}>
                    <img src={`http://localhost:8080/api/v1/products/images/${imageUuid}`} alt={item.product.name}
                         className={styles.boxImg}/>
                </div>
                <div className={styles.productInfo}>
                    <div>
                        <span className={styles.firstSection}>
                            <h3>{item.product.name}</h3>
                            <Button icon={'pi pi-times'} rounded text onClick={onDelete}/>
                        </span>
                        <p className={styles.sizeP}>{`Size: ${item.product.size}`}</p>
                    </div>
                    <div className={styles.secondSection}>
                        <p>{`Quantity: ${item.quantity}`}</p>
                        <p>{formatCurrency(item.product.price)}</p>
                    </div>
                </div>
            </div>
            <Divider/>
        </>
    );
}