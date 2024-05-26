import {useState} from 'react'
import { Link } from 'react-router-dom'

// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

import TextUtil from '../TextUtil/TextUtil'
import TelUtil from '../TelUtil/TelUtil'
import TextAreaUtil from '../TextAreaUtil/TextAreaUtil'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import css from './AddRestaurantFormCard.module.css';

let AddRestaurantFormCard = () => {

    let [initialValues, setInitialValues] = useState({ 
        restName: '',
        location: '',
        phone: '',
        message: '' 
    })
    // let validationSchema = Yup.object({
    //     restName: Yup.string()
    //     .min(5, 'Minimum 5 characters required')
    //     .max(15, 'Must be less than 15 characters')
    //     .required('Required'),
    //     location: Yup.string().required('Required'),
    //     phone: Yup.string(),
    //     message: Yup.string(),
    // })

    const setVal = (e) => {
        const { name, value } = e.target;
        setInitialValues(prevState => ({...prevState, [name]: value}));
    }
    

    let submitForm = async (e) => { 
        e.preventDefault()

        const {restName,location,phone,message } = initialValues;

       if(!restName || !location || !phone || !message ){
        toast.info("Required to fill all boxes..")
       }else{

          
        const data = await fetch("/register-resturant",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:restName,location:location,contract:phone,aboutTheResturant:message
            })
        });

        const res = await data.json();
        //  console.log(res);

        if(res.status === 201){
            toast.success("Registration Done 🎉", {
                position: "top-center"
            });
            
        }else if(res.status === 422){
            toast.warn("Already Registered !!", {
                position: "top-center"
            });

        }else{
            toast.error("Try again to register", {
                position: "top-center"
            });
        }

       }

    
      
    }


    return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
          
         
                <form className={css.form}>
                    <input className={css.inbox} type="text" onChange={setVal} value={initialValues.restName} name="restName" placeholder="Restaurant name*"/>
                    <input className={css.inbox} type="text" onChange={setVal} value={initialValues.location} name="location" placeholder="Restaurant location*"/>
                    <input className={css.inbox} type="text" onChange={setVal} value={initialValues.phone} name="phone" placeholder="Restaurant contact number"/>
                    <input className={css.inbox} type="" onChange={setVal} value={initialValues.message} name="message" placeholder="What do you like about the Restaurant?" />
                    <button type='submit' onClick={submitForm} className={css.btn}>Submit</button>
                </form>
           
            <div className={css.tag}>Restaurant owners can <Link to='' className={css.link}>add restaurant from here</Link></div>
        </div>
    </div>
}

export default AddRestaurantFormCard;