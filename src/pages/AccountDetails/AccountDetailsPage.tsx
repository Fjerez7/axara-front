import {Layout} from "../../components/Layout/Layout.tsx";
import {InputText} from "primereact/inputtext";
import styles from "./AccountDetailsPage.module.css";
import {Button} from "primereact/button";


const AccountDetailsPage = () => {
    return(
        <Layout>
            <div className={styles.box}>
                <h1 className={styles.title}>Personal Details</h1>
                <form>
                    <div className={styles.formbox}>
                    <span className="p-float-label">
                    <InputText id="firstname" className={styles.inp}/>
                    <label htmlFor="firstname">First Name</label>
                    </span>
                    <span className="p-float-label">
                    <InputText id="lastname" className={styles.inp}/>
                    <label htmlFor="lastname">Last Name</label>
                    </span>

                    <h2>Default Shipping Address</h2>
                    <span className="p-float-label">
                    <InputText id="address" className={styles.inp}/>
                    <label htmlFor="address">Address</label>
                    </span>
                    <span className="p-float-label">
                    <InputText id="region" className={styles.inp}/>
                    <label htmlFor="region">Region</label>
                    </span>
                    <span className="p-float-label">
                    <InputText id="city" className={styles.inp}/>
                    <label htmlFor="city">City</label>
                    </span>
                    <span className="p-float-label">
                    <InputText id="postalCode" className={styles.inp}/>
                    <label htmlFor="postalCode">Postal Code</label>
                    </span>
                    <Button label={'Save changes'} className={styles.btn}/>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default AccountDetailsPage;