import {Layout} from "../../components/Layout/Layout.tsx";
import {FC} from "react";
import {Link} from "react-router-dom";
import {Divider} from "primereact/divider";
import styles from './AccountPage.module.css'


interface AccountPageProps {
    userName: string
}

const AccountPage:FC<AccountPageProps> = ({userName}) => {
    return (
        <Layout>
            <div className={styles.section}>
                <h1 className={styles.title}>{`Welcome ${userName}`}</h1>
                <div className={styles.sectionOpt}>
                <Link to={'details'}>
                    <h2>Personal Details</h2>
                    <p>Edit your personal details such as email address, here</p>
                </Link>
                <Divider className={styles.divider}/>
                <Link to={'change-password'}>
                    <h2>Change Password</h2>
                    <p>Change your password, here</p>
                </Link>
                </div>
            </div>
        </Layout>
    )
}

export default AccountPage;