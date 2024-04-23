import {Sidebar} from "primereact/sidebar";
import {Dispatch, FC, useEffect} from "react";
import {useAuth} from "../../hooks/useAuth.ts";
import {getCart, removeOrderItem} from "../../queries/CartQ.ts";
import {useQuery} from "@tanstack/react-query";
import {OrderItem as OrderIType} from "../../types/Cart.ts";
import {OrderItem} from "../OrderItem/OrderItem.tsx";
import {Button} from "primereact/button";
import {useNavigate} from "react-router-dom";
import {useCartContext} from "../../hooks/useCartContext.ts";
import {formatCurrency} from "../../utils/formatCurrency.ts";

interface CartSideBarProps {
    visible: boolean;
    onHide: Dispatch<boolean>;
}

export const CartSideBar:FC<CartSideBarProps> = ({visible,onHide}) => {
    const {user} = useAuth();
    const {updateCart} = useCartContext()
    const navigate = useNavigate();
    const cartId = parseInt(localStorage.getItem(`cartUser_${user?.id}_cartId`)!)
    const deleteOrderItem = removeOrderItem()
    const {data,isLoading,error,refetch} = useQuery({
        queryKey: ['cart', cartId],
        queryFn: () => getCart(cartId),
        enabled: cartId !== undefined
    })

    useEffect(() => {
        if(!isLoading && !error && data){
            updateCart(data)
        }
    }, [isLoading,error,data]);

    const handleRemoveItem = (item:OrderIType) => {
        try {
            deleteOrderItem.mutate(item.id,{onSuccess: () => {
                    refetch()
            }})

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Sidebar position={'right'} visible={visible} onHide={() => onHide(false)} style={{width: '550px'}} >
            <h2>Your Cart</h2>
            {data?.orderItems.map((item:OrderIType,index:number) => (
                <OrderItem item={item} key={index} onDelete={() => handleRemoveItem(item)}/>
            ))}
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h3>Total:</h3>
                <h3>{formatCurrency(data?.totalAmount)}</h3>
            </div>
            <Button label={'View Cart'} style={{width: "100%",marginTop: '30px'}}
                    onClick={() => {
                        navigate('/cart')
                    }}/>
        </Sidebar>
    );
}
