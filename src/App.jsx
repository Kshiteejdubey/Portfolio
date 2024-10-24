import Sideheader from './Sideheader';
import './App.css';
import '../src/Navigation__component/modify.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Errorpage from './Navigation__component/Errorpage';
import About from './Navigation__component/About';
import Service from './Navigation__component/Service';
import Contact from './Navigation__component/Contact';
import Portfolio from './Navigation__component/Portfolio';
import Buttonhome from './Navigation__component/Buttonhome';
import { Outlet } from 'react-router-dom';
import Home from './Navigation__component/Home';
import { RxHamburgerMenu } from 'react-icons/rx';
import contextEle from './Context'
import { useState } from 'react';


export const approute = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/services',
        element: <Service />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/portfolio',
        element: <Portfolio />
      },
      {
        path:'/about',
        element:<Buttonhome/>
      }
    ],
    errorElement: <Errorpage />
  }
]);

function App() {
    const[data,setData]=useState(false)
    const updatedata=()=>{
      setData(!data)
    }
  return (
    <contextEle.Provider value={{data,setData}}>
    <div className='app_container'>
      <Sideheader/>
      <RxHamburgerMenu className="hamburger_icon" onClick={updatedata}/>
      <Outlet />
    </div>
    </contextEle.Provider>
  );
}

export default App;
