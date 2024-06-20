import React, { useState } from 'react'

const Login = () => {

    const [isSignIn , setIsSignIn] = useState(true);

    const handleSignIn = () => {
        setIsSignIn(!isSignIn);
    }

  return (

    <div>
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt='logo'/>
        </div>
        <form className='absolute bg-black w-3/12 h-auto p-12 my-36 mx-auto right-0 left-0 text-white opacity-80 rounded-lg'>
            <h1 className=' my-2 font-bold text-3xl'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
            {isSignIn && <input className='p-2 my-4 w-full' type='text' placeholder="Name"></input>}
            <input  className="p-2 my-4 w-full" type='email' placeholder='Email Address'></input>
            <input className='p-2 my-4 w-full' type='password' placeholder='Password'></input>
            <button  className='p-2 my-4 bg-red-600 rounded-lg w-full'>{isSignIn ? "Sign In" : "Sign Up"}</button>
            <p onClick={handleSignIn} className=' my-4 cursor-pointer '> {isSignIn ? "New user ? Sign Up" : "Already a user ? Sign In"}</p>
        </form>
    </div>
  )
}

export default Login