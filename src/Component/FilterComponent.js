import React from 'react'
import Faq from "react-faq-component";
import { Link } from 'react-router-dom';
import './style.css';
const FilterComponent = () => {

    const data = {
        title: "Filter",
        rows: [
            {
                title: "Offer",
                content: <>
                <Link className='Filter-Link'>20% off on Fresh Vagitables</Link><br/>
                <Link className='Filter-Link'>40% off on Fresh Fruits</Link><br/>
                <Link className='Filter-Link'>50% off on Veg Burger</Link><br/>
                </>
            },
            {
                title: "Combo Offers",
                content: <>
                <Link className='Filter-Link'>Chicken + Veg Burger at just 100/-  </Link><br/>
                <Link className='Filter-Link'>Onion + Patato + Tamato 1kg at just 100/-  </Link>
                </>,
            },
            {
                title: "Categories",
                content: <>
                <Link className='Filter-Link'>Fresh Vagitables</Link><br/>
                <Link className='Filter-Link'>Fresh Fruits</Link><br/>
                <Link className='Filter-Link'>Beverages</Link><br/>
                <Link className='Filter-Link'>Fresh Meat</Link><br/>
                <Link className='Filter-Link'>Snacks</Link><br/>
                <Link className='Filter-Link'>Buger</Link><br/>
                </>
            },
            {
                title: "Price",
                content:<>
                <Link className='Filter-Link'>Rs 20/- </Link>&emsp;
                <Link className='Filter-Link'>Rs 50/-</Link>&emsp;
                <Link className='Filter-Link'>Rs 100/-</Link><br/>&emsp;
                </>
            },
        ],
    };
    
    const styles = {
        // bgColor: 'white',
        titleTextColor: "#de4b06",
        rowTitleColor: "#de4b06",
        bgColor:"none",
        rowContentColor: '#de4b06',
        arrowColor: "#de4b06",
    };
    
    const config = {
        // animate: true,
        // arrowIcon: "V",
        // tabFocus: true
    };

  return (
    <>
    
    <Faq
                data={data}
                styles={styles}
                config={config}
            />

    </>
  )
}

export default FilterComponent