import React from 'react'
import { useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';
import { UserCard } from './UserCard';


export const Card = ({userName,productName}) => {


const [user,setUser] = useState([]);
const [product,setProduct] = useState([]);

 useEffect(()=>{

 fetch("https://assessment.api.vweb.app/users").then((res)=>res.json()).then((result)=>{
    
  setUser(result);
 });

//  fetch("https://assessment.api.vweb.app/products").then((res)=>res.json()).then((result)=>{
    
//   setProduct(result);
//  });

  

 },[])

  return (
     <>
         <div className='card'>
         

         {
         user.map((item)=>  <UserCard key={item.user_id} user_id={item.user_id} userName={item.name}/>)
       
         }
         {/* {
         user.map((item)=> <ProductCard key={item.user_id}   ProductName={item.name}/>)
       
         } */}
         </div>
     </>
  )
}
