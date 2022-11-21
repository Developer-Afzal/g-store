import axios from 'axios';
import React from 'react';
import Menu from './Menu';
import { useNavigate , Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import Banner from '../Component/Banner';
import Footer from '../Component/Footer';
import Offer from '../Component/Offer';
import { useDispatch } from 'react-redux';
import {add} from '../features/Cartslice';
import '../Component/style.css';
import Header from './Header';
import {AiFillStar} from 'react-icons/ai';
import FilterComponent from '../Component/FilterComponent';
import Imagecarousal from '../Component/Imagecarousal';

const Dashboard = () => {
  const Dispatch = useDispatch();
  const [list, setlist] = useState([]);
  const [fruitslist, setfruitslist] = useState([]);
  const [dessertslist, setdessertslist] = useState([]);
  const [profileName, setprfileName] = useState('');
  const navigate = useNavigate();

  useEffect(()=>{
    if(!localStorage.getItem('token')){
      navigate("/gstore");
    }else{
      axios.get('https://gstoreapi.herokuapp.com/v1/api/vegitables').then(res=> setlist(res.data));
      axios.get('https://gstoreapi.herokuapp.com/v1/api/fruites').then(res=> setfruitslist(res.data));
      axios.get('https://gstoreapi.herokuapp.com/v1/api/desserts').then(res=> setdessertslist(res.data));
      setprfileName();
    }
  },[]);
let itemcount=0;
  const Handle = (itm)=>{
      Dispatch(add(itm));
      console.log(itm);
      Dispatch({
        type:"increase",
      });
  }
  console.log(list);
  // const result = list.map((itm)=><div key={itm.id} className="card"><div><img src={itm.image}/></div><div className="overlay-box" ><p>Purchse fresh {itm.name} just <br/>at {itm.price}/- Rs only </p><button>BUY</button></div><div className="rate"><p>{itm.name}</p><p>Rs: {itm.price}/-</p> <button>ADD </button>  </div></div>);
      const result = list.filter(itm=> itm.id<=8);
      const showdata =result.map((itm)=><div key={itm.id} className="card"><div><img src={itm.image} alt="item"/></div><div className="overlay-box" ><p>Purchse {itm.weight}  fresh {itm.name} just <br/>at {itm.price}/- Rs only </p><button>View</button></div><div className="rate"><p>{itm.name}</p><div><AiFillStar color='#f7ab54'/><AiFillStar color='#f7ab54'/><AiFillStar color='#f7ab54'/><AiFillStar color='#f7ab54'/><AiFillStar color='#f7ab54'/></div><p>Rs: {itm.price}/-</p> <button onClick={()=>Handle(itm)}>ADD TO CART</button>  </div></div>);
      const fruitsdata = fruitslist.filter(itm=> itm.id<=8);
      const fruitsshowdata = fruitsdata.map((itm)=><div key={itm.id} className="card"><div><img src={itm.image} alt="item"/></div><div className="overlay-box" ><p>Purchse {itm.weight} fresh {itm.name} just <br/>at {itm.price}/- Rs only </p><button>View</button></div><div className="rate"><p>{itm.name}</p><div><AiFillStar color='#f7ab54'/><AiFillStar color='#f7ab54'/><AiFillStar color='#f7ab54'/><AiFillStar color='#f7ab54'/><AiFillStar color='#f7ab54'/></div><p>Rs: {itm.price}/-</p> <button onClick={()=>Handle(itm)}>ADD TO CART</button>  </div></div>);
      const dessertsdata = dessertslist.filter(itm=> itm.id<=8);
      const dessertsshowdata = dessertsdata.map((itm)=><div key={itm.id} className="card"><div><img src={itm.image} alt="item"/></div><div className="overlay-box"><p>Purchse fresh {itm.name} just <br/>at {itm.price}/- Rs only </p><button>View</button></div><div className="rate"><p>{itm.name}</p><div><AiFillStar color='#f7ab54'/><AiFillStar color='#f7ab54'/><AiFillStar color='#f7ab54'/><AiFillStar color='#f7ab54'/></div><button onClick={()=>Handle(itm)}>ADD TO CART</button>  </div></div>);
 
return (
    <>
      <Header user={(localStorage.getItem('Fname'))+" "+(localStorage.getItem('Lname'))} count={itemcount}/>
      <Menu/>
      <Banner/>
      <Offer/>
      <div className="categories">
        <div className='categories-filter'><FilterComponent/></div>
        <div><Imagecarousal/></div>
      </div>
        <div><p className='heading'>Fresh Vegetables</p></div>
        <div className="dashboard-container">  
        <div className='dashboard-right-container'>{showdata}</div>
        </div>
        <div><p className='heading'>Fresh Fruits</p></div>
        <div className="dashboard-container">  
        {/* <div className='dashboard-left-container'></div> */}
        <div className='dashboard-right-container'>{fruitsshowdata}</div>
        </div>
        <div><p className='heading'>Desserts</p></div>
        <div className="dashboard-container">  
        {/* <div className='dashboard-left-container'><h1>Hello i am afzal ansari</h1></div> */}
        <div className='dashboard-right-container'>{dessertsshowdata}</div>
        </div>
      <Footer/>
    </>
  )
}

export default Dashboard;