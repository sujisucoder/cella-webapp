import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from "./Home/Home";
import Brands from "./Brands/Brands";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/brands",
    element: <Brands/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  
]);

const apple= true;

function App() {


  return (
    <>
    { apple &&
      <Navbar/>
    }
      <RouterProvider router={router} />
    { apple &&
      <Footer/>
    }
    
    </>
  )
}

export default App
