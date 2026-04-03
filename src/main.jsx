import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import Mobiles from './Components/Mobiles/Mobiles.jsx';
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Laptops from './Components/Laptops/Laptops.jsx';
import Users from './Components/Users/Users.jsx';
import Users2 from './Components/Users/Users2.jsx';
import User from './Components/User/User.jsx';
import UserDetails from './Components/UserDetails/UserDetails.jsx';

const userPromise = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json());

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true, Component: Home
      },
      {
        path: "/mobiles",
        Component: Mobiles
      },
      {
        path: "/laptops",
        Component: Laptops
      },
      {
        path: "/Users",
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },
      {
        path: "/Users2",
        element: <Suspense fallback="Loading...">
          <Users2 userPromise={userPromise}/>
        </Suspense>
      },
      {
        path:"/User",
        element: <User></User>
      },
      {
        path : 'User/:UserId',
        Component: UserDetails
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

