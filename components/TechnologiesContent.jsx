import styles from '../styles/Style.module.css'
import {SpaceBr, SpaceBrBr} from '../components/Space'
import TechnologiesData from '../components/TechnologiesData'

const TechnologiesContent =()=>{
    return(
        <section className={[styles.TechnologiesContentSec]+" hding-2 para pt-100"}>
            <div className="container">
                <div className={styles.TechnologiesHead}>
                    <h2>Our Technical Proficiency in Logo Designing</h2>
                    <SpaceBr/>
                    <p>The professional logo designers at Logo Frank are aware of the usage of advanced technology and trends of all time. It is the amalgamation of their experience and expertise that enable to exploit the available resources to the maximum.</p>
                </div>
                <SpaceBrBr/>
                <SpaceBrBr/>
                
                <TechnologiesData/>
                <SpaceBrBr/>
                <SpaceBr/>

                <TechnologiesData order1="order-2 " order2="order-1 "/>
                <SpaceBrBr/>
                <SpaceBr/>

                <TechnologiesData/>

            </div>
        </section>
    )
}
export default TechnologiesContent;