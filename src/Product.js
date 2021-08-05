import React from 'react'
import './Product.css'

function Product({title, image , price ,rating}){
 return(
     <div className="product">
         <div className="product__info">
         <p>{title}</p>
         <p className="product__price">
             <small>Rs</small>
             <strong> {price}</strong>
         </p>
         <div className="rating"> 
         {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
         </div>
         </div>
         <img  className="product__image" src={image}></img>
         <button className="product__bucket">Add to bucket </button>
     
     </div>
 )

}

export default Product;



