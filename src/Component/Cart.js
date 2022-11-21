import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "../Component/style.css";
import MUIDataTable from "mui-datatables";
import { Avatar } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { remove } from '../features/Cartslice';
const Cart = () => {
  const Dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem('token')){
      navigate("/");
    }
  },[]);
    const products = useSelector(state=> state.Cart); 
    console.log(products);
    const columns = [
      {name:"image", label:"", options:{customBodyRender:(itm)=>{
        return(
          <Avatar src={itm} variant="square" sx={{ width:100, height: 56 }}/>
        )
      }}},
      {name:"name", label:"Item" },
      {name:"weight", label:"Qty"},
      {name:"price", label:"price"},
      {name:"Actions", label:"Actions", options:{customBodyRender:(itm)=>{
        const handle =(itm)=>{
            // Dispatch(remove(products));
            console.log(itm);
        }
        return(
          <DeleteOutlineIcon onClick={(itm)=>handle(itm.id)}/>
        )
      }}}
    ];
    
  return (
    <>
       <div className='Cart-continer'>
          <div className='outer-Box'>
              <h1>Cart Page</h1>
              <div><MUIDataTable  title={"Items List"} data={products} columns={columns}/></div>
          </div>
      </div>
    </>
  )
}

export default Cart