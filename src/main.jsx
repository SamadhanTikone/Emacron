import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Layout from './Components/Layout/Layout.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Services from './Components/Services/Services.jsx'
import Clients from './Components/Clients/Clients.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    error: <h1>Error</h1> ,
    children:[
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "services",
        element: <Services />,
      },
     
      {
        path: "clients",
        element: <Clients />,
      },
     

    ]
  }
]);

createRoot(document.getElementById('root')).render(

  

  <StrictMode>
    <App />
    <RouterProvider router={router}/>
  </StrictMode>,
)
