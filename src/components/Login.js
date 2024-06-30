import React, { useRef, useState } from 'react'
import { checkLogin } from '../utils/validate';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [isSignIn , setIsSignIn] = useState(true);
    const [errorMsg , setErrorMsg] = useState("");
    const navigate = useNavigate();
    const fullName = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleSignIn = () => {
        setIsSignIn(!isSignIn);
    }

    const handleSubmitBtn = () => {

        let message = null;
        if(!isSignIn){
            message = checkLogin(email.current.value, password.current.value, fullName.current.value);
        }else{
            message = checkLogin( email.current.value, password.current.value);
        }
        
        if(message){
            setErrorMsg(message);
            return;
        }

        if(!isSignIn){
            //signup 
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate("/browse");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg(errorCode + ": " + errorMessage);
            });
        }else{
            //signup
            signInWithEmailAndPassword(auth,  email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                navigate("/browse");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg(errorCode + ": " + errorMessage);
            });
        }

    }

  return (

    <div>
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt='logo'/>
        </div>
        <form onSubmit={(e)=> e.preventDefault()} className='absolute bg-black w-3/12 h-auto p-12 my-36 mx-auto right-0 left-0 text-white opacity-80 rounded-lg'>
            <h1 className=' my-2 font-bold text-3xl'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
            {!isSignIn  && <input ref={fullName} className='p-2 my-4 w-full text-black' type='text' placeholder="Name"></input>}
            {!isSignIn  && <input className='p-2 my-4 w-full text-black' type='tel' placeholder="Phone Number"></input>}
            <input ref={email}  className="p-2 my-4 w-full text-black" type='email' placeholder='Email Address'></input>
            <input ref={password} className='p-2 my-4 w-full text-black' type='password' placeholder='Password'></input>
            <p className='my-4 font-bold text-lg  text-red-600'>{errorMsg}</p>
            <button onClick={handleSubmitBtn}  className='p-2 my-4 bg-red-600 rounded-lg w-full'>{isSignIn ? "Sign In" : "Sign Up"}</button>
            <p onClick={handleSignIn} className=' my-4 cursor-pointer hover:underline '> {isSignIn ? "New user ? Sign Up" : "Already a user ? Sign In"}</p>
        </form>
    </div>
    
  )
}

export default Login