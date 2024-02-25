import styles from "./DashboardPage.module.css";
import {Link} from "react-router-dom";
import {Divider} from "primereact/divider";
import {Button} from "primereact/button";
import {Layout} from "../../components/Layout/Layout.tsx";
import {useLogout} from "../../hooks/useLogout.ts";


const Dashboard = () => {
    const logout = useLogout();
    return(
        <>
            <Layout>
                <div className={styles.section}>
                    <h1 className={styles.title}>{`Welcome User Admin`}</h1>
                    <div className={styles.sectionOpt}>
                        <Link to={'products-management'}>
                            <h2>Product Management</h2>
                            <p>View, Add, update and delete products, here</p>
                        </Link>
                        <Divider className={styles.divider}/>
                        <Link to={'settings'}>
                            <h2>Settings</h2>
                            <p>View, update and review your profile information, here</p>
                        </Link>
                        <Divider className={styles.divider}/>
                    </div>
                    <Button type={'button'} label={'Logout'} className={styles.btn} onClick={logout}/>
                </div>
            </Layout>
        </>
    )
}

export default Dashboard;