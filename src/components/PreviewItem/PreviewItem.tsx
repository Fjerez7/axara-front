import {Card} from "primereact/card";
import {FC} from "react";
import styles from './PreviewItem.module.css'
import {Link} from "react-router-dom";

interface PreviewItemProps {
    image: any;
    name: string
    size: 'sm' | 'lg'
    urlToNavigate?: string
}

export const PreviewItem:FC<PreviewItemProps> = ({image,name,size,urlToNavigate = ''}) => {
    return(
        <Link to={urlToNavigate}>
        <Card className={styles.card} style={{
            width: `${size == 'lg'? '750px': '350px'}`,
            height: `${size == 'lg'? '1000px': '450px'}`
        }}>
            <img src={image} alt={`collection ${name}`} />
        </Card>
        </Link>
    )
}