import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidation } from "../Utils/validation";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [validationMessage, setErrorMessage] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignIn = () => {
    // Sign in logic here
    setIsSignInForm(!isSignInForm);
  };

  const validateForm = () => {
    // console.log("Validating form...", emailRef);
    // console.log("Validating form...", passwordRef);
    const validationMessage = checkValidation(email, password);
    // using useRef
    //  const validationMessage = checkValidation(
    //  emailRef.current.value,passwordRef.current.value
    // );
    setErrorMessage(validationMessage);
    // means if validationMessage is not null menas someting error message, then return and do not proceed with form submission
    if (validationMessage) return;

    //Sign in Sign Up logic here
    if (!isSignInForm) {
      // Sign up logic here
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullname,
            photoURL:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIYWkg9Nh_jRfYTDqkp_jTniVGjaCqmRZ03ooEoyIMxg&s=10",
          })
            .then(() => {
                // if ur updating the user name u have to call action again to update the store with updated data
                // thats why we have called action here again
              const uid = user.uid;
              dispatch(
                addUser({
                  uid: uid,
                  email: user.email,
                  userName: user?.displayName,
                  userPhoto: user?.photoURL,
                }),
              );
            })
            .catch((error) => {
              console.error("Error updating user profile:", error);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage + " " + errorCode);
          // ..
        });
    } else {
      // Sign in logic here
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("User signed in:", user);
    
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("Error signing in:", errorMessage, errorCode);
          setErrorMessage(errorMessage + " " + errorCode);
        });
    }
  };
  return (
    <div>
      <Header></Header>
      <div className="absolute top-0 left-0 w-full h-screen">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ea534f76-b87f-4720-9605-cb29cfd9fefe/web/IN-en-20260810-TRIFECTA-perspective_5a83c581-2878-466b-87a0-19d0bf50f4bc_large.jpg"
          alt="Netflix Background"
          className="w-full h-screen object-cover"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute w-3/12 bg-black p-16 my-36 mx-auto left-0 right-0 rounded-md text-white opacity-90 "
      >
        <h1 className="text-2xl font-bold mb-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className="w-full h-12 p-4 my-6 rounded-md bg-gray-700"
            type="text"
            placeholder="Full Name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          ></input>
        )}
        <input
          ref={emailRef}
          className="w-full h-12 p-4 my-6 rounded-md bg-gray-700"
          type="text"
          placeholder="Email or phone number"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          ref={passwordRef}
          className="w-full h-12 p-4 my-6 rounded-md bg-gray-700"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button
          className="w-full h-12 bg-red-600 hover:bg-red-700 my-4 rounded-md"
          type="submit"
          onClick={validateForm}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div>
          <p className="text-red-600 text-sm mb-4">{validationMessage}</p>
          <p onClick={handleSignIn} className="text-white cursor-pointer">
            {isSignInForm
              ? "You are new to Netflix? Sign up now"
              : "Already have an account? Sign in"}
          </p>
        </div>
      </form>
    </div>
  );
};
export default Login;
