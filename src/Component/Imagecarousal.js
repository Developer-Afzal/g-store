import React from "react";
import Slider from "react-slick";
import milk from '../Component/Images/372922.png';
import fruits from '../Component/Images/2892325.png';
import berverage from '../Component/Images/3655608.png';
import egges from '../Component/Images/2713457.png';
import freshveg from '../Component/Images/1886959.png';
import meat from '../Component/Images/3081928.png';
import biscut from '../Component/Images/2387997.png';

const Imagecarousal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000
  };

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000
  };



  return (
    <>
      <Slider className="slider-container" {...settings}>
      <div><img src={milk} height={100} width={100}/> </div>
      <div><img src={fruits} height={100} width={100}/> </div>
      <div><img src={berverage} height={100} width={100}/></div>
      <div><img src={egges} height={100} width={100}/></div>
      <div><img src={freshveg} height={100} width={100}/></div>
      <div><img src={meat} height={100} width={100}/></div>
      <div><img src={biscut} height={100} width={100}/></div>
    </Slider>
    <Slider className="mobile-slider-container" {...settings2}>
      <div><img src={milk} height={100} width={100}/> </div>
      <div><img src={fruits} height={100} width={100}/> </div>
      <div><img src={berverage} height={100} width={100}/></div>
      <div><img src={egges} height={100} width={100}/></div>
      <div><img src={freshveg} height={100} width={100}/></div>
      <div><img src={meat} height={100} width={100}/></div>
      <div><img src={biscut} height={100} width={100}/></div>
    </Slider>
    </>
  )
}

export default Imagecarousal;