import { NavLink, useNavigate} from 'react-router-dom';
import { useRef } from 'react';
import cart from '../Component/Images/1170678.png';
import magnifier from '../Component/Images/magnifier.png';
import { AiOutlineUser } from 'react-icons/ai';
import Menu from './Menu';
import '../Component/style.css';
import { useSelector } from 'react-redux';
const Header = (props) => {
  const navigate = useNavigate("");
  const hidemenu = useRef("");
  const {kart} = useSelector(state=> state.Counter)
    const logout = () =>{
      navigate('/gstore');
        localStorage.clear();
       setTimeout(displaymsg, 2000);
    }
    const displaymsg=()=>{
      alert("You Have Successfully Logout")
    }

       function showUserinfo(){
      document.getElementById('userinfo').style.display="flex"; 
    }
      function HideUserinfo(){
        hidemenu.current.style.display="none";
    
    }

  return (
    <>
       <nav>
          <span><div className='menu-btn' onMouseEnter={showlist}><div></div><div></div><div></div></div> <NavLink className="Link" to="/gstore"><p>G-STORE</p></NavLink></span>
          <span><input tyle="text"/><img src={magnifier} alt="search" className='lens'/></span>
          <span><NavLink to="/gstore/Cart" className="Link"><img src={cart} alt="cart"/><b>{kart}</b></NavLink>&nbsp;
          <NavLink className="Link" onMouseOver={showUserinfo} ><AiOutlineUser size={40}/></NavLink></span>
      </nav>
      <div className='userinfo' id="userinfo" ref={hidemenu} onMouseLeave={HideUserinfo}>
      <div className='profile'></div>  
          <div className='userinfo-sublist'>
            <div><p>{props.user}</p></div>
            <div><p>Address : &nbsp;<NavLink>Edit</NavLink></p></div>
            <div><p>Order History</p></div>
            <div><p>Setting</p></div>
            <div><p onClick={logout}>Logout</p></div>
          </div>
      </div>
      <Menu id="menu"/>
    </>
  );

    function showlist(){

      document.getElementById('menu').style.display="block"; 
    }

  

}

export default Header;
