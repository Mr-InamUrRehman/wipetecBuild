import styles from '../styles/Style.module.css'
import {SpaceBr, SpaceBrBr} from '../components/Space'
import PortfolioBox from '../components/PortfolioBox'
import PortfolioData from '../components/data/PortfolioData'
import ModernMinimalistLogoPortfolioData from '../components/data/ModernMinimalistLogoPortfolioData'
import SignatureLogo from '../components/data/SignatureLogo'
import VersatileLogo from '../components/data/VersatileLogo'
import VintageLogo from '../components/data/VintageLogo'
import InitialLetterLogo from '../components/data/InitialLetterLogo'
import WebsitePortfolio from '../components/data/WebsitePortfolio'
import Stationary from '../components/data/Stationary'
import Link from 'next/link'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { resetIdCounter } from "react-tabs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from 'react'


resetIdCounter();

const PortFolioContent =(val)=>{
    return(
        <PortfolioBox
            key={val.id}
            url={val.url}
            BgImage={val.BgImage}
        /> 
    )
}


const PortfolioSec =(props)=>{    

    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
    window.addEventListener("resize", function() {
        if (window.matchMedia("(max-width: 1200px)").matches) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
      })
    }, []);

    const handleClick =(e)=>{
        e.preventDefault()
    }
    let settings = {
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,

      responsive: [
        {
          breakpoint: 824,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    };

    return(
        <section className={[styles.PortfolioSec]+" "+ "pad-sec"}>
            <div className="container">
                <div className={[styles.PortfolioHead]+" "+ "hding-2 para"}>
                    <h2>We know that defining your brand image<br/> is the key to marketing.</h2>
                    <SpaceBr/>
                    <p>RankLogo are here to recommend what is best and how it works in the most profitable way. Our graphic designing services are unique and different because creative minds are here working in RankLogo to strengthen your business by enhancing your brand identity and image. </p>
                </div>
                <SpaceBrBr/>

                <Tabs defaultIndex={props.key} onSelect={index => console.log(index)}>
                    {props.TabNav? 
                    <TabList className={styles.TabNav}>
                        <Tab><Link href="#"><a onClick={handleClick}>All</a></Link></Tab>
                        <Tab><Link href="#"><a onClick={handleClick}>Website design</a></Link></Tab>
                        <Tab><Link href="#"><a onClick={handleClick}>Initial Letter Logo</a></Link></Tab>
                        <Tab><Link href="#"><a onClick={handleClick}>Modern Minimalist logo</a></Link></Tab>
                        <Tab><Link href="#"><a onClick={handleClick}>Signature Logo</a></Link></Tab>
                        <Tab><Link href="#"><a onClick={handleClick}>Versatile Logo</a></Link></Tab>
                        <Tab><Link href="#"><a onClick={handleClick}>Vintage Logo</a></Link></Tab>
                    </TabList>
                    :""}
                <SpaceBrBr/>
                
                <TabPanel>
                    {props.PortfolioData?
                    <div className={styles.TabContent}>
                        {isMobile ?
                            <>
                                <ul>
                                    <Slider {...settings} >
                                        {PortfolioData.map(PortFolioContent)}
                                    </Slider>
                                </ul>
                            </>
                            :
                            <>
                                <ul className={styles.PortfolioList}>
                                    {PortfolioData.map(PortFolioContent)}
                                </ul>  
                            </>
                        }
                    </div>
                    :""}
                </TabPanel>
                
                    {props.WebsitePortfolio?
                    <div className={styles.TabContent}>
                        <ul className={styles.PortfolioList}>
                            {WebsitePortfolio.map(PortFolioContent)}
                        </ul>   
                    </div>
                    :
                    <TabPanel>
                    <div className={styles.TabContent}>
                        <ul className={styles.PortfolioList}>
                            {WebsitePortfolio.map(PortFolioContent)}
                        </ul>   
                    </div></TabPanel>}
                
                {props.NavInitialLetterLogo?

                <div className={styles.TabContent}>
                    <ul className={styles.PortfolioList}>
                        {InitialLetterLogo.map(PortFolioContent)}
                    </ul>   
                </div>
                : 
                <TabPanel>
                    
                    <div className={styles.TabContent}>
                        <ul className={styles.PortfolioList}>
                            {InitialLetterLogo.map(PortFolioContent)}
                        </ul>   
                    </div>
                    
                </TabPanel>
                }

                {props.ModernMinimalistLogoPortfolioData?
                    <div className={styles.TabContent}>
                        <ul className={styles.PortfolioList}>
                            {ModernMinimalistLogoPortfolioData.map(PortFolioContent)}
                        </ul>
                    </div>
                    :
                    <TabPanel>
                    <div className={styles.TabContent}>
                        <ul className={styles.PortfolioList}>
                            {ModernMinimalistLogoPortfolioData.map(PortFolioContent)}
                        </ul>
                    </div>
                    </TabPanel>
                    }
                {props.SignatureLogo?
                    <div className={styles.TabContent}>
                        <ul className={styles.PortfolioList}>
                            {SignatureLogo.map(PortFolioContent)}
                        </ul>
                    </div>
                    :
                    
                    <TabPanel>
                    <div className={styles.TabContent}>
                        <ul className={styles.PortfolioList}>
                            {SignatureLogo.map(PortFolioContent)}
                        </ul>
                    </div>
                   </TabPanel> }
                
              
                   {props.VersatileLogo? 
                    <div className={styles.TabContent}>
                        <ul className={styles.PortfolioList}>
                            {VersatileLogo.map(PortFolioContent)}
                        </ul>
                    </div>
                    :
                    <TabPanel>
                 
                    <div className={styles.TabContent}>
                        <ul className={styles.PortfolioList}>
                            {VersatileLogo.map(PortFolioContent)}
                        </ul>
                    </div>
                 </TabPanel>}

                 {props.VintageLogo? 
                    <div className={styles.TabContent}>
                        <ul className={styles.PortfolioList}>
                            {VintageLogo.map(PortFolioContent)}
                        </ul>
                    </div>
                    :
                    <TabPanel>
                 
                    <div className={styles.TabContent}>
                        <ul className={styles.PortfolioList}>
                            {VintageLogo.map(PortFolioContent)}
                        </ul>
                    </div>
                 </TabPanel>}

                 {props.Stationary? 
                    <div className={styles.TabContent}>
                        <ul className={styles.PortfolioList}>
                            {Stationary.map(PortFolioContent)}
                        </ul>
                    </div>
                    :
                    props.StationaryTab?
                    <TabPanel>
                 
                    <div className={styles.TabContent}>
                        <ul className={styles.PortfolioList}>
                            {Stationary.map(PortFolioContent)}
                        </ul>
                    </div>
                 </TabPanel>
                 :""}

                 
        
             


                </Tabs>
                {}
            </div>
        </section>
    )
}
export default PortfolioSec;