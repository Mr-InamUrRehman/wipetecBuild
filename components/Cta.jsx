import {SpaceBr, SpaceBrBr} from '../components/Space' 
import styles from '../styles/Style.module.css'
import Button from './Button'
import { useState } from 'react';
import { useRouter } from 'next/router'
import { Modal } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

const Cta =()=>{
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

        <section className={[styles.CtaSec]+" "+ "pad-sec text-center"}>
            <div className={[styles.CtaContent]+" "+ "hding-2 para"}>
                <h2>Ready to Expand?</h2>
                <SpaceBr/>
                
                <p>RankLogo is always here to help you and assist you in designing services. <br/>
Contact us for any designing services you need in order to make <br/>
your business shine and stand from the competitors. </p>
                <SpaceBrBr/>

                <div className={[styles.BtnGroup]+" "+ "justify-content-center"}>
                    <div className={[styles.btnDark]}>
                      <button onClick={showModal}><Link href="#"><a className={styles.btnTheme}>Let's Get Started</a></Link></button>
                    </div>
                    <div className={[styles.BtnTransparent]+" "+[styles.BtnDarkBorder]}>
                      <Button Url="tel:+44 07927768154" Title="+44 07927768154"/>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Cta;