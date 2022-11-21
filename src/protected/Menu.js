import React from 'react';
import { useRef } from 'react';
const Menu =() => {
  const hide = useRef("");
  const HideContent =()=>{
    hide.current.style.display="none";
  }
  return (
    <>
    <div className='menu' id="menu" ref={hide} onMouseLeave={HideContent}>
       <div><p>Offer</p></div>
       <div><p>Fresh Fruits</p></div>
       <div><p>Desserts</p></div>
       <div><p>Vegetables</p></div>
       <div><p>Call Support </p></div>
    </div>
    </>
  )
}

export default Menu