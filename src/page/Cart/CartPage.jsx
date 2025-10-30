import React from "react";

;
import FooterTwo from "../../components/FooterTwo";
import HeaderOne from "../../components/HeaderOne";
import CartInner from "../../components/CartInner";
import Animation from "../../helper/Animation";
 

const CartPage = () => {
  return (
    <>
      {/* HeaderOne */}
      <HeaderOne />

      <CartInner/>

      {/* Animation */}
      <Animation />
     
      {/* FooterTwo */}
      <FooterTwo />
    </>
  );
};

export default CartPage;
