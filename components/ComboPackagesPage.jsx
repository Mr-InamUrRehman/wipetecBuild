import styles from '../styles/Style.module.css'
import {SpaceBr, SpaceBrBr} from './Space'
import Link from 'next/link'
import Button from './Button'
import { Scrollbars } from 'react-custom-scrollbars';

const ComboPackagesPage =()=>{
    return( 
        <section>    
           <div className="container">      
           <div className={[styles.PackageBox]}>
                <div className={styles.PackageBoxHead}>
                    <h4>Lite Logo <br /> Package</h4>
                </div>
                <div className={styles.PackageBoxMid}>
                    
                    <div className="row">
                      <div className="col-md-4">
                      <div className={styles.PackageMidHead}>
                        <h5><del>$149.00</del>$39.00 <span>ONLY</span></h5>
                        <SpaceBr/>
                        <p>Suitable for potential super-startups and brand revamps for companies.</p>
                      </div>
                      <SpaceBr/>    
                      <div className={styles.PackageMidList}>
                        <Scrollbars style={{ height: 200 }}
                            universal={true}>    
                            <ul>
                                <li>3 Custom Logo Design Concepts</li>
                                <li>1 Dedicated Logo Designer</li>
                                <li>2 Rounds of Revisions</li>
                                <li>JPEG and PNG File Formats</li>
                                <li>48 Hours Turn Around Time</li>
                                <li>100% Satisfaction Guarantee</li>
                                <li>100% Ownership Rights</li>
                            </ul>
                        </Scrollbars>
                        <SpaceBrBr/>

                        <h6>Add on: <strong>$50</strong> for 24 Hours Rush Delivery</h6>
                        <SpaceBrBr/>

                        <div className={[styles.btnDark] +" "+ [styles.BtnPackage]}>
                            <Button Url="#" Title="Order Now"/>
                        </div>
                      </div>
                      </div>
                      <div className="col-md-8">

                      </div>
                    </div>
                    
                </div>
                <div className={[styles.PackageFooter]+" "+ "text-center"}>
                    <div className={[styles.PackageFooterLeft]}>
                        <Link href="tel:(866) 217 9772">
                            <a>
                                <span>Share your idea?</span>
                                (866) 217 9772
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
            </div>
        </section>    
    )
}
export default ComboPackagesPage;    