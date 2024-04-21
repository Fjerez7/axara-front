
import styles from "./CartWithoutItems.module.css";
import {Button} from "primereact/button";
import {Link} from "react-router-dom";

export const CartWithoutItems = () => {
    return(
            <div className={styles.cart}>
                <Button icon={'pi pi-cart-plus'} text rounded disabled pt={{
                    root: {className: styles.icon},
                    icon: {style: {fontSize: '125px'}}
                }} />
                <h1 className={styles.title}>You shopping cart is empty</h1>
                <p>Add items to your cart</p>
                <Link to={'/'}>
                    <Button label={'Continue shopping'} className={styles.btn}/>
                </Link>
            </div>
    )
}