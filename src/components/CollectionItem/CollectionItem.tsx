import {FC} from "react";
import {Card} from "primereact/card";
import styles from './CollectionItem.module.css'

interface CollectionItemProps {
    image: string;
    name: string;
    price: string
}

export const CollectionItem:FC<CollectionItemProps> = ({image,name,price}) => {
    const img = (
        <img alt="img of item" src={image} />
    );
    return (
        <Card className={styles.card} title={name} subTitle={`$${price}`} header={img} pt={{
            body: {className: styles.bodyCard},
            title: {className: styles.titleCard},
            subTitle: {className: styles.subtitleCard}
        }}/>
    )
}