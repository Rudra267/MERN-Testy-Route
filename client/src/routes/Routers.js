import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Pizzas from "../pages/Pizzas";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import ContactForm from '../pages/Contract';
import AddResturant from '../pages/AddRestaurant/AddRestaurant';
import ShowCase from "../pages/ShowCase/ShowCase";
import User from './../pages/User/User';
import UserSettingsPage from './../pages/UserSettingsPage/UserSettingsPage';
import ErrorPage from './../pages/ErrorPage';
import Signup from '../components/Auth/Signup/Signup'
import Login from '../components/Auth/Login/Login';
import EnterOTP from "../components/Auth/EnterOTP/EnterOTP";

import CircularProgress from './../pages/CircularProgress';
import CheckoutFailed from "../pages/CheckoutFailed";


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/food" element={<Pizzas />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/checkoutFailed" element={<CheckoutFailed/>}/>
      <Route path="/contract" element={<ContactForm/>} />
      <Route path="/addresturant" element={<AddResturant/>}/>
      <Route path="/show-case" element={<ShowCase/>}/>
      <Route path="/user/:userId" element={<User />} />
      <Route path="/user/:userId/:hashId" element={<User />} />
      <Route path="/user" element={<User/>}/>
      <Route path="/user/:userId/settings" element={<UserSettingsPage/>}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/Otp" element={<EnterOTP/>} />
      <Route path="*" element={<ErrorPage/>} />
      <Route path="/loader" element={<CircularProgress/>}/> 
    </Routes>
  );
};

export default Routers;
