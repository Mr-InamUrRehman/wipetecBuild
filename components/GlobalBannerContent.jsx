import styles from '../styles/Style.module.css'
import {SpaceBr, SpaceBrBr} from '../components/Space' 
import Button from './Button'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';
import { useRouter } from 'next/router'
import { Modal } from 'antd';

const GlobalBannerContent =(props)=>{
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

        <ul>
        <li>
        <section className={[styles.mainBanner] +" "+ "para"} style={{ backgroundImage: [props.BackgroundImage]} }>
          <div className="container">
            <div className="row justify-content-start">
              <div className="col-md-7">
                <div className={styles.BannerContent}>
                  <h1>{props.Title}</h1>
                  <SpaceBr/>
                  <p>{props.Para}</p>
                  <SpaceBrBr/>

                  <ul>
                    <li>{props.ListItem01}</li>
                    <li>{props.ListItem02}</li>
                    <li>{props.ListItem03}</li>
                    <li>{props.ListItem04}</li>
                  </ul>
                </div>
                <SpaceBrBr/>

                <div className={styles.BannerFooter}>
                  <ul>
                    <li><Link href="#"><a><Image src={props.Image01} alt="" width={128} height={62} /></a></Link></li>
                    <li><Link href="#"><a><Image src={props.Image02} alt="" width={96} height={41} /></a></Link></li>
                    <li><Link href="#"><a><Image src={props.Image03} alt="" width={128} height={34} /></a></Link></li>
                  </ul>
                  <SpaceBrBr/>
                  
                  <div className={[styles.BtnGroup]}>
                    <div className={[styles.BtnLight]}>
                      <button onClick={showModal}><Link href="#"><a className={styles.btnTheme}>Get A Design Now</a></Link></button>
                    </div>
                    <div className={[styles.BtnTransparent]}>
                      <Button Url={props.ButtonLightLink} Title={props.ButtonLightTitle}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </li>
        </ul>
        </>
    )
}
export default GlobalBannerContent;