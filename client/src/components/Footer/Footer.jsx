import React, { useState } from "react";
import { ListGroup } from "reactstrap";

import logo from "../../assets/images/res-logo.png";
import "../../styles/footer.css";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Footer = () => {
  const [inpval, setInpval] = useState({
    email: "",
});


const setVal = (e) => {
    const { name, value } = e.target;

    setInpval(() => {
        return {
            ...inpval,
            [name]: value
        }
    })
    
};

const setMsg = async(e) =>{
  e.preventDefault();

    const {email} = inpval

    if(!email.includes("@")){
      toast.warning("includes @ in your email!", {
        position: "top-center"});

    }else{
      const data = await fetch("/mail-message",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
             useremail:email
        })
    });

    const res = await data.json();
     console.log(res);

    if(res.success){
      console.log("success")
      setInpval({email:""})

        toast.success("We will send our responce", {
          position: "top-center"
      });

    }else{
      toast.error("Try again !! 😕", {
        position: "top-center"
    });
    }

    }
}
  



  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={logo} alt="logo" />
        <h5>Tasty Route</h5>
        <p>Best Food Deliver in town, try it out!</p>
      </div>
      <div>
        <h5 className="footer__title mb-3">Delivery Time</h5>
        <ListGroup>
          <div className="delivery__time-item border-0 ps-0">
            <span>Friday - Tuesday</span>
            <p>10:00am - 11:00pm</p>
          </div>
          <div className="delivery__time-item border-0 ps-0">
            <span>Wednesday - Thursday</span>
            <p>Off day</p>
          </div>
        </ListGroup>
      </div>
      <div class="row input-group-icon mb-5">

          <div class="col-auto"><i class="fas fa-envelope input-box-icon text-500 ms-3"></i>
                  <input class="form-control input-box h-12 bg-200 border-0" value={inpval.email} onChange={setVal} name="email" type="email" placeholder="Enter Email" aria-label="email" />
                </div>
                <div class="col-auto">
                  <button class="btn btn-primary" onClick={setMsg} type="submit">Subscribe</button>
                </div>
                
             </div>

    </footer>

  );
};

export default Footer;
