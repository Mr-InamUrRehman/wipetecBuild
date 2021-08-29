import {SpaceBr, SpaceBrBr} from '../components/Space'
import styles from '../styles/Style.module.css'
import ValueContent from "../components/ValueContent"

const ValueSec =()=>{
    return(
        <section className={[styles.ValueSec]+" hding-2 para"}>
            <div className="container">
                <div className={[styles.ValueHead]+" text-center"}>
                    <h2>Why RankLogo?</h2>
                    <SpaceBrBr/>
                    <p>We are experts in designing logos that are creative and innovative to give the best brand identities. Every brand identity is essential as it gives life to the business, and the Logo is the main factor in showcasing your business to the world.</p>
                </div>
                <SpaceBrBr/>    

                <ul>
                    <ValueContent
                        Img={["/assets/icons/1.png"]}
                        Title= {["Delivery Time"]}
                        Para= {["Our logo designers are experts in creating different logotypes for your business and delivering them on time. RankLogo has expertise in providing services to their clients on time. We don't make you wait long as we value your time."]}
                    />
                    <ValueContent
                        Img={["/assets/icons/2.png"]}
                        Title= {["Transparency"]}
                        Para= {["RankLogo, as the most reliable logo design company in Pakistan, provides transparency while working with you. You will know each and every step of the process while working with us. We acknowledge them with every step their brand is going through.                        "]}
                    />
                    <ValueContent
                        Img={["/assets/icons/3.png"]}
                        Title= {["Affordable Prices"]}
                        Para= {["RankLogo provides the best logo designs for your business at affordable prices. While working with us, you don't have to worry about your money being wasted as we value your money by giving you quality services at affordable prices. "]}
                    />
                    <ValueContent
                        Img={["/assets/icons/4.png"]}
                        Title= {["Expert Logo Designers"]}
                        Para= {["We know what the importance of your business and its image identity is. Our expert logo designers closely monitor the brand requirements and design the Logo accordingly. You only have to tell your business requirements to our logo designers and rest assured, they will exactly design the Logo according to your needs.                        "]}
                    />
                </ul>
                <SpaceBrBr/>
                <p>
                RankLogo is here to design customized and professional logos for your business and give a unique brand identity. Our logo designers are ready to chat with you and give you the best services according to your business needs. Quality is what you will get from RankLogo. We believe in offering the best services by providing you stunning logos which your business needs to stand from the competitors.</p>
                <SpaceBr/>
                <p>Are you willing to scale your business with a fantastic brand identity? Come and let's chat with us.</p>
            </div>
        </section>
    )
}
export default ValueSec; 