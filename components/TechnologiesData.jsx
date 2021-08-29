import styles from '../styles/Style.module.css'
import {SpaceBr, SpaceBrBr} from '../components/Space'
import Image from 'next/image'

const TechnologiesData =(props)=>{
    return(
        <div className="row">
            <div className={[props.order1] +"col-md-4"}>
                <div className={styles.TechMdl}>
                    <Image src="/assets/tech-modal/1.jpg" alt="" width={350} height={350}  />
                </div>
            </div>
            <div className={[props.order2] +"col-md-8"}>
                <div className={[styles.TechContent]+" sticky-top"}>
                    <h2>Our Learnt Expertise in Branding Solutions</h2>
                    <SpaceBr/>
                    <p>At Logo Frank, we have never hired branding consultants. But the designers, when they turned into gurus, have got an added responsibility that to take care of branding issues of our prestigious clients. They diagnose & dissolve issues related to your brand.</p>
                </div>
            </div>
        </div>
    )
}
export default TechnologiesData;