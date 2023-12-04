import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home";
import Contact from "../component/contact";
import Payment from "../component/Payment";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Home/>,
      children:[{
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/checkout',
        element:<Payment/>
      }]
    },
  ]);

  export default router