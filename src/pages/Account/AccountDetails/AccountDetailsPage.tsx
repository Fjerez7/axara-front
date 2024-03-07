import {Layout} from "../../../components/Layout/Layout.tsx";
import {InputText} from "primereact/inputtext";
import styles from "./AccountDetailsPage.module.css";
import {Button} from "primereact/button";
import {Controller, useForm} from "react-hook-form";
import {useAuth} from "../../../hooks/useAuth.ts";
import {useEffect, useRef, useState} from "react";
import {updateUserForParams} from "../../../queries/UserQ.ts";
import {UserUpdate} from "../../../types/User.ts";
import {Toast} from "primereact/toast";
import {generateToast} from "../../../utils/generateToast.ts";


const AccountDetailsPage = () => {
    const {control,setValue,handleSubmit} = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
        }
    })
    const {user,updateUser} = useAuth()
    const [userId, setUserId] = useState(0)
    useEffect(() => {
        if (user) {
            setValue('firstName', user.firstName)
            setValue('lastName', user.lastName)
            setUserId(user.id)
        }
    }, [user]);
    const updUser = updateUserForParams(userId)
    const toast = useRef<Toast>(null);
    const onSubmit = async (data:any) => {
        const req:UserUpdate = {
            firstName: data.firstName,
            lastName: data.lastName
        }
        try {
            const response = await updUser.mutateAsync(req)
            updateUser(response.data)
            generateToast(toast, 'success', 'User updated successfully')
        }catch (e) {
            generateToast(toast, 'error', 'Error updating user')
            console.error("Error updating user", e);
        }
    }

    return(
        <Layout>
            <div className={styles.box}>
                <h1 className={styles.title}>Personal Details</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Toast ref={toast} position={'top-center'}/>
                    <div className={styles.formbox}>
                        <Controller name={'firstName'} control={control}
                        render={({field}) => (
                            <span className="p-float-label">
                                <InputText id={field.name} value={field.value} className={styles.inp}
                                           onChange={(e) => field.onChange(e.target.value)}/>
                                <label htmlFor={field.name}>First Name</label>
                            </span>
                        )}/>

                        <Controller name={'lastName'} control={control}
                        render={({field}) => (
                            <span className="p-float-label">
                                <InputText id={field.name} value={field.value} className={styles.inp}
                                           onChange={(e) => field.onChange(e.target.value)}/>
                                <label htmlFor={field.name}>Last Name</label>
                            </span>
                        )}/>

                        <Button label={'Save changes'} className={styles.btn}/>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default AccountDetailsPage;