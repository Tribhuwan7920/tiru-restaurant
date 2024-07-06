import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./website/Homepages"
import Aboutpage from "./website/Aboutpage";
import Servicespage from "./website/Servicespage";
import Contactpage from "./website/Contactpage";

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element : <Homepage/>
    },
    {
      path : "/about" , 
      element : <Aboutpage/>
    },
    {
      path : "/services",
      element : <Servicespage/>
    },
    {
      path:"/contact",
      element:<Contactpage/>
    }

  ])

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
