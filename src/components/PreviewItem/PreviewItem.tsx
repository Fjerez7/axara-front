import {Card} from "primereact/card";
import {FC} from "react";
import styles from './PreviewItem.module.css'

interface PreviewItemProps {
    image: any;
    name: string
    size: 'sm' | 'lg'
}


export const PreviewItem:FC<PreviewItemProps> = ({image,name,size}) => {
    return(
        <>
        <Card className={styles.card} style={{
            width: `${size == 'lg'? '750px': '350px'}`,
            height: `${size == 'lg'? '1000px': '450px'}`
        }}>
            <img src={image} alt={`collection ${name}`} />
        </Card>
        </>
    )
}