import { Controller} from "react-hook-form";
import styles from "./ProductForm.module.css";
import {InputTextarea} from "primereact/inputtextarea";
import {classNames} from "primereact/utils";
import {InputText} from "primereact/inputtext";
import {InputNumber} from "primereact/inputnumber";
import {SelectButton} from "primereact/selectbutton";
import {Slider} from "primereact/slider";
import {FC, useEffect} from "react";
import {Product} from "../../types/Products.ts";

interface ProductFormProps {
    form: any[],
    fnUploadImages?: (files:any) => void
    product?: Product;
}

const sizes = [
    { value: 'S'},
    { value: 'M'},
    { value: 'L'},
    { value: 'XL'},
];
export const ProductForm: FC<ProductFormProps> = ({form, fnUploadImages,product}) => {
    const [control, setValue] = form
    useEffect(() => {
        if (product) {
            Object.keys(product).forEach(key => {
                setValue(key, product[key]);
            });
        }
    }, [form, product]);

    return(
        <>
            <div className={styles.divBox}>
                <Controller
                    name="description"
                    control={control}
                    rules={{ required: 'Field required' }}
                    render={({ field, fieldState }) => (
                        <div className={styles.inpBox}>
                            <label htmlFor={field.name} className={styles.inpLabel}>Description:</label>
                            <InputTextarea id={field.name} value={field.value} rows={5} cols={50}
                                           className={classNames({'p-invalid': fieldState.error})}
                                           onChange={(e) => field.onChange(e.target.value)}/>
                        </div>
                    )}
                />
                <div className={styles.inpBox}>
                    <label  className={styles.inpLabel}>Upload Images:</label>
                    <input type={'file'} id={'img-inp'} name={'files'} multiple
                           onChange={(e) => {
                               fnUploadImages!([...e.target.files])
                           }}/>
                </div>
            </div>
            <div className={styles.divBox}>
                <Controller
                    name="name"
                    control={control}
                    rules={{ required: 'Field required' }}
                    render={({ field, fieldState }) => (
                        <div className={styles.inpBox}>
                            <label htmlFor={field.name} className={styles.inpLabel}>Name:</label>
                            <InputText id={field.name} type={'text'} value={field.value}
                                       className={classNames({'p-invalid': fieldState.error})}
                                       onChange={(e) => field.onChange(e.target.value)}/>
                        </div>
                    )}
                />
                <Controller
                    name="price"
                    control={control}
                    rules={{ required: 'Field required' }}
                    render={({ field, fieldState }) => (
                        <div className={styles.inpBox}>
                            <label htmlFor={field.name} className={styles.inpLabel}>Price:</label>
                            <InputNumber id={field.name} inputRef={field.ref} value={field.value}
                                         mode={'currency'} currency={'COP'}
                                         className={classNames({'p-invalid': fieldState.error})}
                                         onValueChange={(e) => field.onChange(e)}/>
                        </div>
                    )}
                />
                <Controller
                    name="size"
                    control={control}
                    rules={{ required: 'Field required.' }}
                    render={({ field }) => (
                        <div className={styles.inpBox}>
                            <label htmlFor={field.name} className={styles.inpLabel}>Size:</label>
                            <SelectButton id={field.name} value={field.value} optionLabel="value" options={sizes}
                                          onChange={(e) => field.onChange(e.value)}  />
                        </div>
                    )
                    }
                />
                <Controller
                    name="stock"
                    control={control}
                    rules={{ required: 'Field required.' }}
                    render={({ field }) => (
                        <div className={styles.inpBox}>
                            <label htmlFor={field.name} className={styles.inpLabel}>Stock:</label>
                            <InputNumber id={field.name} value={field.value} name={'stock'}
                                         onValueChange={(e) => field.onChange(e.target.value)} />
                            <Slider value={field.value} name={'stock'} onChange={(e) => field.onChange(e.value)}  />
                        </div>
                    )
                    }
                />
            </div>
        </>
    )
}

