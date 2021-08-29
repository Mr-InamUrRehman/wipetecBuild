import {SpaceBr, SpaceBrBr} from '../components/Space'
import styles from '../styles/Style.module.css'
import Image from 'next/image'
import Link from 'next/link'

const LeaderShipSec =()=>{
    return(
        <section className={[styles.LeaderShipSec]+" "+ "pad-sec"}>
            <div className="container">
                <div className={[styles.LeaderShipHead]+" "+ "hding-2 para text-center"}>
                    <h2>Visionary Leadership</h2>
                    <SpaceBr/>
                    <p>RankLogo has always had vision to be the acclaimed artist of his time.<br/> He has worked real hard to achieve this aim</p>
                </div>
                <SpaceBrBr/>
                <SpaceBr/>
                
                <ul className={styles.LeaderList}>
                    <li><Link href="#"><a><Image src="/assets/leader/1.jpg" alt="" height={105} width={105}/></a></Link></li>
                    <li><Link href="#"><a><Image src="/assets/leader/2.jpg" alt="" height={105} width={105}/></a></Link></li>
                    <li><Link href="#"><a><Image src="/assets/leader/3.jpg" alt="" height={105} width={105}/></a></Link></li>
                    <li><Link href="#"><a><Image src="/assets/leader/4.jpg" alt="" height={105} width={105}/></a></Link></li>
                    <li><Link href="#"><a><Image src="/assets/leader/5.jpg" alt="" height={105} width={105}/></a></Link></li>
                    <li><Link href="#"><a><Image src="/assets/leader/6.jpg" alt="" height={105} width={105}/></a></Link></li>
                    <li><Link href="#"><a><Image src="/assets/leader/7.jpg" alt="" height={105} width={105}/></a></Link></li>
                </ul>
            </div>
        </section>
    )
}
export default LeaderShipSec;