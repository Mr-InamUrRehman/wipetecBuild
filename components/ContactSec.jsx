import {SpaceBr, SpaceBrBr} from '../components/Space' 
import styles from '../styles/Style.module.css'
import Link from 'next/link'
import Image from 'next/image'

const ContactSec =()=>{
    const onSubmits =(event)=>{
       event.preventDefault();
    }
    return(
        <section className={[styles.ContactSec]+" "+ "pad-sec"}>
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-md-8 order-2 order-md-1">
                        <div className={styles.FormColumn}>
                            <div className={[styles.ContactHead]+" "+ "hding-2 para"}>
                                <h2>Build Your Brand with Experts</h2>
                                <SpaceBr/>
                                <p>Fill up the below form or call at <Link href="tel:+44 07927768154"><a>+44 07927768154</a></Link> to book a free consultation session with a branding-expert at the Logo Frank.</p>
                            </div>
                            <SpaceBrBr/>
                            <div className={styles.formBox}>
                                <form onSubmit={onSubmits}>
                                    <div className={[styles.fld]+" "+ [styles.fldHalf]+" "+ [styles.mr30]}>
                                        <span><label>Your Name</label></span>
                                        <input type="text" name="" required=""/>
                                    </div>

                                    <div className={[styles.fld]+" "+ [styles.fldHalf]}>
                                        <label>Last Name</label>
                                        <input type="text" name="" required=""/>
                                    </div>

                                    <SpaceBrBr/>


                                    <div className={[styles.fld]+" "+ [styles.fldSelect]}>
                                        <label className="w-100">What services are you looking for? Select all that apply.</label>
                                        <select  required="">
                                            <option>Initial Letter Logo Design</option>
                                            <option>Minimalist Logo Design</option>
                                            <option>Signature Logo Design</option>
                                            <option>Versatile Logo Design</option>
                                            <option>Vintage Logo Design</option>
                                            <option>Stationary Design</option>
                                            <option>Website Design</option>
                                            <option>Website Development</option>
                                            <option>Digital Marketing</option>
                                        </select>
                                    </div>

                                    <SpaceBrBr/>

                                    <div className={[styles.fld]+" "+ [styles.fldTextarea]}>
                                        <label>Additional Project Details</label>
                                        <textarea  required=""></textarea>
                                    </div>
                                    <SpaceBrBr/>

                                    <div className={styles.btnDark}>
                                        <input type="submit" name="" value="Get Started" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 order-md-1">
                        <div className={styles.ContactInfo}>
                            <div className={styles.ContactMdl}>
                                <Image src="/assets/contact/1.jpg" alt="" height={340} width={414}/>
                            </div>
                            <SpaceBrBr/>
                            <ul>
                                <li><i className="fal fa-phone"></i> <Link href="tel:+44 07927768154"><a><span>Get an Advice!</span>+44 07927768154</a></Link></li>
                                <li><i><Image src="/assets/contact/2.svg" alt="" height={37} width={43} /></i> <Link href="#"><a>Live Chat Now<span>We are here 24/7</span></a></Link></li>
                                <li><i><Image src="/assets/contact/3.svg" alt="" height={37} width={40} /></i> <Link href="mailto: info@RankLogo.com"><a><span>Online Service</span>info@RankLogo.com</a></Link></li>
                                <li><i><Image src="/assets/contact/4.svg" alt="" height={51} width={30} /></i> <Link href="#"><a><span> Address</span> Karachi Pakistan</a></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}
export default ContactSec;