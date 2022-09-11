import React from 'react'
import { useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';
const Order = ({product_id,quantity}) => {

  const [product,setProduct] = useState([]);
    useEffect(()=>{

       
        fetch("https://assessment.api.vweb.app/products").then((res)=>res.json()).then((result)=>{
           
         setProduct(result);
        });
       
         
       
        },[])


  return (
    <div className='order-card'>
    <p>Product_id : {product_id} 
    
    </p>

    <p>{
            product.slice(0, 2).map((item)=>item.product_id==product_id ? <ProductCard productName={item.name} /> :"")
    } </p>

    
    
    </div>
  )
}

export default Order