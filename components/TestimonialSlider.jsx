import styles from '../styles/Style.module.css'
import {SpaceBrBr} from '../components/Space'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Scrollbars } from 'react-custom-scrollbars';

const TestimonialSlider =(props)=>{
    return(
    <li>
        <div className={[styles.TestimonialBox]}>
            <div className={[styles.TestimonialReview]}>
                <Scrollbars style={{ height: 100 }}
                    universal={true}>  
                    <p>{props.Review}</p>
                </Scrollbars>
            </div>
            <SpaceBrBr/>
            <div className={styles.TestimonialRating}>
                <ul>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                </ul>
            </div>
        </div>
        <SpaceBrBr/>
        
        <div className={styles.TestimonialFooter}>
            <div className="row m-0 align-items-center">
                <div className="col-3 col-md-3">
                    <div className={[styles.TestimonialProfile]}>
                        <span>{props.NameShort}</span>
                    </div>
                </div>
                <div className="col-9 col-md-9">
                    <div className={[styles.TestimonialProfileName]}>
                        <h6>{props.Name}<span>{props.Country}</span></h6>
                    </div>
                </div>
            </div>
        </div>
    </li>
    )
}
export default TestimonialSlider;