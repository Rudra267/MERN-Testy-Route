import React from "react";
// import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import Delivaryboyimg from "../assets/images/Deliveryboy.jpg";
import "../styles/cart-page.css";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { Link } from "react-router-dom";
import {loadStripe} from '@stripe/stripe-js';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const makePayment = async() =>{

    const stripe = await loadStripe("pk_test_51P44CBSHWRvCYpigq2MctDLF7gL4EWSmC1i6mG4mJYGvP7XuMNkBUAOrCHtgWPhVvcWGU5Wzem408hy6n2nEm2gF00LL7IYana")

    const body = {
      products:cartItems,
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
    <Helmet title="Your Cart">
      {/* <CommonSection title="Your Cart" /> */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              {cartItems.length === 0 ? (
                <h5 className="text-center">Your cart is empty</h5>
              ) : (
                <>
                  <h5 className="mb-5">Summary of your order</h5>
                  <table className="table table-borderless mb-5 align-middle">
                    <tbody>
                      {cartItems.map((item) => (
                        <Tr item={item} key={item.id} />
                      ))}
                    </tbody>
                  </table>
                </>
              )}

              <div className="mt-4 d-flex">
               <div>
               <h6>
                  Subtotal: ₹
                  <span className="cart__subtotal">{totalAmount}</span>
                </h6>
                <p>Taxes and shipping will calculate at checkout</p>
               </div>
                <div className="cart__page-btn ml-7">
                  <button className="addTOCart__btn me-4 font-semibold">
                    <Link to="/pizzas">Continue Shopping</Link>
                  </button>
                  <button className="addTOCart__btn font-semibold" onClick={makePayment}>
                  <Link to="#">Proceed To Checkout</Link>
                  </button>
                </div>
              </div>
            </Col>
            <Col lg="6">
              
              <div className="mt-4">

                <img className="" src={Delivaryboyimg} alt="" />
               </div>
            </Col>


           


          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = (props) => {
  const { id, image01, title, price, quantity } = props.item;
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <tr>
      <td className="text-center cart__img-box">
        <img src={image01} alt="" />
      </td>
      <td className="text-center">{title}</td>
      <td className="text-center">₹{price}</td>
      <td className="text-center">{quantity}px</td>
      <td className="text-center cart__item-del">
        <i className="ri-delete-bin-line" onClick={deleteItem}></i>
      </td>
    </tr>
  );
};

export default Cart;
