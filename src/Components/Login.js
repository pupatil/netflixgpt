import Header from "./Header";
import { useState, useRef } from "react";
import {checkValidation} from '../Utils/validation';


const Login = () =>{

const [isSignInForm, setIsSignInForm] = useState(true);

const emailRef = useRef(null);
const passwordRef = useRef(null);

const handleSignIn = () => {
    // Sign in logic here
    setIsSignInForm(!isSignInForm);
};

const validateForm = () =>{

    console.log("Validating form...",emailRef);
    console.log("Validating form...",passwordRef);
const validationMessage = checkValidation(emailRef.current.value, passwordRef.current.value);
    console.log("Validation message:", validationMessage);
}
    return(
        <div>
            <Header></Header>
            <div className="absolute">
            <img 
            src="https://assets.nflxext.com/ffe/siteui/vlv3/ea534f76-b87f-4720-9605-cb29cfd9fefe/web/IN-en-20260810-TRIFECTA-perspective_5a83c581-2878-466b-87a0-19d0bf50f4bc_large.jpg" 
            alt="Netflix Background" 
            className="w-full h-screen object-cover"/>
            </div>
            <form onSubmit={(e)=>{e.preventDefault()}} className="absolute w-3/12 bg-black p-16 my-36 mx-auto left-0 right-0 rounded-md text-white opacity-90 ">
                <h1 className="text-2xl font-bold mb-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && (
                    <input className="w-full h-12 p-4 my-6 rounded-md bg-gray-700" type="text" placeholder="Full Name"></input>
                )}
                <input  ref={emailRef} className="w-full h-12 p-4 my-6 rounded-md bg-gray-700" type="text" placeholder="Email or phone number"></input>
                <input ref={passwordRef} className="w-full h-12 p-4 my-6 rounded-md bg-gray-700" type="password" placeholder="Password"></input>
                <button className="w-full h-12 bg-red-600 hover:bg-red-700 my-4 rounded-md" type="submit" onClick={validateForm}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <div>
                <p onClick={handleSignIn} className="text-white cursor-pointer">{isSignInForm? "You are new to Netflix? Sign up now" : "Already have an account? Sign in"}</p>
            </div>
            </form>
           
        </div>
    )
}
export default Login;