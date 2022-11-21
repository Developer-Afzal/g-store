import React from 'react';
import "../Component/style.css";
const Offer = () => {
  return (
    <>
        <p className='heading'><span></span>Top Deals This Week</p>
        <div className='offer-container'>  
            <div className='offer-item' id="fruits">
                <p>FLAT 20% OFF </p>
                <b>Fruits</b>
            </div>
            <div className='offer-item' id="Desserts">
                <p>FLAT 30% OFF </p>
                <b>Desserts</b>
            </div>
            <div className='offer-item'>
                <p>FLAT 20% OFF </p>
                <b>Vegetables</b>
            </div>
        </div>
    </>
  )
}

export default Offer