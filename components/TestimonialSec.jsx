import {SpaceBr, SpaceBrBr} from '../components/Space'
import styles from '../styles/Style.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialSlider from '../components/TestimonialSlider'

const TestimonialSec =()=>{
    let settings = {
          arrows: false,
          dots: false,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
          responsive: [
            {
              breakpoint: 824,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true
              }
            }
        ]
    };

    return(
        <section className={[styles.TestimonialSec]+" "+ "pad-sec para"}>
            <div className="container">
                <div className={[styles.TestimonialHead]+" "+ "hding-2 text-center"}>
                    <h2>They Think We’re Awesome</h2>
                    <p>Check out what some of our super cool customers<br/> are saying about us.</p>
                </div>
                <SpaceBrBr/>
                <SpaceBrBr/>
                <ul className={styles.TestimonialList}>
                <Slider {...settings}>
                    <TestimonialSlider
                        Review={["The seller is fantastic and this is my second order because of how they capture dreams and ideas with creative designs that can be branded. The seller is professional, courteous, educated about designs of business logo and all work is timely. You can not go wrong with this gig. Great job!!!!!!!!!!"]}
                        NameShort={["B"]}
                        Name={["Brucemosley"]}
                        Country={["United States"]}
                    />
                    <TestimonialSlider
                        Review={["The seller was very prompt and creative in your work and delivery there of. I will definitely be reaching out to her soon for additional work."]}
                        NameShort={["B"]}
                        Name={["BBrecovery"]}
                        Country={["United States"]}
                    />
                    <TestimonialSlider
                        Review={["RankLogo.com is very talented and easy to work with. She did excellent work designing my company logo. Communication was awesome. RankLogo delivered very quickly the initial work and modifications. I will definitely work with her in the future!"]}
                        NameShort={["C"]}
                        Name={["Clakisha"]}
                        Country={["United States"]}
                    />
                    <TestimonialSlider
                        Review={["Good job, professional and Very fast response time ."]}
                        NameShort={["S"]}
                        Name={["Slimfitness"]}
                        Country={["Germany"]}
                    />

                    <TestimonialSlider
                        Review={["Thank you very much for the fast delivery and the beautiful Logo."]}
                        NameShort={["M"]}
                        Name={["Mirella69"]}
                        Country={["Germany"]}
                    />
                    <TestimonialSlider
                        Review={["RankLogo.com not only met my expectations, RankLogo.com did an amazing job. I had no changes and was fully satisfied. "]}
                        NameShort={["R"]}
                        Name={["Rainna2010"]}
                        Country={["United Kingdom"]}
                    />
                    <TestimonialSlider
                        Review={["Seller was very receptive and kept me informed as we discussed ideas. Very prompt and reliable. This is the eight time I have worked with this seller. I would highly recommend this seller."]}
                        NameShort={["A"]}
                        Name={["Achandler4"]}
                        Country={["United States"]}
                    />
                    <TestimonialSlider
                        Review={["This is the almost ninth time I have worked with this seller. I would highly recommend this seller."]}
                        NameShort={["T"]}
                        Name={["Tmdmatlanta"]}
                        Country={["United States"]}
                    />

                    <TestimonialSlider
                        Review={["My 3rd time working with zia and i have always been happy. Great customer service."]}
                        NameShort={["B"]}
                        Name={["Blackdiamond21"]}
                        Country={["United Kingdom"]}
                    />
                    <TestimonialSlider
                        Review={["Awesome work. highly recommended. got a repeat customer here."]}
                        NameShort={["A"]}
                        Name={["Andrewbouro"]}
                        Country={["Solomon Islands"]}
                    />
                    <TestimonialSlider
                        Review={["Awesome - less than 24 hour service! Great quality! Didn't even have to make one revision. I will be back! Thank you for the quick turnaround!"]}
                        NameShort={["S"]}
                        Name={["Slangsellshomes"]}
                        Country={["United States"]}
                    />
                    <TestimonialSlider
                        Review={["Skilled designer, polite and professional. The first mock up of logos were done in 24 hours, but that was fine by me as I was not on a deadline. I was provided with several different designs to choose from and I had a couple things changed to end up with the final product. Overall I would recommend and use again. Thank you!"]}
                        NameShort={["K"]}
                        Name={["Kahredanicholas"]}
                        Country={["Antigua and Barbuda"]}
                    />
                </Slider>
                </ul>
            </div>
        </section>
    )
}
export default TestimonialSec;