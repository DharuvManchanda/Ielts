import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  const {cart}=useSelector((state)=>state);

  return (
    <nav>
     <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="" />
      <ul>
        <NavLink to="/" className="navLink">Home</NavLink>
        <NavLink to="/cart"><FiShoppingCart className="navLink"/>  </NavLink>    
<p>{cart.length}</p>
</ul>
    </nav>
  )
}

export default Navbar
