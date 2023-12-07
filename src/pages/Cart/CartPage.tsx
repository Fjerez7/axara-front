import {Layout} from "../../components/Layout/Layout.tsx";
import {Link} from "react-router-dom";
import {Button} from "primereact/button";
import styles from './CartPage.module.css'


const CartPage = () => {
    return(
        <Layout>
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
        </Layout>
    )
}

export default CartPage;