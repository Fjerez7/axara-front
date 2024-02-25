import styles from './ProductImageEditor.module.css'
// import {Image} from "primereact/image";
import {Button} from "primereact/button";
import {uploadProductImg} from "../../queries/Products.ts";
import {useState} from "react";



const ProductImageEditor = () => {
    const uploadImage = uploadProductImg()
    const [selectedFiles, setSelectedFiles] = useState([])

    const handleFileChange = (event:any) => {
        setSelectedFiles([...event.target.files]);
    };

    const handleSubmit = async (event:any) => {
        event.preventDefault();
        const formData = new FormData();

        selectedFiles.forEach(file => {
            formData.append('files',file)
        })
       await uploadImage.mutateAsync(formData)
    }

    return(
        <>
            <div className={styles.boxImage}>
                <form id={'upload-form'} encType={'multipart/form-data'} onSubmit={handleSubmit}>
                    <input type={'file'} id={'img-inp'} name={'files'} multiple onChange={handleFileChange} />
                    <Button type={'submit'} label={'Upload images'} className={styles.btnChoose}/>
                </form>
                {/*<Image src={img} alt="Image" width="100%" height='100%' />*/}
            </div>
        </>
    )
}

export default ProductImageEditor;