import React, { useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../ContextProvider/Context.js";

import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';

import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

import "../../styles/header.css";
import ProfileDrop from "../ProfileSection/Profile.jsx";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },

  {
    display: "Foods",
    path: "/food",
  },
 
  {
    display:"🏷️Offers",
    path:"/show-case",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contract",
  },
  
  
];

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const { logindata, setLoginData } = useContext(LoginContext);
  console.log(logindata,"header")

  const imageProfile = logindata.ValidUserOne && (
    logindata.ValidUserOne.google_ac_image ||
    logindata.ValidUserOne.LocalImage ||
    "https://cdn3.iconfinder.com/data/icons/avatars-29/100/Avatar-17-1024.png"
  );
  const history = useNavigate();

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  let navigate = useNavigate();

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  console.log(menuRef?.current?.classList.value);

  useEffect(() => {

  

    const handleScroll = () => {
      // Check if headerRef.current is not null before accessing classList
      if (headerRef.current) {
        if (
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80
        ) {
          headerRef.current.classList.add("header__shrink");
        } else {
          headerRef.current.classList.remove("header__shrink");
        }
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };


  }, []); // Empty dependency array to run the effect only once after mount
  
console.log(logindata.ValidUserOne," from Header data")
const name = logindata.ValidUserOne ? logindata.ValidUserOne.fullname : "";

  //logout from current device
  const logoutuser = async () => {
    let token = localStorage.getItem("usersdatatoken");

    const res = await fetch("/logout", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token,
            Accept: "application/json"
        },
        credentials: "include"
    });

    const data = await res.json();
    console.log(data);

    if (data.status === 201) {

        toast.success("Logout successfully!🙂", {
            position: "top-center"
        });
        localStorage.removeItem("usersdatatoken");
        setLoginData(false)
       
    } else {
      toast.success("Logout successfully!🙂", {
        position: "top-center"
    });
    localStorage.removeItem("usersdatatoken");
    setLoginData(false)
        console.log("error");
    }
}



  return (
    <header className="header position-fixed" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo " onClick={() => navigate("/home")}>
            <img src={logo} alt="logo" />
            <h5 style={{marginLeft:"60px"}}>Tasty Route</h5>
          </div>
          {/* ======= menu ======= */}
          <div className="navigation ml-32" ref={menuRef} onClick={toggleMenu}>
            <div
              className="menu d-flex align-items-center gap-5"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="header__closeButton">
                <span onClick={toggleMenu}>
                  <i className="ri-close-fill"></i>
                </span>
              </div>
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                  onClick={toggleMenu}
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/* ======== nav right icons ========= */}
          
          <div className="nav__right d-flex align-items-center gap-4">
          {logindata.ValidUserOne ? (
              <ProfileDrop name={name} imgSrc={imageProfile}/>
            ) : (
              <div className="mt-2">Welcome to Tasty Route</div>
            )}

            {logindata.ValidUserOne? (
  // Show logout button
  <div className="inline-flex rounded-full shadow">
    <div onClick={logoutuser}
      href="#"
      style={{ background: "#FFB30E", color: "whitesmoke" }}
      className="inline-flex items-center px-4 py-2 text-base font-bold text-gray-900 border border-transparent rounded-full cursor-pointer font-base hover:bg-gray-50 hover:scale-105 transition"
    >
      <NavLink to="#">Logout</NavLink>
    </div>
  </div>
) : (
  // Show login button
  <div className="inline-flex rounded-full shadow">
    <div
      href="#"
      style={{ background: "#FFB30E", color: "whitesmoke" }}
      className="inline-flex items-center px-4 py-2 text-base font-bold text-gray-900 border border-transparent rounded-full cursor-pointer font-base hover:bg-gray-50 hover:scale-105 transition"
    >
      <NavLink to="/login">Login</NavLink>
    </div>
  </div>
)}


{/*             
          <div className="inline-flex rounded-full shadow">
            <div href="#" style={{background:"#FFB30E",color:"whitesmoke"}} className="inline-flex items-center px-4 py-2 text-base font-bold text-gray-900 border border-transparent rounded-full cursor-pointer font-base hover:bg-gray-50 hover:scale-105 transition">
                                <NavLink to="/Login">Login</NavLink>
                            </div>
                            
                        </div> */}
            <span className="cart__icon animate-bounce" onClick={toggleCart}>
              <i className="ri-shopping-basket-line"></i>
              <span  className="cart__badge ">{totalQuantity}</span>
            </span>
            
            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
      <ToastContainer/>
    </header>
  );
};

export default Header;

