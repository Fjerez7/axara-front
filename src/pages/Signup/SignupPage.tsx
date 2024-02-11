import {Layout} from "../../components/Layout/Layout.tsx";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import styles from './SignupPage.module.css'
import {Controller, useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import {createUser} from "../../queries/SignupQ.ts";
import {classNames} from "primereact/utils";


const SignupPage  = () => {
    const { handleSubmit,
            control} = useForm({
        defaultValues:{
            email:'',
            firstName:'',
            lastName:'',
            password:''
        }
    })
    const createUserQuery = createUser();

    const onSubmit = (data: any) => {
        console.log(data)
        createUserQuery.mutate(data)
    }


    return(
        <Layout>
            <div >
                <h1 className={styles.title}>SIGN UP</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
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
                            name="firstName"
                            control={control}
                            rules={{ required: 'Field required' }}
                            render={({ field, fieldState }) => (
                                <>
                                    <span className="p-float-label">
                                    <InputText id={field.name} value={field.value}
                                               className={classNames({ 'p-invalid': fieldState.error },styles.inp)}
                                               onChange={(e) => field.onChange(e.target.value)} />
                                    <label htmlFor={field.name}>First Name</label>
                                    </span>
                                </>
                            )}
                        />
                        <Controller
                            name="lastName"
                            control={control}
                            rules={{ required: 'Field required' }}
                            render={({ field, fieldState }) => (
                                <>
                                    <span className="p-float-label">
                                    <InputText id={field.name} value={field.value}
                                               className={classNames({ 'p-invalid': fieldState.error },styles.inp)}
                                               onChange={(e) => field.onChange(e.target.value)} />
                                    <label htmlFor={field.name}>Last Name</label>
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
                        <Button type={'submit'} label={'SignUp'}/>
                    </div>
                </form>
                <p className={styles.prg}>Don't have an account?</p>
                <Link to={'/login'}>
                <Button label={'Login'} className={styles.btn} outlined/>
                </Link>
            </div>
        </Layout>
    )
}

export default SignupPage