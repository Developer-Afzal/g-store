import React from 'react';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Register = () => {
  const navigate = useNavigate(" ");
  const [fname, setfname]=useState("");
  const [lname, setlname]=useState("");
  const [email, setemail]=useState("");
  const [phone, setphone]=useState("");
  const [pwd, setpwd]=useState("");

  const userReg =(event)=>{
    event.preventDefault()
    if(fname=="" || lname==""|| email=='' || phone=="" || pwd==""){
      alert('Input box is empty');
      return navigate("/register");
    }else if(phone.length>10){
      alert('Incorrect phone number, Only 10 digit Allow');
      return navigate("/register");
    }
    localStorage.setItem("Fname",fname);
    localStorage.setItem("Lname",lname);
    localStorage.setItem("Useremail",email);
    localStorage.setItem("PhoneNo",phone);
    localStorage.setItem("pass", pwd);
    setfname("");
    setlname("");
    setemail("");
    setphone("");
    setpwd("");
    navigate("/gstore");
    setTimeout(showmsg, 300);
  }

  const showmsg =()=>{
    alert("Successfully Registered");

  }


  return (
    <>
      <Header/>
        <div className='register-container'>
        <form onSubmit={userReg}>
            <h1>SignUP Page</h1>
            <input type="text" placeholder='Fisrt Name' value={fname} onChange={(e)=> setfname(e.target.value)}/><br/>
            <input type="text" placeholder='Last Name' value={lname} onChange={(e)=> setlname(e.target.value)}/><br/>
            <input type="email" placeholder='Email' value={email} onChange={(e)=> setemail(e.target.value)}/><br/>
            <input type="tel" placeholder='Phone' value={phone} onChange={(e)=> setphone(e.target.value)}/><br/>
            <input type="password" placeholder='Enter Your Password' value={pwd} onChange={(e)=> setpwd(e.target.value)}/><br/>
            <button type='submit' className='button'>Submit</button>
        </form>
        </div>
        <Footer/>
    </>
  )
}

export default Register;