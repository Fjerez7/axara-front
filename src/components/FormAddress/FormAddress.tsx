import {InputText} from "primereact/inputtext";
import {classNames} from "primereact/utils";
import styles from "./FormAddress.module.css";
import {Controller} from "react-hook-form";
import {FC} from "react";

interface FormAddressProps {
    control: any;
}

export const FormAddress:FC<FormAddressProps> = ({control}) => {

    return(
        <div>
                <div className={styles.formAddress}>
                    <Controller
                        name="address"
                        control={control}
                        rules={{required: 'Field required'}}
                        render={({field, fieldState}) => (
                            <>
                                    <span className="p-float-label">
                                    <InputText id={field.name} value={field.value}
                                               className={classNames({'p-invalid': fieldState.error}, styles.inp)}
                                               onChange={(e) => field.onChange(e.target.value)}/>
                                    <label htmlFor={field.name}>Address</label>
                                    </span>
                            </>
                        )}
                    />
                    <Controller
                        name="city"
                        control={control}
                        rules={{required: 'Field required'}}
                        render={({field, fieldState}) => (
                            <>
                                    <span className="p-float-label">
                                    <InputText id={field.name} value={field.value}
                                               className={classNames({'p-invalid': fieldState.error}, styles.inp)}
                                               onChange={(e) => field.onChange(e.target.value)}/>
                                    <label htmlFor={field.name}>City</label>
                                    </span>
                            </>
                        )}
                    />
                    <Controller
                        name="departament"
                        control={control}
                        rules={{required: 'Field required'}}
                        render={({field, fieldState}) => (
                            <>
                                    <span className="p-float-label">
                                    <InputText id={field.name} value={field.value}
                                               className={classNames({'p-invalid': fieldState.error}, styles.inp)}
                                               onChange={(e) => field.onChange(e.target.value)}/>
                                    <label htmlFor={field.name}>Departament</label>
                                    </span>
                            </>
                        )}
                    />
                    <Controller
                        name="postalCode"
                        control={control}
                        rules={{required: 'Field required'}}
                        render={({field, fieldState}) => (
                            <>
                                    <span className="p-float-label">
                                    <InputText id={field.name} value={field.value}
                                               className={classNames({'p-invalid': fieldState.error}, styles.inp)}
                                               onChange={(e) => field.onChange(e.target.value)}/>
                                    <label htmlFor={field.name}>Postal Code</label>
                                    </span>
                            </>
                        )}
                    />
                    <Controller
                        name="phone"
                        control={control}
                        rules={{required: 'Field required'}}
                        render={({field, fieldState}) => (
                            <>
                                    <span className="p-float-label">
                                    <InputText id={field.name} value={field.value}
                                               className={classNames({'p-invalid': fieldState.error}, styles.inp)}
                                               onChange={(e) => field.onChange(e.target.value)}/>
                                    <label htmlFor={field.name}>Phone</label>
                                    </span>
                            </>
                        )}
                    />
                </div>
        </div>
)
}