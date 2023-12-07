import {Layout} from "../../components/Layout/Layout.tsx";
import {PreviewItem} from "../../components/PreviewItem/PreviewItem.tsx";
import styles from './HomePage.module.css'

const HomePage = () => {
    return(
        <Layout>
            <div>
                <div className={styles.sectionOne}>
                    <PreviewItem name={''} image={''} size={"lg"}/>
                    <PreviewItem name={''} image={''} size={"lg"}/>
                </div>
                <div className={styles.sectionTwo}>
                    <PreviewItem name={''} image={''} size={"sm"}/>
                    <PreviewItem name={''} image={''} size={"sm"}/>
                    <PreviewItem name={''} image={''} size={"sm"}/>
                    <PreviewItem name={''} image={''} size={"sm"}/>
                </div>
            </div>
        </Layout>

    )
}

export default HomePage;