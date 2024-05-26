import React,{useState} from 'react'
import Helmet from './../../Helmet/Helmet';
import DelivaryBoy from '../../../assets/images/LoginBoy.png'
import logo from "../../../assets/images/res-logo.png";
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    const [inpval, setInpval] = useState({
        email: "",
        password: "",
    });

    const history = useNavigate();

    const setVal = (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    };

    const loginwithgoogle = ()=>{
        window.open("http://localhost:8009/auth/google/callback","_self")
    }

    const loginuser = async(e) => {
        e.preventDefault();

        const { email, password } = inpval;

        if (email === "") {
            toast.error("email is required!", {
                position: "top-center"
            });
        } else if (!email.includes("@")) {
            toast.warning("includes @ in your email!", {
                position: "top-center"
            });
        } else if (password === "") {
            toast.error("password is required!", {
                position: "top-center"
            });
        } else if (password.length < 6) {
            toast.error("password must be 6 char!", {
                position: "top-center"
            });
        } else {
            // console.log("user login succesfully done");

            const data = await fetch("/login",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                     email, password
                })
            });

            const res = await data.json();
            //  console.log(res);

            if(res.status === 201){
                localStorage.setItem("usersdatatoken",res.result.token);
                 history("/home")
                console.log("successfull..")
            }else{
                toast.error("Authentication Failed try again!", {
                    position: "top-center"
                });
            }
        }
    }

  return (
    <Helmet title="Thank you for Chooseing us">
      <div class=" bg-gray-100 text-gray-900 flex justify-center">
    <div class=" m-0 pt-2 p-48 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div>
                <img src={logo}
                    class="w-10 mx-auto" />
            </div>
            <div class="mt-12 flex flex-col items-center">
                <h1 class="text-2xl xl:text-3xl font-extrabold">
                    Log in
                </h1>
                <div class="w-full flex-1 mt-4">
                    <div class="flex flex-col items-center">
                        <button onClick={loginwithgoogle}
                            class="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-amber-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                            <div class="bg-white p-2 rounded-full">
                                <svg class="w-4" viewBox="0 0 533.5 544.3">
                                    <path
                                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                        fill="#4285f4" />
                                    <path
                                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                        fill="#34a853" />
                                    <path
                                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                        fill="#fbbc04" />
                                    <path
                                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                        fill="#ea4335" />
                                </svg>
                            </div>
                            <span class="ml-4">
                                Log in with Google
                            </span>
                            
                        </button>
                        
                    </div>

                    <div class="my-12 border-b text-center">
                        <div
                            class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                            Or Log in with e-mail
                        </div>
                    </div>
                    <form >

                         <div class="mx-auto max-w-xs">
                        <label htmlFor="Email">Enter Your Email</label>
                        <input onChange={setVal} id='Email' autoFocus value={inpval.email}
                            class="w-full px-2 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                           name='email' type="" placeholder="Enter your Email" />
                            <label htmlFor="Password">Enter Your Password</label>
                        <input onChange={setVal} id='Password' value={inpval.password}
                          name='password'  class="w-full px-2 mt-2 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="" placeholder="Enter Password" />
                        <button style={{backgroundColor: "#FFB30E"}} onClick={loginuser} type='submit'
                            class="mt-4 mb-3 tracking-wide font-semibold  text-gray-100 w-full py-3 rounded-lg hover:bg-amber-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                           
                            <span class="ml-3">
                                Log in
                            </span>
                        </button>
                        <NavLink to="/signup" className=" w-auto mt-24 text-gray-600" >New user create your account ?</NavLink>


                        <p class="mt-3 text-xs text-gray-600 text-center">
                            I agree to abide by templatana's
                            <a href="#" class="border-b border-gray-500 border-dotted">
                                Terms of Service
                            </a>
                            and its
                            <a href="#" class="border-b border-gray-500 border-dotted">
                                Privacy Policy
                            </a>
                        </p>
                    </div>
                    
                    </form>
                   
                </div>
            </div>
        </div>
        <div class="flex-1  text-center hidden lg:flex">
            <div class="m-12 mt-8 xl:m-16 w-auto bg-contain bg-center bg-no-repeat">
                <img src={DelivaryBoy} alt="" />
            </div>
        </div>
        
    </div>
    <ToastContainer/>
</div>

    </Helmet>
  )
}

export default Login
