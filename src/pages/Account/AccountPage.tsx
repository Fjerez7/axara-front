import {Layout} from "../../components/Layout/Layout.tsx";
import {Link} from "react-router-dom";
import {Divider} from "primereact/divider";
import styles from './AccountPage.module.css'
import {fetchUserData} from "../../queries/UserQ.ts";
import {useQuery} from "@tanstack/react-query";
import {Button} from "primereact/button";
import {useEffect} from "react"
import {useLogout} from "../../hooks/useLogout.ts";
import {useAuth} from "../../hooks/useAuth.ts";

const AccountPage = () => {
    const {updateUser} = useAuth()
    const logout = useLogout()

    // Bring data from method GET in backend
   const {data} = useQuery({
       queryKey:['user'],
       queryFn: fetchUserData
   })

    useEffect(() => {
        if (data) {
            updateUser(data);
        }
    }, [data, updateUser]);


    return (
        <Layout>
            <div className={styles.section}>
                <h1 className={styles.title}>{`Welcome ${data?.firstName}`}</h1>
                <div className={styles.sectionOpt}>
                <Link to={'details'}>
                    <h2>Personal Details</h2>
                    <p>Edit your personal details such as Full name, here</p>
                </Link>
                <Divider className={styles.divider}/>
                <Link to={'change-password'}>
                    <h2>Change Password</h2>
                    <p>Change your password, here</p>
                </Link>
                    <Divider className={styles.divider}/>
                </div>
                <Button type={'button'} label={'Logout'} className={styles.btn} onClick={logout}/>
            </div>
        </Layout>
    )
}

export default AccountPage;