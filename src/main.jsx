import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ImageGallery from './Component/Home/ImageGallery.jsx'


const routes = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
      element:<ImageGallery></ImageGallery>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
 
    <RouterProvider router={routes}></RouterProvider>
  
);
