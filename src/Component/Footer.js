import React from 'react'
import "../Component/style.css";
import {Link} from 'react-router-dom';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';

const Footer = () => {
  return (
   <>
   <section className="footer"> 
     <div className="conatiner">
      <div className="footer-innerbox">
            <strong>FRUIT & VEGETABLES</strong>
            <Link className='link'>Cuts & Sprouts</Link>
            <Link className='link'>Exotic Fruits & Veggies</Link>
            <Link className='link'>Fresh Fruits</Link>
            <Link className='link'>Fresh Vegetables</Link>
            <Link className='link'>Herbs & Seasonings</Link>
            <Link className='link'>Packaged Produce</Link>
            <Link className='link'>Party Trays</Link>
       
      </div>  
      <div className="footer-innerbox">
          <strong>BREAKFAST & DAIRY</strong>
            <Link className='link'>Butter and Margarine</Link>
            <Link className='link'>Cheese</Link>
            <Link className='link'>Eggs Substitutes</Link>
            <Link className='link'>Honey</Link>
            <Link className='link'>Marmalades</Link>
            <Link className='link'>Milk & Flavoured Milk</Link>
            <Link className='link'>Sour Cream and Dips</Link>
            <Link className='link'>Yogurt</Link>  
      </div>
      <div className="footer-innerbox">
            <strong>MEAT & SEAFOOD</strong>
            <Link className='link'>Beef</Link>
            <Link className='link'>Breakfast Sausage</Link>
            <Link className='link'>Chicken</Link>
            <Link className='link'>Crab and Shellfish</Link>
            <Link className='link'>Dinner Sausage</Link>
            <Link className='link'>Farm Raised Fillets</Link>
            <Link className='link'>SLinkced DeLink Meat</Link>  
      </div> 
      {/* <div className="footer-innerbox">
      <strong>BEVERAGES</strong>
            <Link className='link'>Coffee</Link>
            <Link className='link'>Craft Beer</Link>
            <Link className='link'>Drink Boxes & Pouches</Link>
            <Link className='link'>Milk & Plant-Based Milk</Link>
            <Link className='link'>Soda & Pop</Link>
            <Link className='link'>SparkLinkng Water</Link>
            <Link className='link'>Tea & Kombucha</Link>
            <Link className='link'>Water</Link>
            <Link className='link'>Wine</Link>  
        
      </div>  */}
        <div className="footer-innerbox">
        <strong>BREADS & BAKERY</strong>
            <Link className='link'>Butter and Margarine</Link>
            <Link className='link'>Cheese</Link>
            <Link className='link'>Eggs Substitutes</Link>
            <Link className='link'>Honey</Link>
            <Link className='link'>Marmalades</Link>
            <Link className='link'>Milk & Flavoured Milk</Link>
            <Link className='link'>Sour Cream and Dips</Link>
            <Link className='link'>Yogurt</Link>
        </div>

     </div>
     <div className='conatiner second-box'>
          <div className='left-box'>
             <p> <span><strong>Call Support</strong>&emsp;:&emsp;<FiPhoneCall color="#fff" size={12}/>&nbsp;<Link className='link'>8318753610</Link></span></p>
             <p> <span><strong>Head Office </strong>&emsp;:&emsp;<Link className='link'>   25/7 Sector C Krishna Colony Lucknow </Link></span></p>
          </div>
          <div className='right-box conatiner'>
            <div><Link className='link'>Privacy Policy</Link>&emsp;<Link className='link'>Teams & Conditions</Link></div>
            <Link><AiFillTwitterCircle color="#fff" size={25}/></Link>
            <Link><AiFillInstagram color="#fff" size={25}/></Link>
            <Link><AiFillFacebook color="#fff" size={25}/></Link>
            <Link><AiFillLinkedin color="#fff" size={25}/></Link>
            </div>
     </div>
   </section>
   </>

  )
}

export default Footer