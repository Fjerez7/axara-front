import {Document, Page, Text, StyleSheet, Image, View, PDFViewer} from '@react-pdf/renderer';
import LogoAXA from '../../assets/logo.png';
import {FC} from "react";
import {formatCurrency} from "../../utils/formatCurrency.ts";
import {OrderItem} from "../../types/Cart.ts";

const styles = StyleSheet.create({
    page: {
        width: '100%',
        height: '100%',
    },
    section: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    image: {
        width: '250px',
        height: '60px',
    },
    textTitle: {
        fontSize: '24px',
        fontFamily: 'Helvetica-Bold',
    },
    textSubTitle: {
        fontSize: '16px',
        fontFamily: 'Helvetica',
    },
    detailShop:{
        padding: '40px 0 20px 0',
        textAlign: 'right',
        fontSize: '16px',
        borderBottom: '1px solid rgb(223 223 225)',
        display: 'flex',
        gap: '5px',
    },
    detailUser:{
        padding: '20px 0',
       textAlign: 'left',
        fontSize: '16px',
        borderBottom: '1px solid rgb(223 223 225)',
        display: 'flex',
        gap: '5px'
    },
    detailPurchase:{
        display: 'flex',
        flexDirection: 'row',
        gap: '50px',
        borderBottom: '1px solid rgb(223 223 225)',
        fontSize: '16px',
        fontFamily: 'Helvetica',
    },
    purchaseItems:{
            display: 'flex',
            flexDirection: 'row',
            gap: '50px',
            borderBottom: '1px solid rgb(223 223 225)',
            fontSize: '16px',
            fontFamily: 'Helvetica',
            padding: '20px 0',
    }
})
interface InvoicePdfProps {
    checkoutData: any,
    otherData: any,
}

export const InvoicePdf:FC<InvoicePdfProps> = ({checkoutData,otherData}) => {
    const {cartData,user} = otherData
    const date = new Date()
    const fullDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`

    return (
        <PDFViewer width={'90%'} height={'1050px'} showToolbar={true}>
            <Document title={'invoice.pdf'} >
                <Page style={styles.page} size={'LETTER'}>
                    <View style={{padding: '60px'}}>
                        <View style={styles.section}>
                            <View>
                                <Text style={styles.textTitle}>Invoice #{checkoutData.id}</Text>
                                <Text style={styles.textSubTitle}>{fullDate} </Text>
                            </View>
                            <Image src={LogoAXA} style={styles.image}/>
                        </View>
                        <View style={styles.detailShop}>
                            <Text>Axara Shop,</Text>
                            <Text>Bucaramanga,</Text>
                            <Text>Colombia,</Text>
                            <Text>123-456-7890</Text>
                        </View>
                        <View style={styles.detailUser}>
                            <Text>{`${user?.firstName} ${user?.lastName}`},</Text>
                            <Text>{checkoutData.address.address},</Text>
                            <Text>{checkoutData.address.phone},</Text>
                            <Text>{user?.email}</Text>
                        </View>
                        <Text style={{margin: '30px 0', fontSize:'16px', fontFamily:'Helvetica-Bold'}}>Purchase Details</Text>
                        <View style={styles.detailPurchase}>
                            <Text style={{width: '15%'}}>Name</Text>
                            <Text style={{width: '25%'}}>Unit Price</Text>
                            <Text>Quantity</Text>
                            <Text style={{width: '15%'}}>Total</Text>
                        </View>
                        {cartData?.orderItems.map((item:OrderItem,index:number) => (
                            <>
                                <View style={styles.purchaseItems} key={index}>
                                    <Text style={{ width: '40%'  }}>{item.product.name}</Text>
                                    <Text style={{ width: '40%' }}>{formatCurrency(item.product.price)}</Text>
                                    <Text style={{ width: '5%' }}>{item.quantity}</Text>
                                    <Text style={{ width: '40%' }}>{formatCurrency(item.product.price * item.quantity)}</Text>
                                </View>
                            </>
                        ))}
                        <View style={{display:'flex', flexDirection: 'row', justifyContent: 'space-between', paddingTop: '20px'} }>
                            <Text>Total</Text>
                            <Text>{formatCurrency(cartData?.totalAmount!)}</Text>
                        </View>
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    )
}