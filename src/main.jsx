import { StrictMode } from 'react'
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

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true, Component:Home
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
        path:"/Users",
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        Component : Users
      }
    ]
  },
  {
    path: "/about",
    element: <h1>This is about page</h1>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

