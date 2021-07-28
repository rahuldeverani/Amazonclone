import React from "react";
import './Home.css';
import Product from './Product'

function Home() {
   return <div className="home">
       
       <div className="home__container">
           <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/PrimeRewards/LP_Revamp/PC_Header_Banner._CB468631809_.jpg"></img>
        
            <div className="home__row"> 
            <Product title='The lean startup' price={20.99}  image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg'/>
            <Product />
            </div>
            <div className="home__row"> 
            <Product />
            <Product />
            <Product />
            </div>
            <div className="home__row"> 
            <Product />
            </div>

       </div>
   
       </div>
}
export default Home;