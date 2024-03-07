import {Layout} from "../../../components/Layout/Layout.tsx";
import styles from './DashboardProducts.module.css'
import {Card} from "primereact/card";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {Divider} from "primereact/divider";
import {Button} from "primereact/button";
import {useNavigate} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {deleteProduct, getAllProducts} from "../../../queries/Products.ts";
import {getSeverityForStock, getStatusNameStock} from "../../../utils/getSeverityForStock.ts";
import {Tag} from "primereact/tag";
import {formatCurrency} from "../../../utils/formatCurrency.ts";
import {Product} from "../../../types/Products.ts";
import { useState} from "react";
import { ConfirmDialog} from "primereact/confirmdialog";

const DashboardProducts = () => {
    const navigate = useNavigate()
    const {data,refetch} = useQuery({
        queryKey: ['products'],
        queryFn: getAllProducts
    })
    const [visible,setVisible] = useState(false)
    const [productId, setProductId] = useState(0)
    const deleteMutation = deleteProduct();

    const header = (
        <div className={styles.header}>
            <span className={styles.headerTitle}>Products</span>
            <Button icon="pi pi-refresh" rounded raised />
        </div>
    );
    const footer = `In total there are ${data ? data.length : 0} products.`;
    const imageBodyTemplate = (productData: Product) => {
        const imageUuid = productData.images[0].uid;
        return <img src={`http://localhost:8080/api/v1/products/images/${imageUuid}`} alt={`Image-${productData.name}`}
                    className={styles.boxImage} />;
    };
    const statusBodyTemplate = (product : Product) => {
        return (<div>
            <Tag value={getStatusNameStock(product)} severity={getSeverityForStock(product)}></Tag>
            <span>({product.stock})</span>
        </div>);
    };
    const priceBodyTemplate = (product : Product) => {
        return formatCurrency(product.price);
    };
    const buttonsBodyTemplate = (product:Product) => {
        return(
            <>
                <Button rounded outlined icon={'pi pi-pencil'} style={{marginRight: '10px'}}
                        onClick={() => {navigate('product-editor-update',{state: {product}})}} />
                <ConfirmDialog visible={visible} onHide={() => setVisible(false)} icon={'pi pi-info-circle'}
                acceptClassName={'p-button-danger'} message={'Do you want to delete this Product?'}
                               accept={() => {deleteMutation.mutate(productId,{onSuccess: () => refetch()})}}
                               reject={() => setVisible(false)} header={'Delete confirmation'}
                />
                <Button rounded  outlined icon={'pi pi-trash'}  severity={'danger'} onClick={() => {
                    setProductId(product.id)
                    setVisible(true)
                }}/>
            </>
        )
    }

    return(
        <Layout>
            <div className={styles.sectionDash}>
                <Card title={'Products Management'} className={styles.cardTitle} />
                <Divider/>
                <div>
                    <Button label={"Add new product"} icon={'pi pi-plus-circle'} rounded iconPos={'right'}
                            onClick={() => navigate('product-editor-create')}/>
                </div>
                <Divider/>
                <DataTable value={data} header={header} footer={footer} tableStyle={{minWidth:'60rem'}}>
                    <Column field={'name'} header={'Name'} alignHeader={"center"} style={{textAlign: 'center'}}/>
                    <Column header={'Image'} body={imageBodyTemplate} alignHeader={"center"} style={{textAlign: 'center'}}/>
                    <Column field={'price'} header={'Price'} body={priceBodyTemplate} alignHeader={"center"} style={{textAlign: 'center'}}/>
                    <Column field={'category'} header={'Category'} alignHeader={"center"} style={{textAlign: 'center'}}/>
                    <Column field={'size'} header={'Size'} alignHeader={"center"} style={{textAlign: 'center'}}/>
                    <Column header={'Status'} body={statusBodyTemplate} style={{textAlign: 'center'}} alignHeader={"center"}/>
                    <Column body={buttonsBodyTemplate} bodyStyle={{minWidth: '12rem',width: '100px', textAlign: 'center'}}/>
                </DataTable>
            </div>
        </Layout>
    )
}

export default DashboardProducts;