import styles from '../styles/Style.module.css'
import {SpaceBr, SpaceBrBr} from '../components/Space'
import Link from 'next/link'
import Image from 'next/image'
import Button from './Button'
import { Scrollbars } from 'react-custom-scrollbars';
import { useState } from 'react';
import { Modal } from 'antd';
import { useRouter } from 'next/router'

const PackageBox =(props)=>{

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
        <li>
            <div className={styles.PackageBox}>
                <div className={styles.PackageBoxHead}>
                    <h4>{props.Title}</h4>
                </div>
                <div className={styles.PackageBoxMid}>
                    <div className={styles.PackageMidHead}>
                        <h5>{props.Price}</h5>
                        <SpaceBr/>
                        <p>{props.Para}</p>
                    </div>
                    <SpaceBr/>
                    <div className={styles.PackageMidList}>
                        
                        <Scrollbars style={{ height: 200 }}
                            universal={true}>    
                            <ul>
                                {props.PkgList}
                            </ul>
                        </Scrollbars>
                        <SpaceBrBr/>

                        <h6>{props.AddOn}</h6>
                        <SpaceBrBr/>

                        <div className={[styles.btnDark] +" "+ [styles.BtnPackage]}>
                            <button onClick={showModal} className="w-100"><Button Url="" Title="Order Now"  /></button>
                        </div>
                    </div>
                </div>
                <div className={[styles.PackageFooter]+" "+ "text-center"}>
                    <div className={[styles.PackageFooterLeft]}>
                        <Link href="tel:+44 07927768154">
                            <a>
                                <span>Share your idea?</span>
                                +44 07927768154
                            </a>
                        </Link>
                    </div>
                    <div className={[styles.PackageFooterRight]}>
                        <Link href="#">
                            <a>
                                <span>Want to discuss?</span>
                                Live Chat Now
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </li>
        </>
    )
}
export default PackageBox;