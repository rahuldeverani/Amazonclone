import React from "react";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <h2 className="checkout__title"> Your Shopping Bucket</h2>
      </div>
      <div className="checkout__right">
        <h2>Your Order's Cost</h2>
      </div>
    </div>
  );
}

export default Checkout;
