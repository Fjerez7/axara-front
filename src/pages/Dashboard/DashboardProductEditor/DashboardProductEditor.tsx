import {Layout} from "../../../components/Layout/Layout.tsx";
import styles from './DashboardProductEditor.module.css'
import {Card} from "primereact/card";
import {Divider} from "primereact/divider";
import {Controller, useForm} from "react-hook-form";
import {InputText} from "primereact/inputtext";
import {classNames} from "primereact/utils";
import {InputNumber} from "primereact/inputnumber";
import {Slider} from "primereact/slider";
import {Button} from "primereact/button";
import {SelectButton} from "primereact/selectbutton";
import {InputTextarea} from "primereact/inputtextarea";
import ProductImageEditor from "../../../components/ProductImageEditor/ProductImageEditor.tsx";

const sizes = [
    { value: 'S'},
    { value: 'M'},
    { value: 'L'},
    { value: 'XL'},
];

const DashboardProductEditor = () => {
    const {control,handleSubmit  } = useForm({
        defaultValues: {
            name: '',
            description: '',
            price: null,
            size: '',
            stock: 0
        }
    })

    const onSubmit = (data:any) => {
        console.log(data)
    }

    return(
        <Layout>
            <div className={styles.sectionDash}>
                <Card title={'Product Editor'}/>
                <Divider/>
                <Card style={{padding: '20px'}}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <section className={styles.sectionEditor}>
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
                        </section>
                        <Button type={'submit'} label={'Publish product'}/>
                    </form>
                </Card>
            </div>
        </Layout>
    )
}

export default DashboardProductEditor;