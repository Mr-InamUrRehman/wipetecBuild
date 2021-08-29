import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Style.module.css'
import {SpaceBr,SpaceBrBr} from '../components/Space'

const ServicesBox =(ServiceProps)=>{
    return(
        <li>
            <Link href={ServiceProps.url}>
                <a>
                    <div className={styles.ServicesBox}>
                        <div className={styles.ServicesImg}>
                            <Image src={ServiceProps.BgImage} alt="" height={248} width={381} />
                        </div>
                        <div className={[styles.ServicesContent]+" "+ "hding-3"}>
                            <i><Image src={ServiceProps.Icon} alt="" height={53} width={59}/></i>
                            <SpaceBrBr/>    
                            <h3>{ServiceProps.Title}</h3>
                        </div>
                    </div>    
                </a>
            </Link>
        </li>
    )
}
export default ServicesBox;