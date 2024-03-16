import {Layout} from "../../../components/Layout/Layout.tsx";
import {Controller, useForm} from "react-hook-form";
import styles from "./ChangePassword.module.css";
import {Button} from "primereact/button";
import {Password} from "primereact/password";
import {changePassword} from "../../../queries/UserQ.ts";
import {useAuth} from "../../../hooks/useAuth.ts";
import {generateToast} from "../../../utils/generateToast.ts";
import {Toast} from "primereact/toast";
import {useRef} from "react";


const AccountChangePasswordPage = () => {
    const {control,handleSubmit,reset} = useForm({
        defaultValues: {
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
        }
    })
    const {user} = useAuth()
    const changePw = changePassword(user?.id!)
    const toast = useRef<Toast>(null)
    const onSubmit = async (data: any) => {
       try {
              if(data.newPassword === data.confirmPassword) {
                const response = await changePw.mutateAsync(data)
                  console.log(response)
                  reset()
                generateToast(toast, 'success', 'Password Changed')
              } else {
                generateToast(toast, 'error', 'Error Changing Password, Please Try Again')
              }
       }catch (e) {
           generateToast(toast, 'error', 'Error Changing Password, Please Try Again')
       }
    }

    return(
        <Layout>
            <div className={styles.box}>
                <h1 className={styles.title}>Change Password</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Toast ref={toast} position={'top-center'}/>
                    <div className={styles.formbox}>
                        <Controller name={'currentPassword'} control={control}
                        render={({field}) => (
                            <span className="p-float-label">
                                <Password id={field.name} value={field.value} className={styles.inp} width={500}
                                          inputStyle={{width: '100%'}} pt={{panel: {hidden: true}}} toggleMask
                                          onChange={(e) => field.onChange(e.target.value)}/>
                                <label htmlFor={field.name}>Current Password</label>
                            </span>
                        )}/>
                        <Controller name={'newPassword'} control={control}
                        render={({field}) => (
                            <span className="p-float-label">
                                <Password id={field.name} value={field.value} className={styles.inp} width={500}
                                          inputStyle={{width: '100%'}} pt={{panel: {hidden: true}}} toggleMask
                                          onChange={(e) => field.onChange(e.target.value)}/>
                                <label htmlFor={field.name}>New Password</label>
                            </span>
                        )}/>
                        <Controller name={'confirmPassword'} control={control}
                        render={({field}) => (
                            <span className="p-float-label">
                                <Password id={field.name} value={field.value} className={styles.inp} width={500}
                                          inputStyle={{width: '100%'}} pt={{panel: {hidden: true}}} toggleMask
                                          onChange={(e) => field.onChange(e.target.value)}/>
                                <label htmlFor={field.name}>Confirm Password</label>
                            </span>
                        )}/>
                        <Button type={'submit'} label={'Change Password'}/>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default AccountChangePasswordPage;