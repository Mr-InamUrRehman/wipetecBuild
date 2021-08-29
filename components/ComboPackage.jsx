import styles from '../styles/Style.module.css'
import {SpaceBr, SpaceBrBr} from '../components/Space'
import Link from 'next/link'
import Image from 'next/image'
import {ComboPackageContentList, ComboPackageContentTitle} from '../components/ComboPackageContent'
import Button from './Button'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Modal } from 'antd';

const ComboPackage =()=>{
    const [isModalVisible, setIsModalVisible] = useState(false);
    const router = useRouter()
  
    const showModal = (e) => {
        e.preventDefault();
        setIsModalVisible(true);
    };
    
    const handleSubmit =(e) =>{
        e.preventDefault();
    }
  
    const handleClick = (e) => {
        e.preventDefault()
        router.push('checkout/project-breif.php')
    }
  
    const handleOk = () => {
        setIsModalVisible(false);
    };
  
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    
  
    return(
        <>
  
        <Modal footer={false} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <div id="startedPop">
                <div className="container hding-2">
                    <div className="row align-items-center">
                        <div className="col-md-6 p-0">
                            <div className="popup-mdl">
                            <Image src="/1.jpg" className="w-100 d-block" alt="" layout="responsive" objectFit="cover" height="125px" width="100%"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="popup-form-content text-center">
                            <h3>Bringing Your Idea To Life<br/>With A Creative Design</h3>
                            </div>
                            <div className="space"><br/><br/></div>
                            <div className="popup-form">
                            <form onSubmit={handleSubmit}>
                                <div className="fld-input">
                                    <input type="text" name="" placeholder="Full Name" required="" />
                                </div>
                                <div className="fld-input">
                                    <input type="email" name="" placeholder="Email Address" required="" />
                                </div>
                                <div className="fld-input">
                                    <input type="number" name="" placeholder="Phone Number" required="" />
                                </div>
                                <div className="fld-input fld-textarea">
                                    <textarea placeholder="Message" required="" ></textarea>
                                </div>
                                <div className="fld-btn">
                                    <input type="submit" name="" value="Get Started Now" onClick={handleClick} />
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
        <section className={[styles.ComboPackageSec]+" "+ "pad-sec"}>
            <div className="container">
                <div className={[styles.ComboPackageHead]+" "+ "hding-2 para text-center"}>
                    <h2>The logo with fantastic shapes</h2>
                    <SpaceBr/>
                    <p>Creative minds at RankLogo work with a diverse range of colors that will work for all your business needs. After examining your website and business's prominent colors, we opt for the themes required for your business and help increase the brand vision.</p>
                </div>
                <SpaceBrBr/>
                <div className="row align-items-center">
                    <div className="col-md-3">
                        <div className={styles.ComboPackageContent}>
                            <ComboPackageContentTitle 
                                Title="Logo Design"/>
                            <SpaceBrBr/>
                            <ul>
                                <ComboPackageContentList 
                                List="Unlimited Concepts"/>     
                                <ComboPackageContentList
                                List="Unlimited Revisions"/>
                                <ComboPackageContentList
                                List="12 Dedicated Logo Designers"/>
                                <ComboPackageContentList
                                List="Turnaround 48-72 hrs"/>
                            </ul>
                        </div>

                        <SpaceBrBr />

                        <div className={styles.ComboPackageContent}>
                            <ComboPackageContentTitle 
                                Title="WEB DESIGN"/>
                            <SpaceBrBr/>
                            <ul>
                                <ComboPackageContentList 
                                List="10 Web Pages"/>     
                                <ComboPackageContentList
                                List="Unlimited Revisions"/>
                                <ComboPackageContentList
                                List="1 Year Free Domain Registration"/>
                                <ComboPackageContentList
                                List="Content Management System"/>
                                <ComboPackageContentList
                                List="(Admin Panel)"/>
                                <ComboPackageContentList
                                List="Search Engine Submission"/>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 order-last">
                        <div className={styles.ComboPackageMdl}>
                            <Image src="/assets/packages/1.png" alt=""  width={460} height={566} />
                        </div>
                    </div>
                    <div className="col-md-3 order-md-last">
                        <div className={styles.ComboPackageContent}>
                            <ComboPackageContentTitle 
                                Title="STATIONERY DESIGN"/>
                            <SpaceBrBr/>
                            <ul>
                                <ComboPackageContentList 
                                List="Business Card Design"/>     
                                <ComboPackageContentList
                                List="Letterhead Design"/>
                                <ComboPackageContentList
                                List="Complimentary Slip Design"/>
                                <ComboPackageContentList
                                List="Brochure Design"/> 
                            </ul>
                            <SpaceBrBr/>
                            <ComboPackageContentTitle 
                                Title="BANNER DESIGN"/>
                            <SpaceBrBr/>    
                            <ul>
                                <ComboPackageContentList 
                                List="2 Design Concepts"/>     
                                <ComboPackageContentList
                                List="Free Grayscale Format"/>
                                <ComboPackageContentList
                                List="Free Color Options"/>
                            </ul>
                            <SpaceBrBr/>
                            <ComboPackageContentTitle 
                                Title="SOCIAL MEDIA DESIGN"/>
                            <SpaceBrBr/>    
                            <ul>
                                <ComboPackageContentList 
                                List="Any 3 of Your Choice"/>     
                                <ComboPackageContentList
                                List="(Facebook, LinkedIn, Twitter, YouTube)"/>
                            </ul>
                        </div>
                    </div>
                </div>
                <SpaceBrBr/>
                
                <div className={[styles.BtnGroup]+" "+ "justify-content-center"}>
                    <div className={[styles.BtnLight]}>
                      <Button Url="#" Title="Live Chat Now"/>
                    </div>
                    <div className={[styles.BtnTransparent]}>
                      <Button Url="tel:+44 07927768154" Title="+44 07927768154"/>
                    </div>
                    <div className={[styles.BtnLight]}>
                        <button onClick={showModal}><Link href="#"><a className={styles.btnTheme}>Let's Get Started</a></Link></button>
                    </div>
                  </div>

            </div>
        </section>
        </>
    )
}
export default ComboPackage;