import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Style.module.css'
import {SpaceBr, SpaceBrBr} from '../components/Space'

const Footer =()=>{
    return(
      <footer className={[styles.FooterSec]+" "+ "para pad-sec"}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
                <div className={styles.Widget}>
                  <Link href="/"><a> <Image src="/footer-logo.png" alt="Logo" height={50} width={270} /> </a></Link>
                  <SpaceBr/>
                   <p>RankLogo considers all their customers as their partners and establishes a strong brand image and identity of their companies. Our clients sometimes need a customized logo for their brand, and some clients leave it on us to create a remarkable logo for their brand.</p>
                </div>
            </div>
            

            <div className="col-md-2">
               <div className={styles.Widget}>
                  <h6>Quick Links</h6>
                  <SpaceBrBr/>

                  <ul className={[styles.QuickLinks]}>
                      <li><Link href="/"><a>Home</a></Link></li>
                      <li><Link href="/portfolio"><a>Portfolio</a></Link></li>
                      <li><Link href="/"><a>Blog</a></Link></li>
                      <li><Link href="/about-us"><a>About Us</a></Link></li>
                      <li><Link href="/contact-us"><a>Contact Us</a></Link></li>
                  </ul>
               </div>
            </div>

            <div className="col-md-3">
               <div className={styles.Widget}>
                  <h6>Our Services</h6>
                  <SpaceBrBr/>
                  
                  <ul className={[styles.QuickLinks]}>
                      <li><Link href="/initial-letter-logo"><a>Initial Letter Logo Design</a></Link></li>
                      <li><Link href="/minimalist-logo"><a>Minimalist Logo Design</a></Link></li>
                      <li><Link href="/signature-logo"><a>Signature Logo Design</a></Link></li>
                      <li><Link href="/versatile-logo"><a>Versatile Logo Design</a></Link></li>
                      <li><Link href="/vintage-logo"><a>Vintage Logo Design</a></Link></li>
                      <li><Link href="/stationary"><a>Stationary Design</a></Link></li>
                      <li><Link href="/web-design"><a>Website Design</a></Link></li>
                      <li><Link href="/web-development"><a>Website Development</a></Link></li>
                      <li><Link href="#"><a>Digital Marketing</a></Link></li>
                  </ul>
                  
               </div>
            </div>

            <div className="col-md-3">
            <div className={styles.Widget}>
                  <h6>Contact Us</h6>
                  <SpaceBrBr/>
                  
                  <ul className={[styles.QuickLinks]+" "+ [styles.ContactLinks]}>
                      <li><span><i className="fal fa-phone fa-flip-horizontal"></i></span> <Link href="tel:+44 07927768154"><a>+44 07927768154</a></Link></li>
                      <li><span><i className="fal fa-envelope"></i></span> <Link href="mailto:info@RankLogo.com"><a> info@RankLogo.com</a></Link></li>
                      <li><span></span> <Link href="mailto:support@RankLogo.com"><a> support@RankLogo.com</a></Link></li>
                      <li><span><i className="fal fa-map-marker-alt"></i></span> <p>Karachi Pakistan</p></li>
                  </ul>
               </div>
               <SpaceBrBr/>
               <div className={styles.Widget}>
                  <h6>Social Links</h6>
                  <SpaceBr/>
                  
                  <ul className={[styles.SocialLinks]}>
                      <li><Link href="#"><a><i className="fab fa-facebook"></i></a></Link></li>
                      <li><Link href="#"><a><i className="fab fa-twitter"></i></a></Link></li>
                      <li><Link href="#"><a><i className="fab fa-linkedin"></i></a></Link></li>
                      <li><Link href="#"><a><i className="fab fa-instagram"></i></a></Link></li>
                      <li><Link href="#"><a><i className="fab fa-youtube"></i></a></Link></li>
                  </ul>
               </div>
            </div>

          </div>
        </div>
        <div className={styles.copyright}>
          <div className="container">
            <div className="row align-items-center">
                <div className="col-md-4">
                  <ul>
                     <li><Link href="/terms-of-use"><a>Terms of Use</a></Link></li> 
                     <li><Link href="/privacy-policy"><a>Privacy Policy</a></Link></li> 
                  </ul>
                </div>
                <div className="col-md-4 text-center">
                  <p>© RankLogo 2021. All rights reserved.</p>
                </div>
                <div className="col-md-4 text-center text-md-right">
                  <Image src="/payment.png" alt="" width={270} height={34}/>
                </div>
            </div> 
          </div>
        </div>
      </footer>
    )
}
export default Footer; 