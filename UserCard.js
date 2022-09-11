import React from 'react'
import { useEffect, useState } from 'react';
import Order from './Order';
 
export const UserCard = ({user_id , userName}) => {

    const [order,setOrder] = useState([]);
    useEffect(()=>{

       
        fetch("https://assessment.api.vweb.app/orders").then((res)=>res.json()).then((result)=>{
           
         setOrder(result);
        });
       
         
       
        },[])
       

  
  return (
    <div className='user-card'>
        <p>User_id : {user_id}</p>
        <p>User_Name : {userName}</p>

        {
            order.map((item)=>item.product_id==user_id ? <Order order_id={item.order_id} product_id={item.product_id} quantity={item.quantity}/> :"")
        }
       
    </div>
  )
}
