import {Layout} from "../../../components/Layout/Layout.tsx";
import styles from './DashboardProductEditor.module.css'
import {Card} from "primereact/card";
import {Divider} from "primereact/divider";
import {useForm} from "react-hook-form";
import {Button} from "primereact/button";
import {useState} from "react";
import {uploadProduct} from "../../../queries/Products.ts";
import {ProductForm} from "../../../components/ProductForm/ProductForm.tsx";
import {useNavigate} from "react-router-dom";

const DashboardProductEditor = () => {
    const {control,handleSubmit, reset  } = useForm({
        defaultValues: {
            name: '',
            description: '',
            price: null,
            size: '',
            stock: 0,
        }
    })
    const [selectedFiles, setSelectedFiles] = useState([])
    const navigate = useNavigate()
    const uploadImage = uploadProduct()

    const onSubmit = async (data:any,event:any) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            Object.keys(data).forEach(key => {
                formData.append(key,data[key])
            })
            selectedFiles.forEach(file => {
                formData.append('files', file);
            });
            await uploadImage.mutateAsync(formData)
            reset()
            navigate('/admin/dashboard/products-management')
        }catch (e){
            console.error(e)
        }
    }

    return(
        <Layout>
            <div className={styles.sectionDash}>
                <Card title={'Product Editor'}/>
                <Divider/>
                <Card style={{padding: '20px'}}>
                    <form onSubmit={handleSubmit(onSubmit)} encType={'multipart/form-data'}>
                        <section className={styles.sectionEditor}>
                            <ProductForm form={control} fnUploadImages={setSelectedFiles}/>
                        </section>
                        <Button type={'submit'} label={'Publish product'}/>
                    </form>
                </Card>
            </div>
        </Layout>
    )
}

export default DashboardProductEditor;