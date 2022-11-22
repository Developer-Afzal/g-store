import React, { useState, useEffect } from 'react';
import "../Component/style.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [email, setemail] =useState("");
  const [pwd, setpwd] = useState("");
  const Navigate = useNavigate();
  const usermail = localStorage.getItem('Useremail');
  const userpass = localStorage.getItem('pass');
    useEffect(()=>{
    if(localStorage.getItem('token')){
      Navigate("/g-store/dashboard");
    }
  });

  const loginUser=(e)=>{
    e.preventDefault();
    if(usermail==null || userpass == null){
      alert("you have not register");
    }else if(email==="" || pwd===""){
      alert("Input Feild is Empty");
    }else if(usermail!==email || userpass!==pwd){
      alert("Incorrect Username or Password");
      return Navigate("/g-store");
    }else{
      console.log("it is working");
      console.log({email, pwd});
        localStorage.setItem('token', `afafakj${pwd}5858`);
        Navigate('/g-store/dashboard')
        setemail("");
        setpwd("");
    }

  }

  return (
   <>
    <div className='form-container'>
        <form onSubmit={loginUser}>
            <h1>Login</h1>
            <input type="email" placeholder='Enter Your email' value={email} onChange={(e)=> setemail(e.target.value)}/><br/>
            <input type="password" placeholder='Enter Your Password' value={pwd} onChange={(e)=> setpwd(e.target.value)}/>
            <p>Forget Password</p>
            <button type='submit' className='button'>Login</button>
        </form>
    </div>
   </>
  )
}

export default Login;