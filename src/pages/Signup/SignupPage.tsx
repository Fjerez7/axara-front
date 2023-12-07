import {Layout} from "../../components/Layout/Layout.tsx";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import styles from './SignupPage.module.css'
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";

const SignupPage  = () => {
    const {handleSubmit,register} = useForm()

    const onSubmit = (data: any) => console.log(data)

    return(
        <Layout>
            <div >
                <h1 className={styles.title}>SIGN UP</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.boxForm}>
                       <span className="p-float-label">
                        <InputText id="email" type={'email'} className={styles.inp} {...register('email')} />
                        <label htmlFor="email">Email</label>
                        </span>

                        <span className="p-float-label">
                        <InputText id="firstname" className={styles.inp} {...register('firstname')} />
                        <label htmlFor="firstname">First Name</label>
                         </span>

                        <span className="p-float-label">
                        <InputText id="lastname" className={styles.inp} {...register('lastname')} />
                        <label htmlFor="lastname">Last Name</label>
                         </span>

                        <span className="p-float-label">
                        <InputText id="password" type={'password'} className={styles.inp} {...register('password')} />
                        <label htmlFor="password">Password</label>
                         </span>
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