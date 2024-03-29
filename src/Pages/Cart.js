import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from '../Components/CartItem'

const Cart = () => {
    const {cart}=useSelector((state)=>state);
    const[totalAmount,setTotalAmount]=useState(0);
    useEffect(()=>{
        setTotalAmount(cart.reduce((acc,curr)=>acc + curr.price,0));
    },[cart])
  return (
    <div>
{
    cart.length>0? (
        <div className='cart'>
        <div>
            {cart.map((item,index)=>{
                return <CartItem key={item.id} item={item} itemIndex={item}/>
            })}
        </div>
        <div className='cartSummary'>
        <div className='colGap'>
        <h2 className='colGap'>
                Your Cart 
            </h2>
             <h3 className='colGap'>
                 Summary 
            </h3>
            <h4 className='colGap'><span>Total Items: {cart.length}</span></h4>
        </div>

            <div className='colGap'>
                <h3 className='colGap'>Total amount:{totalAmount}</h3>
            <button>
                Checkout Now
            </button>
             </div>
        </div>
        </div>
    ):(
        <div className='alignCenter'>
        <h1>Cart Empty</h1>
        <Link to={"/"}>Shop Now</Link>
        </div>
    )
}    </div>
  )
}

export default Cart
