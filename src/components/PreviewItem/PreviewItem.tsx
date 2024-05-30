
import {FC, useState} from "react";
import styles from './PreviewItem.module.css'
import {Link} from "react-router-dom";

interface PreviewItemProps {
    image: any;
    name: string
    size: 'sm' | 'lg'
    urlToNavigate?: string
    paramForUrl?: number
}

export const PreviewItem:FC<PreviewItemProps> = ({image,name,size,urlToNavigate = `/collections/`,paramForUrl }) => {
    const urlImage = `http://localhost:8080/api/v1/products/images/${image}`
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return(
        <Link to={urlToNavigate + paramForUrl}>
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={styles.card} style={{
                width: `${size == 'lg' ? '750px' : '350px'}`,
                height: `${size == 'lg' ? '1000px' : '450px'}`
            }}>
                <div className={styles.divForImage}>
                    <img src={urlImage} alt={name} style={{
                        width: `${size == 'lg' ? '700px' : '300px'}`,
                        height: '100%',
                    }}/>
                    {isHovered && (
                        <div className={styles.poster}>
                        <h3>{name}</h3>
                    </div>
                    )}
                </div>
            </div>
        </Link>
    )
}