
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Browse from './components/Browse';
import { useDispatch } from 'react-redux';

import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './utils/firebase';
import { addUser, removeUser } from './utils/ReduxStore/userSlice';

function App() {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browse",
      element: <Browse />
    }
  ])

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid , displayName , email} = user;
        dispatch(addUser({uid : uid, displayName : displayName, email : email}));
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
      }
    });
  },[])

  return (
    <div>
      
        <Header />
        <RouterProvider router={appRouter} />
      
      
    </div>
  );
}

export default App;
