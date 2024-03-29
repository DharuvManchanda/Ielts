import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import {remove} from "../Redux/Slices/CounterSlice"

const CartItem = ({item,index}) => {
    const dispatch =useDispatch();
    const removeFromCart=()=>{
        dispatch(remove(item.id));
console.log("Deleted From account");
    }
  return (
    <div>
      <div className='cartItem'>
        <div>
            <img src={item.image} alt="" />
        </div>
        <div>
            <h3>{item.title}</h3>
            <h4>{item.description}</h4>
        <div className='priceSec'>
            <p>$ {item.price}</p>
<button onClick={removeFromCart}><MdDelete/>
</button>  
        </div>
      </div>
      </div>
    </div>
  )
}

export default CartItem
