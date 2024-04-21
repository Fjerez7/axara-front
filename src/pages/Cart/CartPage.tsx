import {Layout} from "../../components/Layout/Layout.tsx";
import styles from './CartPage.module.css'
import {CartWithoutItems} from "../../components/CartWithoutItems/CarWithoutItems.tsx";
import {OrderItem} from "../../components/OrderItem/OrderItem.tsx";
import {Button} from "primereact/button";
import {useCartContext} from "../../hooks/useCartContext.ts";
import {useQuery} from "@tanstack/react-query";
import {getCart} from "../../queries/CartQ.ts";
import {OrderItem as OrderItemType} from "../../types/Cart.ts";
import {formatCurrency} from "../../utils/formatCurrency.ts";


const CartPage = () => {
    const {cartData} = useCartContext()

    const {data} = useQuery({
        queryKey: ['cart', cartData?.id],
        queryFn: () => getCart(cartData?.id!),
        enabled: cartData?.id !== undefined
    })

    return(
        <Layout>
            {data?.orderItems && data.orderItems.length > 0 ? (
                <div className={styles.cartDetails}>
                    <div className={styles.orderItemsBox}>
                        <h2 className={styles.titleCart}>Your Cart</h2>
                        {data?.orderItems.map((item:OrderItemType, index:number) => (
                            <OrderItem item={item} key={index} />
                        ))}
                    </div>
                    <div className={styles.checkoutBox}>
                        <div className={styles.totalBox}>
                            <h3>Total:</h3>
                            <h3>{formatCurrency(data.totalAmount)}</h3>
                        </div>
                        <Button label={'Checkout'} className={styles.checkoutBtn}/>
                    </div>
                </div>
            ): (
                <CartWithoutItems/>
            )}
        </Layout>
    )
}

export default CartPage;