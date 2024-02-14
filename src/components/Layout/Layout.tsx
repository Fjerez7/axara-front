import styles from './Layout.module.css'
import {FC, ReactElement} from "react";

interface LayoutProps {
    children: ReactElement;
}


// Component that setup Layout for the prop children
export const Layout:FC<LayoutProps> = ({children}) => {
    return(
        <div className={styles.layout}>
            {children}
        </div>
    )
}