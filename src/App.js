import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CartScreeen from './protected/CartScreeen';
import Dashboard from './protected/Dashboard';
import LoginScreen from './public/LoginScreen';
import Register from './Component/Register';
const App = () => {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/g-store" exact element={<LoginScreen/>} />
          <Route path="/g-store/Cart" exact element={<CartScreeen/>} />
          <Route path="/g-store/dashboard" exact element={<Dashboard/>} />
          <Route path="/g-store/register" exact element={<Register/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App