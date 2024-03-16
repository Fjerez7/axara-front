import {FC} from "react";
import {CollectionItem} from "../CollectionItem/CollectionItem.tsx"
import styles from './CollectionItems.module.css'
import {useQuery} from "@tanstack/react-query";
import {getAllProducts} from "../../queries/Products.ts";
import {Product} from "../../types/Products.ts";

interface CollectionItemsProps {
    name: string
}

export const CollectionItems:FC<CollectionItemsProps> = ({name}) => {
    const {data} = useQuery({
        queryKey: ['products'],
        queryFn: getAllProducts
    })
    return (
        <div>
            <h1 className={styles.title}>{name}</h1>
            <div className={styles.layoutItems}>
                {data?.map((product:Product) => {
                    const imgUid = product.images[0].uid;
                   return <CollectionItem image={imgUid} name={product.name} price={product.price}/>
                })}
            </div>
        </div>
    )
}