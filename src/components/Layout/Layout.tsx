import styles from './Layout.module.css'
import {FC, ReactElement} from "react";

interface LayoutProps {
    children: ReactElement;
}

export const Layout:FC<LayoutProps> = ({children}) => {
    return(
        <div className={styles.layout}>
            {children}
        </div>
    )
}