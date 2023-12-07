
import styles from './NavBar.module.css'
import logo from '../../assets/logo.png'
import {Button} from "primereact/button";
import {FC} from "react";
import {Link} from "react-router-dom";

interface NavBarProps {
    onToggleSideBar: () => void
}
export const NavBar:FC<NavBarProps> = ({onToggleSideBar}) => {

    return (
        <nav className={styles.navBar}>
            <div className={styles.section}>
                <Button icon="pi pi-bars" text rounded className={styles.btn} onClick={onToggleSideBar}/>
                <Link to={'/'}>
                <img src={logo} alt={'logo'} className={styles.logo}/>
                </Link>
            </div>
            <div className={styles.section}>
                <Link to={'/login'}>
                <Button icon='pi pi-user' label={'Account'} text className={styles.btn}/>
                </Link>
                <Link to={'/cart'}>
                <Button icon='pi pi-shopping-cart' label={'Cart'} text className={styles.btn}/>
                </Link>
            </div>
        </nav>
    )
}