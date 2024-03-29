import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {add,remove} from "../Redux/Slices/CounterSlice"
const Card = ({pdata}) => {
  const {cart}=useSelector((state)=>state);
  //use dispatch used to access functions
  const dispatch=useDispatch();
  const addToCart=()=>{
    dispatch(add(pdata));
console.log('Add to cart');
  } 
   const removeFromCart=()=>{
    dispatch(remove(pdata.id));
    console.log('remove to cart');
  }
  return (
    <div className='card'>
      <h5>{pdata.title.split(" ").slice(0,3).join(" ")+"..."}</h5>
<p>{pdata.description.split(" ").slice(0,7).join(" ")+"..."}</p>
      <img src={pdata.image} alt="image" />
<em> {pdata.rating.rate}⭐ <span className='fade'>({pdata.rating.count})</span></em>
<div className='wrap'>
<p>$ {pdata.price}</p>
{
  cart.some((p)=>p.id===pdata.id) ?(
    <button onClick={removeFromCart}>Remove Item</button>
  ):(
    <button onClick={addToCart}>Add to Cart</button>
  )
}
</div>
    </div>
  )
}

export default Card
