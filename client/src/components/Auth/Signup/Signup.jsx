import React,{useState} from 'react'
import Helmet from './../../Helmet/Helmet';
import logo from "../../../assets/images/res-logo.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {

    const [inpval, setInpval] = useState({
        fullname: "",
        email: "",
        mobilenumber:"",
        password: "",
        confirmpassword: "",
        image:""
    });

    const setVal = (e) => {
        const { name, value, files } = e.target;
    
        if (name === 'image') {
            setInpval(prevState => ({
                ...prevState,
                [name]: files[0] // Assuming you only want to handle one file
            }));
        } else {
            setInpval(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const addUserdata = async (e) => {
        e.preventDefault();

        const { fullname, email,mobilenumber, password, confirmpassword,image } = inpval;
        console.log(inpval)

        if (fullname === "") {
            toast.warning("fname is required!", {
                position: "top-center"
            });
        } else if (email === "") {
            toast.error("email is required!", {
                position: "top-center"
            });
        } else if (!email.includes("@")) {
            toast.warning("includes @ in your email!", {
                position: "top-center"
            });
        }else if(!mobilenumber){
            toast.warning("required to enter phone number!", {
                position: "top-center"
            });
        } else if (password === "") {
            toast.error("password is required!", {
                position: "top-right"
            });
        } else if (password.length < 6) {
            toast.error("password must be 6 char!", {
                position: "top-right"
            });
        } else if (confirmpassword === "") {
            toast.error("cpassword is required!", {
                position: "top-right"
            });
        }
        else if (confirmpassword.length < 6) {
            toast.error("confirm password must be 6 char!", {
                position: "top-right"
            });
        } else if (password !== confirmpassword) {
            toast.error("password and confirm password not match!", {
                position: "top-right"
            });
        } else {
            console.log("user registration succesfully done");

            const data = await fetch("/register", {
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                     email, password,fullname,mobilenumber,confirmpassword
                })
            });

            const res = await data.json();

            console.log(res)

            if (res.status === 201) {
                toast.success("Registration Successfully done 😃!", {
                    position: "top-right"
                });
                setInpval({ ...inpval, fullname: "", email: "",mobilenumber:"", password: "", confirmpassword: "",image:"" });
            }else if(res.status === 422){
                toast.warn("Email already exits 😃!", {
                    position: "top-right"
                });
            }
        }
    }

    const loginwithgoogle = ()=>{
        window.open("http://localhost:8009/auth/google/callback","_self")
    }


  return (
    <Helmet title="Thank you for Chooseing us">
      <div class=" bg-gray-100 text-gray-900 flex justify-center">
    <div class=" m-0 pt-5 p-48 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div>
                <img src={logo}
                    class="w-10 mx-auto" />
            </div>
            <div class="mt-12 flex flex-col items-center">
                <h1 class="text-2xl xl:text-3xl font-extrabold">
                    Register
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
                                Register with Google
                            </span>
                        </button>
                    </div>

                    <div class="my-12 border-b text-center">
                        <div
                            class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                            Or Register with e-mail
                        </div>
                    </div>

                    <div class="mx-auto">
                        <label htmlFor="Email">Enter Your Email</label>
                        <input id='Email' onChange={setVal} value={inpval.email} name='email'
                            class="w-full px-2 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="" placeholder="Enter your Email" autoFocus />
                            <label htmlFor="name">Enter Your Full Name</label>
                        <input id='name' onChange={setVal} value={inpval.fullname} name='fullname'
                            class="w-full px-2 mt-2 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="" placeholder="Enter Fullname" />
                         <label htmlFor="Mnumber">Enter Your Mobile Number</label>
                        <input id='Mnumber' onChange={setVal} value={inpval.mobilenumber} name='mobilenumber'
                            class="w-full px-2 mt-2 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="" placeholder="Enter Number" />
                         <label htmlFor="Password">Enter Password</label>
                        <input id='Password' onChange={setVal} value={inpval.password} name='password'
                            class="w-full px-2 mt-2 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="" placeholder="Enter Password" /> 
                            <label htmlFor="CPassword">Enter Confirm Password</label>
                        <input id='CPassword' onChange={setVal} value={inpval.confirmpassword} name='confirmpassword'
                            class="w-full px-2 mt-2 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="" placeholder="Enter Confirm Password" />

                        <button style={{backgroundColor: "#FFB30E"}} onClick={addUserdata} type="submit"
                            class="mt-5 tracking-wide font-semibold  text-gray-100 w-full py-3 rounded-lg hover:bg-amber-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                            <svg class="w-6 h-6 -ml-2" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                <circle cx="8.5" cy="7" r="4" />
                                <path d="M20 8v6M23 11h-6" />
                            </svg>
                            <span class="ml-3">
                                Register
                            </span>
                        </button>
                        <p class="mt-4 text-xs text-gray-600 text-center">
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
                </div>
            </div>
        </div>
        <div class="flex-1  text-center hidden lg:flex">
        <aside class="">
                <div class="bg-gray-100 p-8 rounded">
                    <h2 class="font-bold text-2xl">Instructions</h2>
                    <ul class="list-disc mt-4 list-inside">
                        <li>All users must provide a valid email address and password to create an account.</li>
                        <li>Users must not use offensive, vulgar, or otherwise inappropriate language in their username or profile information</li>
                        <li>Users must not create multiple accounts for the same person.</li>
                    </ul>
                </div>
            </aside>
        </div>
        
    </div>
    <ToastContainer/>
</div>

    </Helmet>
  )
}

export default Signup
