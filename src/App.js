
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Browse from './components/Browse';




function App() {
  

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

  

  return (
    <div>
      
        <Header />
        <RouterProvider router={appRouter} />
      
      
    </div>
  );
}

export default App;
