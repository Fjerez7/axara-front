import {FC} from "react";
import {CollectionItem} from "../CollectionItem/CollectionItem.tsx";
import Shirt from '../../assets/shirt.jpg'
import Hoodie from '../../assets/hoodie.jpg'
import styles from './CollectionItems.module.css'

interface CollectionItemsProps {
    name: string
}

export const CollectionItems:FC<CollectionItemsProps> = ({name}) => {
    return (
        <div>
            <h1 className={styles.title}>{name}</h1>
            <div className={styles.layoutItems}>
            <CollectionItem image={Hoodie} name={'PEARL GIRL-Oversized Hoodie'} price={'100.000'}/>
            <CollectionItem image={Shirt} name={'PEARL GIRL-Oversized Shirt'} price={'100.000'}/>
            <CollectionItem image={Shirt} name={'PEARL GIRL-Oversized Shirt'} price={'100.000'}/>
            <CollectionItem image={Shirt} name={'PEARL GIRL-Oversized Shirt'} price={'100.000'}/>
            </div>
        </div>
    )
}