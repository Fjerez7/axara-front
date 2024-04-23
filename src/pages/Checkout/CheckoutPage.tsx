import {Layout} from "../../components/Layout/Layout.tsx";
import {Button} from "primereact/button";
import {FormAddress} from "../../components/FormAddress/FormAddress.tsx";
import styles from './CheckoutPage.module.css'
import {useCartContext} from "../../hooks/useCartContext.ts";
import {formatCurrency} from "../../utils/formatCurrency.ts";
import {useForm} from "react-hook-form";
import {createCheckout, finalizeCheckout} from "../../queries/CheckoutQ.ts";
import {InvoicePdf} from "../../components/InvoicePdf/InvoicePdf.tsx";
import {useState} from "react";
import {Dialog} from "primereact/dialog";
import {useAuth} from "../../hooks/useAuth.ts";
import {useNavigate} from "react-router-dom";

export const CheckoutPage = () => {
    const {cartData,updateCart} = useCartContext()
    const {user} = useAuth()
    const {control,handleSubmit} = useForm({
        defaultValues: {
            address: '',
            city: '',
            departament: '',
            postalCode: '',
            phone: '',
        }
    });
    const createCheckoutSession = createCheckout()
    const [showInvoice, setShowInvoice] = useState(false)
    const [showDialog, setShowDialog] = useState(false)
    const [saveCheckout, setSaveCheckout] = useState()
    const otherData = {
        cartData,
        user
    }
    const navigate = useNavigate()
    const completeCheckout = finalizeCheckout()

    const onSubmit = (data: any) => {
        try{
            createCheckoutSession.mutate({cartId:cartData?.id!, address:data},{
                onSuccess: (data) => {
                    setSaveCheckout(data.data)
                    setShowInvoice(true)
                    setShowDialog(true)
                }
            })
        } catch (e) {
            console.log(e)
        }
    }

    const handleFinishProcess = () => {
        setShowDialog(false)
        const key = `cartUser_${user?.id}_cartId`
        localStorage.removeItem(key)
        completeCheckout.mutate(cartData!)
        updateCart([] as any)
        navigate('/')
    }

    return (
        <Layout>
            <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.checkoutDetails}>
                    <div className={styles.checkoutForm}>
                        <h1 className={styles.checkoutTitle}>CHECKOUT</h1>
                        <h2 className={styles.AddressTitle}>Delivery Address</h2>
                        <FormAddress control={control}/>
                    </div>
                    <div className={styles.paymentBox}>
                        <div className={styles.totalPrice}>
                            <h3>Total:</h3>
                            <h3>{formatCurrency(cartData?.totalAmount!)}</h3>
                        </div>
                        <Button label={'Proceed to Payment'} className={styles.paymentBtn}/>
                    </div>
                </div>
            </form>
            {showInvoice && saveCheckout && (
                <Dialog onHide={() => setShowDialog(false)} visible={showDialog} contentClassName={styles.pdfEditor}
                        closeIcon={true} header={'Invoice Viewer'} modal={true}
                        footer={
                            <Button label={'Finish the process'} icon={'pi pi-times-circle'}
                                    style={{width: '100%'}} onClick={handleFinishProcess}/>
                        }
                >
                        <InvoicePdf checkoutData={saveCheckout} otherData={otherData}/>
                </Dialog>
            )}
            </>
        </Layout>
    )
}