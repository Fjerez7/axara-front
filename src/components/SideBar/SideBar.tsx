import {Sidebar} from "primereact/sidebar";
import {FC} from "react";
import styles from './SideBar.module.css'
import {Link} from "react-router-dom";
import {checkAuthentication} from "../../routes/ProtectedRoute.tsx";
import {useAuth} from "../../context/AuthProvider.tsx";


interface SideBarProps {
    showState: boolean
    setShowState: any
}


export const SideBar:FC<SideBarProps> = ({showState = false,setShowState}) => {
    // Check if user is Auth
    const isAuthenticated = checkAuthentication();
    // Brings updateUser for update the global Context
    const {updateUser} = useAuth()

    return(
        <Sidebar visible={showState} onHide={() => setShowState(!showState)} className={styles.sideBar} pt={{
            closeIcon: {style: {color: 'white'} }
        }}>
            <div className={styles.boxOptions}>
                {!isAuthenticated ? (
                    <>
                        <Link to={'/'} className={styles.options}>Home</Link>
                        <Link to={'/collections'} className={styles.options}>Collection</Link>
                        <Link to={'/cart'} className={styles.options}>Cart</Link>
                        <Link to={'/login'} className={styles.options}>Login</Link>
                        <Link to={'/signup'} className={styles.options}>Register</Link>
                    </>
                ):
                    <>
                        <Link to={'/'} className={styles.options}>Home</Link>
                        <Link to={'/collections'} className={styles.options}>Collection</Link>
                        <Link to={'/cart'} className={styles.options}>Cart</Link>
                        <Link to={'/'} className={styles.options} onClick={() => {
                            //Delete token stored in the cookies
                            document.cookie = 'Authorization=; expires=Thu,   01 Jan   1970   00:00:00 UTC; path=/;'
                            updateUser(null)
                        }}>Logout</Link>
                    </>
                }

            </div>
        </Sidebar>
    )
}