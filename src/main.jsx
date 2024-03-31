import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Nav from './Components/Nav/Nav';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:([
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/log',
        element:<Login></Login>
      }
    ])
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
