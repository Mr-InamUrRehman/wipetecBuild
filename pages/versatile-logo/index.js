import Head from 'next/head'
import styles from '../../styles/Style.module.css'
import InnerBanner from '../../components/InnerBanner'
import Clients from '../../components/Clients'
import AboutSec from '../../components/AboutSec'
import ServicesSec from '../../components/ServicesSec'
import PortfolioSec from '../../components/PortfolioSec'
import Cta from '../../components/Cta'
import PackageSec from '../../components/PackageSec'
import ComboPackage from '../../components/ComboPackage'
import LeaderShipSec from '../../components/LeaderShipSec'
import TestimonialSec from '../../components/TestimonialSec'
import ContactSec from '../../components/ContactSec'


const Logo3D =()=> {
  return (
    <main className={styles.Logo3DPage}>
      <Head>
        <title>Rank Logo</title>
        <meta name="description" content="Generated by create next app" />  
      </Head>

      <InnerBanner
        BackgroundImage= "url(./assets/banner/13.jpg)"
        Title= "We create a versatile logo for your business."
        Para= "A versatile logo helps your customers to understand your business in a more suitable manner."
        ListItem01= "Customized"
        ListItem02= "Efficient"
        ListItem03= "Unique"
        ListItem04= "Creative"
        Image01= "/assets/partners/1.png"
        Image02= "/assets/partners/2.png"
        Image03= "/assets/partners/3.png"
        ButtonDarkTitle= "Get A Design Now"
        ButtonDarkLink= "#"
        ButtonLightTitle= "+44 07927768154"
        ButtonLightLink= "tel+44 07927768154"
      />
      <Clients/>

      <AboutSec
        BackgroundImage= "url('assets/modal/6.jpg')"
        Title="Versatile Logo"
        SubTitle="We know the brand image plays a vital role while representing your company to the audience."
        Para="Our logo designers are experts in making versatile logos 
        for your business. They can show you different logo design 
        samples, and it depends on you which one is more relatable 
        to your business requirements. We design and create a 
        stunning versatile logo in order which displayed the 
        message of your business to the audience. Versatile 
        logos are usually for businesses, and they are used 
        to showcase the services provided by the specific 
        company. RankLogo designs unique, versatile logos 
        for the business. If you want to enhance your brand 
        image and identity, you should go with the versatile 
        Logo, which our experts designed most uniquely"
        ListItem01= "3D Logo"
        ListItem02= "Abstract Logo"
        ListItem03= "Animated Logo"
        ListItem04= "Illustrative Logo"
        ListItem05= "Branding"
        ListItem06= "Website Design"
        ListItem07= "Video Animation"
        ListItem08= "Digital Marketing"
        ButtonDarkLink= "#"
        ButtonDarkTitle= "Get a Design Now"
        ButtonLightLink= "tel:+44 07927768154"
        ButtonLightTitle= "+44 07927768154"
      />
      
      <PortfolioSec VersatileLogo />
      <Cta/>
      <PackageSec LogoDesignPkg/>
      <ComboPackage/>
      <LeaderShipSec/>
      <TestimonialSec/>
      <ContactSec/>
    </main>
  )
}
export default Logo3D;