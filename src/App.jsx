
import Home from "./Pages/Home"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from './Pages/Error'
import AppLayout from "./Components/AppLayout";
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

        }
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
