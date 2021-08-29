
import styles from '../styles/Style.module.css'
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";
import Image from 'next/image';

const PortfolioBox = (props) => {
    const handleClick = (e) => { e.preventDefault() }

    return (
        <li className="flex flex-wrap gap-5 justify-center max-w-5xl mx-auto px-6">
            <div className={styles.PortfolioBox}>
                <div className={styles.PortfolioImage}>
                   
                        <a  href={props.BgImage} data-fancybox="gallery">

                            <Image src={props.BgImage} alt="" height={'300px'} width={'355px'} />

                        </a>
                
                </div>
            </div>
        </li>


    )
}
export default PortfolioBox;