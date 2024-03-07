import {Layout} from "../../../components/Layout/Layout.tsx";
import {Card} from "primereact/card";
import {Divider} from "primereact/divider";
import {ProductForm} from "../../../components/ProductForm/ProductForm.tsx";
import {useForm} from "react-hook-form";
import {useLocation, useNavigate} from "react-router-dom";
import {Image} from "primereact/image";
import {ImageProduct} from "../../../types/Products.ts";
import style from './DashboardProductUpdate.module.css'
import {Button} from "primereact/button";
import {Dialog} from "primereact/dialog";
import {useState} from "react";
import EditImagesModal from "../../../components/EditImagesModal/EditImagesModal.tsx";
import {updateImages, updateProduct} from "../../../queries/Products.ts";

const DashboardProductUpdate = () => {
    const {control, handleSubmit, setValue} = useForm({
        defaultValues: {
            name: '',
            description: '',
            price: null,
            size: '',
            stock: 0,
            images: []
        }
    })
    const location = useLocation();
    const [product, setProduct] = useState(location.state.product)
    const [productImages, setProductImages] = useState(location.state.product.images)
    const [visibleEditImg, setVisibleEditImg] = useState(false)
    const [selectedNewFiles, setSelectedNewFiles] = useState([])
    const navigate = useNavigate()
    const uploadImages = updateImages()
    const updProduct = updateProduct()
    const onSubmit = async (data:any) => {
        console.log('data', data)
        const formData = new FormData()
        formData.append('id', data.id)
        selectedNewFiles.forEach((file:any) => {
            formData.append('files', file)
        });
        try {
            await uploadImages.mutateAsync(formData);
            await updProduct.mutateAsync(data);
            navigate('/admin/dashboard/products-management')
        }catch (e) {
            console.error(e)
        }

    }

    return(
        <Layout>
            <div className={style.sectionUpdate}>
                <Card title={'Edit your Product'}/>
                <Divider/>
                <Card style={{padding: '0 30px'}}>
                    <div className={style.btnImageEdit}>
                        <Button icon={'pi pi-ellipsis-v'} rounded outlined onClick={() => setVisibleEditImg(true)}/>
                        <Dialog header={'Edit Images'} visible={visibleEditImg} onHide={() => setVisibleEditImg(false)}>
                            <div className={style.containerEditImg}>
                               <EditImagesModal imagesData={productImages} productData={product} fnProductImg={setProductImages}
                                                fnProduct={setProduct}/>
                            </div>
                        </Dialog>
                    </div>
                    <div className={style.sectionImages}>
                        {productImages.map((urlImg:ImageProduct, index:number) => {
                            return <Image key={index} src={`http://localhost:8080/api/v1/products/images/${urlImg.uid}`} width={'400'}
                                          alt={urlImg.path} preview/>
                        })}
                    </div>
                    <Divider/>
                    <form onSubmit={handleSubmit(onSubmit)} encType={'multipart/form-data'}>
                        <section className={style.sectionForm}>
                            <ProductForm form={[control,setValue]} product={product} fnUploadImages={setSelectedNewFiles}/>
                        </section>
                        <Button label={'Update Product'} className={style.btnUpdate}/>
                    </form>
                </Card>
            </div>
        </Layout>
    )
}

export default DashboardProductUpdate;