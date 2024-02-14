import {Layout} from "../../components/Layout/Layout.tsx";
import {Link, useNavigate} from "react-router-dom";
import {Divider} from "primereact/divider";
import styles from './AccountPage.module.css'
import {fetchUserData} from "../../queries/UserQ.ts";
import {useQuery} from "@tanstack/react-query";
import {Button} from "primereact/button";
import {useAuth} from "../../context/AuthProvider.tsx";
import {useEffect} from "react";

const AccountPage = () => {
    const navigate = useNavigate()
    const {updateUser} = useAuth()

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

    //Function for logout
    const logout = () => {
       document.cookie = 'Authorization=; expires=Thu,   01 Jan   1970   00:00:00 UTC; path=/;'
        updateUser(null)
        navigate('/')
    }


    return (
        <Layout>
            <div className={styles.section}>
                <h1 className={styles.title}>{`Welcome ${data?.firstName}`}</h1>
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
                    <Divider className={styles.divider}/>
                </div>
                <Button type={'button'} label={'Logout'} className={styles.btn} onClick={logout}/>
            </div>
        </Layout>
    )
}

export default AccountPage;