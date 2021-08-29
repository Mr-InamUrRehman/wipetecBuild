
import styles from '../styles/Style.module.css'
import ClientSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClientsData from './data/ClientsData'
import ClientContent from './ClientContent'

const  ClientDataContent=(val)=>{
    return(
        <ClientContent
          key={val.id}
          Url={val.Url}
          ImgSrc={val.ImgSrc}
        />
    )
}

const Clients =()=>{
    let settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 824,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                adaptiveHeight: true
              }
            }
        ]
    };
    
    return(
        <section className={styles.ClienSec}>
            <div className="container">
                <ul>
                <ClientSlider {...settings}>
                    {ClientsData.map(ClientDataContent)}
                </ClientSlider>
                </ul>
            </div>
        </section>
    )
}
export default Clients;