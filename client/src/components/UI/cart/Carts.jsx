import React from "react";

import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../../../store/shopping-cart/cartUiSlice";
import {loadStripe} from '@stripe/stripe-js';
import "../../../styles/shopping-cart.css";

const Carts = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  const makePayment = async() =>{

    const stripe = await loadStripe("pk_test_51P44CBSHWRvCYpigq2MctDLF7gL4EWSmC1i6mG4mJYGvP7XuMNkBUAOrCHtgWPhVvcWGU5Wzem408hy6n2nEm2gF00LL7IYana")

    const body = {
      products:cartProducts,
      totalAmountofItems:totalAmount
  }
  const headers = {
      "Content-Type":"application/json"
  }
  const response = await fetch("/create-checkout-session",{
      method:"POST",
      headers:headers,
      body:JSON.stringify(body)
  });

  const session = await response.json();

  const result = stripe.redirectToCheckout({
      sessionId:session.id
  });

  if(result.error){
    console.log(result.error);
}

  }



  return (
    <div className="cart__container" onClick={toggleCart}>
      <ListGroup onClick={(event) => event.stopPropagation()} className="cart">
        <div className="cart__closeButton">
          <span onClick={toggleCart}>
            <i className="ri-close-fill"></i>
          </span>
        </div>

        <div className="cart__item-list">
          {cartProducts.length === 0 ? (
            <h6 className="text-center">No item added to the cart</h6>
          ) : (
            cartProducts.map((item, index) => (
              <CartItem item={item} key={index} onClose={toggleCart}/>
            ))
          )}
        </div>

        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>
            Subtotal : <span>₹{totalAmount}</span>
          </h6>
          <button onClick={makePayment}>
            <Link to="#" onClick={toggleCart}>
              Checkout
            </Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;
