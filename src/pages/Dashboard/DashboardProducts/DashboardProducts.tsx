import {Layout} from "../../../components/Layout/Layout.tsx";
import styles from './DashboardProducts.module.css'
import {Card} from "primereact/card";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {Divider} from "primereact/divider";
import {Button} from "primereact/button";
import {useNavigate} from "react-router-dom";

const DashboardProducts = () => {
    const navigate = useNavigate()
    return(
        <Layout>
            <div className={styles.sectionDash}>
                <Card title={'Products Management'} className={styles.cardTitle} />
                <Divider/>
                <div>
                    <Button label={"Add new product"} icon={'pi pi-plus-circle'} rounded iconPos={'right'}
                            onClick={() => navigate('product-editor')}/>
                </div>
                <DataTable>
                    <Column></Column>
                </DataTable>
            </div>
        </Layout>
    )
}

export default DashboardProducts;