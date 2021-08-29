import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GlobalBannerContent from './GlobalBannerContent'
import React from 'react';


const  BannerSlider = (props) => {
 
    return(
      <GlobalBannerContent
        id={0}
        BackgroundImage= {props.BackgroundImage}
        BackgroundImageInner= {props.BackgroundImageInner}
        Title= {props.Title}
        Para= {props.Para}
        ListItem01= {props.ListItem01}
        ListItem02= {props.ListItem02}
        ListItem03= {props.ListItem03}
        ListItem04= {props.ListItem04}
        Image01= {props.Image01}
        Image02= {props.Image02}
        Image03= {props.Image03}
        ButtonLightTitle= "+44 07927768154"
        ButtonLightLink= "tel+44 07927768154"
      />
      
    ) 
}
export default BannerSlider;