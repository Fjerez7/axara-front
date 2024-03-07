import {FC} from "react";
import {DeleteImageReq, ImageProduct, Product} from "../../types/Products.ts";
import {Image} from "primereact/image";
import {Button} from "primereact/button";
import {deleteImage} from "../../queries/Products.ts";
import style from './EditImagesModal.module.css'

interface EditImagesModalProps {
    imagesData: ImageProduct[],
    productData: Product
    fnProductImg: (image: ImageProduct[]) => void
    fnProduct: (product: Product) => void
}

const EditImagesModal: FC<EditImagesModalProps> = ({imagesData,productData,fnProductImg, fnProduct}) => {
    const deleteImgMut = deleteImage()

    return(
        <>
            {imagesData.map((urlImg:ImageProduct, index:number) => {
                return (
                    <div key={index} className={style.sectionEditImg}>
                        <Image src={`http://localhost:8080/api/v1/products/images/${urlImg.uid}`} width={'100%'}
                               alt={urlImg.path}/>
                        <Button icon={'pi pi-trash'} className={style.btnDeleteImg} severity={'danger'}
                                onClick={() => {
                                    const DeleteImageReq:DeleteImageReq = {
                                        productId: productData.id,
                                        imageUid: urlImg.uid
                                    }
                                    deleteImgMut.mutate(DeleteImageReq,{
                                        onSuccess: () => {
                                            const updatedProduct = imagesData.filter((img:ImageProduct) => img.uid !== urlImg.uid)
                                            fnProductImg(updatedProduct)
                                            fnProduct({...productData, images: updatedProduct})
                                        }
                                    })
                                }}/>
                    </div>
                )
            })
            }
        </>
    )
}

export default EditImagesModal;