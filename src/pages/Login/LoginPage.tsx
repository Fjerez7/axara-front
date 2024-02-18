import {InputText} from "primereact/inputtext";
import {Controller, useForm} from "react-hook-form";
import {Button} from "primereact/button";
import styles from './LoginPage.module.css'
import {Layout} from "../../components/Layout/Layout.tsx";
import {Link, useNavigate} from "react-router-dom";
import {classNames} from "primereact/utils";
import {loginUser} from "../../queries/LoginQ.ts"
import {useRef} from "react";
import {Toast} from "primereact/toast";
import {generateToast} from "../../utils/generateToast.ts";

const LoginPage = () => {
    // hooks of ReactForm library
    const { handleSubmit,control, formState: {errors = {}}, resetField} = useForm({
        defaultValues:{
            email: "",
            password:''
        }
    })
    // Var calling Query for login
    const mutation = loginUser();
    // hook to configure routes
    const navigate = useNavigate()
    const toast = useRef<Toast>(null);

    const onSubmit = async (data:any ) => {
        try {
            //Brings data from Query
            const response= await mutation.mutateAsync(data)
            // Store token in the cookie
            document.cookie = `Authorization=${response.data.token}; path=/`
            generateToast(toast,'success', 'Successful login')
            setTimeout(() => {
                navigate("/account")
            },1000)
        }
        catch (error){
            generateToast(toast,'error',"Invalid login credentials provided")
            resetField('password')
        }

    }

    const validationFields =  () => {
        errors && generateToast(toast,'error', 'Complete the required fields')
    }

    return(
        <Layout>
        <div >
            <h1 className={styles.title}>LOGIN</h1>
            <form onSubmit={handleSubmit(onSubmit, validationFields)}>
                <Toast ref={toast} position={"top-center"}/>
                <div className={styles.boxForm}>
                    <Controller
                        name="email"
                        control={control}
                        rules={{ required: 'Field required' }}
                        render={({ field, fieldState }) => (
                            <>
                                    <span className="p-float-label">
                                    <InputText id={field.name} type={'email'} value={field.value}
                                               className={classNames({ 'p-invalid': fieldState.error },styles.inp)}
                                               onChange={(e) => field.onChange(e.target.value)} />
                                    <label htmlFor={field.name}>Email</label>
                                    </span>
                            </>
                        )}
                    />
                    <Controller
                        name="password"
                        control={control}
                        rules={{ required: 'Field required' }}
                        render={({ field, fieldState }) => (
                            <>
                                    <span className="p-float-label">
                                    <InputText id={field.name} type={'password'} value={field.value}
                                               className={classNames({ 'p-invalid': fieldState.error },styles.inp)}
                                               onChange={(e) => field.onChange(e.target.value)} />
                                    <label htmlFor={field.name}>Password</label>
                                    </span>
                            </>
                        )}
                    />
                    <Button type={'submit'} label={'Login'}/>
                </div>
            </form>
            <p className={styles.prg}>Don't have an account?</p>
            <Link to={'/signup'}>
            <Button label={'Sign up'} className={styles.btn} outlined/>
            </Link>
        </div>
         </Layout>
    )
}

export default LoginPage