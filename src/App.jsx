
import Home from "./Pages/Home"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from './Pages/Error'
import AppLayout from "./Components/AppLayout";
import Features from "./Pages/Features";
import Pricing from "./Pages/Pricing";
import About from "./Pages/About";
import Services from "./Pages/Services";
// style={{ backgroundImage: `url(${hero})`}}


  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",  
          element: <Home />,
        },
        {
          path: "/features",  
          element: <Features />
        },
        {
          path: "/pricing",  
          element: <Pricing />
        },
        {
          path: "/about",  
          element: <About />
        },
        {
          path: "/services",  
          element: <Services />
        },
      ]
    }
  ]);




function App() {

  return (    
    <RouterProvider router={router}>
      <Home />
    </RouterProvider>
        
  )
}

export default App
