import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../utils/ReduxStore/userSlice';


const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  

  const handleSignOut = ()=>{
    dispatch(removeUser());
    window.location.href = "/";
  }

  return (
    <div className=' absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-20 flex justify-between'>
      <img className='w-44 px-4' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"  alt='logo'/>
      
      { user && 
        <div className='flex'>
          <img  className="w-11 h-11 mt-1 mr-1" alt='userlogo' src={user.photoURL}/>
          <button onClick={handleSignOut} className='font bold cursor-pointer font-black text'>(Sign Out)</button>
       </div>}
      
    </div>
  )
}

export default Header