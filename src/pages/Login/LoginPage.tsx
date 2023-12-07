import {InputText} from "primereact/inputtext";
import {useForm} from "react-hook-form";
import {Button} from "primereact/button";
import styles from './LoginPage.module.css'
import {Layout} from "../../components/Layout/Layout.tsx";
import {Link} from "react-router-dom";

const LoginPage = () => {

    const {register, handleSubmit} = useForm();

    const onSubmit = (data:any ) => console.log(data)
    return(
        <Layout>
        <div >
            <h1 className={styles.title}>LOGIN</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.boxForm}>
                   <span className="p-float-label">
                    <InputText id="email" type={'email'} className={styles.inp} {...register('email')} />
                    <label htmlFor="email">Email</label>
                    </span>

                    <span className="p-float-label">
                    <InputText id="password" type={'password'} className={styles.inp} {...register('password')} />
                    <label htmlFor="password">Password</label>
                     </span>
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