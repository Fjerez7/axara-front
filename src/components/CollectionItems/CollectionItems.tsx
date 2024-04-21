import {FC} from "react";
import {CollectionItem} from "../CollectionItem/CollectionItem.tsx"
import styles from './CollectionItems.module.css'
import {useQuery} from "@tanstack/react-query";
import {getAllProducts} from "../../queries/Products.ts";
import {Product} from "../../types/Products.ts";
import {NavLink} from "react-router-dom";

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
                {data?.map((product:Product,index:number) => {
                    const imgUid = product.images[0].uid;
                    return (
                        <NavLink key={index} to={`/collections/${product.id}`}>
                         <CollectionItem key={index} image={imgUid} name={product.name} price={product.price}/>
                        </NavLink>
                    )
                })}
            </div>
        </div>
    )
}