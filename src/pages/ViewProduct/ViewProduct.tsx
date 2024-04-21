
import {Galleria} from "primereact/galleria";
import {Divider} from "primereact/divider";
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {getProduct} from "../../queries/Products.ts";
import {ImageProduct, Product} from "../../types/Products.ts";
import styles from './ViewProduct.module.css'
import {useEffect, useState} from "react";
import {Button} from "primereact/button";
import {formatCurrency} from "../../utils/formatCurrency.ts";
import {CartSideBar} from "../../components/CartSideBar/CartSideBar.tsx";
import {addItemToOrderItem, createCart} from "../../queries/CartQ.ts";
import {useAuth} from "../../hooks/useAuth.ts";


export const ViewProduct = () => {
    const {productId} = useParams();
    const productIdNum = parseInt(productId!);
    const urlForUseImg = 'http://localhost:8080/api/v1/products/images/'
    const [images, setImages] = useState<ImageProduct[] | null>(null)
    const [openCart, setOpenCart] = useState(false)
    const {data} = useQuery({queryKey: ['product', productIdNum], queryFn: () => getProduct(productIdNum)}) as {
        data: Product
    }
    const createCartSession = createCart()
    const addItemToOrder = addItemToOrderItem()
    const {user} = useAuth()
    useEffect(() => {
        if (data && data.images) {
            setImages(data.images)
        }
    }, [data]);


    const handleAddToCart = () => {
        if (!user || !user.id) {
            return
        }
        const cartKey = `cartUser_${user.id}_cartId`;
        const searchCartId = localStorage.getItem(cartKey);
        if (!searchCartId) {
            createCartSession.mutate(user.id, {
                onSuccess: (response) => {
                    localStorage.setItem(cartKey, response.data.id.toString())
                    addItemToOrder.mutate({cartId: response.data.id, productId: productIdNum}, {
                        onSuccess: () => {setOpenCart(true)}
                    })
                }
            })
        } else {
            addItemToOrder.mutate({cartId: parseInt(searchCartId), productId: productIdNum}, {
                onSuccess: () => {
                    setOpenCart(true)
                }
            })
        }
    }

    const itemTemplate = (item:ImageProduct) => {
        return <img src={urlForUseImg+item.uid} alt={item.path} className={styles.imgItem}/>;
    }
    const thumbnailTemplate = (item:ImageProduct) => {
        return <img src={urlForUseImg+item.uid} alt={item.path} style={{width:'130px'}} />;
    }

    return (
        <main className={styles.boxMain}>
            <div className={styles.divContainer}>
                <div>
                    <Galleria value={images!} item={itemTemplate} thumbnail={thumbnailTemplate} circular showItemNavigators
                              numVisible={4} showThumbnails={false} showIndicators showItemNavigatorsOnHover
                              pt={{previousItemButton: {style: {color: 'black'}}, nextItemButton: {style: {color: 'black'}},
                    }} />
                </div>
                <div className={styles.divInfoProduct}>
                    <h1>{data?.name}</h1>
                    <h3>{`Size: ${data?.size}`}</h3>
                    <h3>{formatCurrency(data?.price)}</h3>
                    <Button className={styles.btnAddCart} label={'Add to cart'} onClick={handleAddToCart}/>
                    {openCart && <CartSideBar visible={openCart} onHide={setOpenCart}/>}
                    <Divider/>
                    <p>{data?.description}</p>
                </div>
            </div>
        </main>
    )
}