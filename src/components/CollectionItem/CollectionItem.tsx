import {FC} from "react";
import {Card} from "primereact/card";
import styles from './CollectionItem.module.css'
import {formatCurrency} from "../../utils/formatCurrency.ts";

interface CollectionItemProps {
    image: string;
    name: string;
    price: number
}

export const CollectionItem:FC<CollectionItemProps> = ({image,name,price}) => {
    const img = (
        <img alt="img of item" src={`http://localhost:8080/api/v1/products/images/${image}`} className={styles.imgCard} />
    );
    return (
        <Card className={styles.card} title={name} subTitle={formatCurrency(price)} header={img} pt={{
            title: {className: styles.titleCard},
            subTitle: {className: styles.subtitleCard}
        }}/>
    )
}