import React from 'react'
import './Product.css'

function Product(){
 return(
     <div className="product">
         <div className="product__info">
         <p> Prooduct name</p>
         <p className="product__price">
             <small>Rs</small>
             <strong> 200</strong>
         </p>
         <div className="rating"> 
         <span>⭐ </span>
         <span>⭐ </span>
         <span>⭐ </span>
         </div>
         </div>

     
     </div>
 )

}

export default Product;