import Link from 'next/link'
import Image from 'next/image'
import {logo, SpaceBr} from './Assets'
import Nav from './Nav'
import NavData from './data/NavData'
import ServicesNavData from './data/ServicesNavData'
import ServicesNav from './ServicesNav'
import styles from '../styles/Style.module.css'
import Button from './Button'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Modal } from 'antd';


const NavLinks =(val)=>{
    return(
        <Nav 
          key={val.id}
          NavTitle={val.NavTitle}
          NavLink={val.NavLink} 
        />
    )
  }
  

const Header =()=>{
    
    const [serviceMenu, setServiceMenu] = useState(false);
    const [scroll, setScroll] = useState(false);
    
    const servicesMenu =()=>{
        serviceMenu ? setServiceMenu(false) : setServiceMenu(true) 
        document.body.classList.toggle('mobileNavActive');
    }
   
    
    useEffect(() => {
    window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 1);
    });
    }, []);

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

        <header className={[scroll ? "HeaderFixed" : ""]}>
            <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-7 col-12">
                <div className={styles.headerLeft}>
                    <div className={styles.logo}>
                        <Link href="/"><a><Image src={logo} alt={'Logo Frank'} height={50} width={270} /></a></Link>
                    </div>
                    <div className={[styles.humBurger]+" d-block d-xl-none"}>
                        <button className={[serviceMenu ? "IconChange" : ""]} onClick={servicesMenu}>
                            <i className="far fa-bars"></i>
                        </button>
                    </div>
                    <div className={[styles.menuWrap]+""+[serviceMenu ? " MenuShow " : ""]}>
                        
                        <div className="MobileMenu d-xl-none d-block">
                            <ul className={styles.menuLinks}>   
                                {NavData.map(NavLinks)}

                                <ServicesNav />

                            </ul>
                        </div> 


                        <nav className={[styles.menu]+" d-none d-xl-block"}>
                            <ul className={styles.menuLinks}>   
                                {NavData.map(NavLinks)}
                            </ul>
                        </nav>
                    </div>
                </div>
                </div>

                <div className="col-md-5 d-none d-xl-block d-lg-none">
                <div className={styles.contactInfo}>
                    <ul>
                        <li><Link href="tel:+44 07927768154"><a><i className="fas fa-phone fa-flip-horizontal"></i>+44 07927768154</a></Link></li>
                        <li><Link href="#"><a><i className="fas fa-comments-alt"></i> Live Chat</a></Link></li>
                    </ul>
                    <div className={styles.btnDark}>
                        <button onClick={showModal}><Link href="#"><a className={styles.btnTheme}>Let's Get Started</a></Link></button>
                    </div>
                    <button className={[scroll ? "HumBurgerShow" : "HumBurgerHide"] +" "+ [serviceMenu ? "IconChange" : ""]} 
                    onClick={servicesMenu}><i className="far fa-bars"></i></button>
                </div>
                </div>
            </div>
            </div>

            <SpaceBr/>

            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-10 d-none d-xl-block w-laptop-100">
                    <div className={[styles.serviceMenu]+" "+ [scroll ? "ServiceMenuHide" : "ServiceMenuShow"] +" "+ [serviceMenu ? "MenuShow" : ""]}>
                        <div className="container">
                        <ul>
                            <ServicesNav />
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </header>
        </>
        )
}

export default Header;