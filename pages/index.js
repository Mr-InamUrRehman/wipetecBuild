import Head from 'next/head'
import styles from '../styles/Style.module.css'
import BannerSlider from '../components/BannerSlider'
import Clients from '../components/Clients'
import AboutSec from '../components/AboutSec'
import ServicesSec from '../components/ServicesSec'
import PortfolioSec from '../components/PortfolioSec'
import Cta from '../components/Cta'
import PackageSec from '../components/PackageSec'
import ComboPackage from '../components/ComboPackage'
import LeaderShipSec from '../components/LeaderShipSec'
import TestimonialSec from '../components/TestimonialSec'
import ContactSec from '../components/ContactSec'


const Home =()=> {
  return (
    <main className={styles.HomePage}>
      <Head>
        <title>RankLogo</title>
        <meta name="description" content="Generated by create next app" />  
      </Head>

      <BannerSlider/>
      <Clients/>

      <AboutSec
        BackgroundImage= "url('assets/modal/9.png')"
        Title={["Creative and Stunning Logo Designs"]}
        SubTitle={["Design that attracts customers and strengthen your business."]}
        Para="We are expertise in diving deep into your brand and business to provide you unique logo designing services. We know how to display your brand by creating logos that suit your business. Our logo designers are here to bring perfection to your company and refined it stunningly. RankLogo is here to make your business look best with unique logo designs. Whether you are starting a business or have an established one, brand identity is its logo. We have expertise in it by providing logos that are related to your business. Creative minds at RankLogo create a stunning logo for your business to make it different in all. "
        ListItem01= "3D Logo"
        ListItem02= "Abstract Logo"
        ListItem03= "Animated Logo"
        ListItem04= "Illustrative Logo"
        ListItem05= "Branding"
        ListItem06= "Website Design"
        ListItem07= "Video Animation"
        ListItem08= "Digital Marketing"
        ButtonLightLink= "tel:+44 07927768154"
        ButtonLightTitle= "+44 07927768154"
      />
      
      <ServicesSec/>
      <PortfolioSec TabNav PortfolioData/>
      <Cta/>
      <PackageSec TabNav LogoDesignPkgTab WebDesignPkgTab StationaryDesignTab/>
      <ComboPackage/>
      <LeaderShipSec/>
      <TestimonialSec/>
      <ContactSec/>
    </main>
  )
}
export default Home;