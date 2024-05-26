import React, { useContext, useEffect, useState} from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Routes from "../../routes/Routers";
import Carts from "../UI/cart/Carts.jsx";
import { LoginContext } from "../ContextProvider/Context.js";
import { useSelector } from "react-redux";
import { Route, useLocation } from 'react-router-dom';
import CircularProgress from "../../pages/CircularProgress.jsx";




const Layout = () => {
  const [data, setData] = useState(false);
  const { logindata, setLoginData } = useContext(LoginContext);
  const location = useLocation();

  const DashboardValid = async () => {
    try {
      let token = localStorage.getItem("usersdatatoken");
      console.log(token);

      if (token) {
        const res = await fetch("/validuser", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": token
          }
        });

        const data = await res.json();
        console.log(data);

        if (data.status === 201) {
          console.log("user Valid");
          setLoginData(data);
        } else {
          console.log("user not valid");
        }
      }

      const responce = await fetch("/login/sucess", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });

      if (responce) {
        var resp = await responce.json();
        console.log(resp)      }
        localStorage.setItem("usersdatatoken", resp.token);
      if (resp.status === 201) {
        console.log("user verified");
        setLoginData(resp);
      } else {
        console.log("user not verified");
      }
    } catch (error) {
      console.log("user valid check error: " + error);
    }
  };



  useEffect(() => {  
    DashboardValid()

    setData(true);
  }, []);

  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  const shouldShowHeader = location.pathname !== '/login' && location.pathname !== '/signup';

  return (
<>

{
  data?(
    <div className="d-flex flex-column vh-100 justify-content-between">
      {shouldShowHeader && <Header />}
      {showCart && <Carts />}
      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  ) : <CircularProgress/>
}


</>

  );
};

export default Layout;
