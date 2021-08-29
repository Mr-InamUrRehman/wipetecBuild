import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GlobalBannerContent from './GlobalBannerContent'
import React from 'react';
import BannerData from './data/BannerData'


const  BannerSlider = () => {
  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: false,
    fade: true,
    
  };

  const BannerContent =(val)=>{


    
    return(
      
      <GlobalBannerContent
          key={val.id}
          BackgroundImage={val.BackgroundImage}
          Title={val.Title}
          Para={val.Para}
          ListItem01={val.ListItem01}
          ListItem02={val.ListItem02}
          ListItem03={val.ListItem03}
          ListItem04={val.ListItem04}
          Image01={val.Image01}
          Image02={val.Image02}
          Image03={val.Image03}
          ButtonLightTitle={val.ButtonLightTitle}
          ButtonLightLink={val.ButtonLightLink}
      />
      
    ) 
  }
  return (
    <>
    <Slider {...settings}>
      
        {BannerData.map(BannerContent)}
   
      </Slider>    
    </> 
  );
}
export default BannerSlider;