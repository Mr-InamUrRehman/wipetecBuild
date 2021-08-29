import styles from '../styles/Style.module.css'
import {SpaceBr,SpaceBrBr} from '../components/Space'
import ServicesBox from '../components/ServicesBox'
import ServicesData from './data/ServicesData'
import { useState, useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const  ServicesLinks =(val)=>{
    return(
        <ServicesBox
        key={val.id}
        url={val.url}
        BgImage={val.BgImage}
        Icon={val.Icon}
        Title={val.Title}/>
    )
}

const ServicesSec =()=>{
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
    window.addEventListener("resize", function() {
        if (window.matchMedia("(max-width: 824px)").matches) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
      })
    }, []);

    let settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
    };
    
    return(
        <section className={[styles.ServicesSec]+" "+ "pad-sec"}>
            <div className="container">
                <div className={[styles.ServicesHead]+" "+ "hding-2 para"}>
                    <h2>Come and Make Your Business<br/>Shine With RankLogo</h2>
                </div>
                <SpaceBrBr/>
                {
                  isMobile?  
                  <ul> 
                    <Slider {...settings}>
                        {ServicesData.map(ServicesLinks)}
                    </Slider>
                    </ul>
                
                    :

                <ul className={styles.ServicesList}>
                    {ServicesData.map(ServicesLinks)}
                </ul>
                
                }
            </div>
        </section>
    )
}
export default ServicesSec;