import VintageLogo from '../components/data/VintageLogo'
import PortfolioBox from '../components/PortfolioBox'
import styles from '../styles/Style.module.css'
import { SpaceBr, SpaceBrBr } from './Space'

const TabContent =(props)=>{
    const PortFolioContent =(val)=>{
        return(
            <PortfolioBox
                key={val.id}
                url={val.url}
                BgImage={val.BgImage}
            /> 
        )
    }
    return(
        <div className="container">
            <div className={[styles.PortfolioHead]+" "+ "hding-2 para"}>
                <h2>At Longo Frank, We have a family <br/>of hundreds of satisfactory Customers</h2>
                <SpaceBr/>
                <p>At Logo Frank, we believe in nurturing long-term professional relation with our customers.<br/> We get it done by delivering quality productions and timely commitments.</p>
            </div>
            <SpaceBrBr/>
            <div className={styles.TabContent}>
                <ul className={styles.PortfolioList}>
                    {VintageLogo.map(PortFolioContent)}
                </ul>   
            </div>
        </div>
    )
}
export default TabContent;