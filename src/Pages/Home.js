import React, { useEffect, useState } from 'react'
import Spinner from '../Components/Spinner';
import Card from '../Components/CardItem';
const Home = () => {
    const url ="https://fakestoreapi.com/products";
    const [productData,setProductData]=useState([]);
    const [loading,setLoading]=useState(false);
async function FetchData(){
    setLoading(true);
    try {
        const output= await fetch(url);
        const res=await output.json();
        setProductData(res);
        console.log("hwlo");
        console.log(res);
    } catch (error) {
        console.log(error);
        setProductData([]);

    }
    setLoading(false);
    console.log(productData);
}
useEffect(()=>{
FetchData();
},[])
  return (
    <div className='center'>
        {
        loading ?<Spinner/>: productData.length> 0 ?
        (productData.map((pdata)=>(<Card key={pdata.id}  pdata={pdata} />))) : 
        <div className='center'>
<h2>NO Data Found</h2>
</div> 
}
  </div>
  )
}

export default Home
