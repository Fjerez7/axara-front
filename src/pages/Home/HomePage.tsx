import {Layout} from "../../components/Layout/Layout.tsx";
import {PreviewItem} from "../../components/PreviewItem/PreviewItem.tsx";
import styles from './HomePage.module.css'
import {useQuery} from "@tanstack/react-query";
import {getAllProducts} from "../../queries/Products.ts";
import {Product} from "../../types/Products.ts";

const HomePage = () => {
    const {data} = useQuery({
        queryKey: ['products'],
        queryFn: getAllProducts
    })
    return(
        <Layout>
            <div>
                <div className={styles.sectionOne}>
                    {data && data.slice(0,2).map((product:Product) => {
                        const imgUid = product.images[0].uid;
                        return (
                            <PreviewItem key={product.id} image={imgUid} name={product.name} size={"lg"} paramForUrl={product.id}/>
                        )
                    })}
                </div>
                <div className={styles.sectionTwo}>
                    {data && data.slice(2,7).map((product:Product) => {
                        const imgUid = product.images[0].uid;
                        return (
                            <PreviewItem key={product.id} image={imgUid} name={product.name} size={"sm"} paramForUrl={product.id}/>
                        )
                    })}
                </div>
            </div>
        </Layout>

    )
}

export default HomePage;