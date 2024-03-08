import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./ErrorPage";
import Home from "../Leout/Home/Home";
import SingUp from "../Leout/Sing-In-UP/SingUp";
import SingIn from "../Leout/Sing-In-UP/SingIn";
import AddFood from "../Leout/AddFood/AddFood";
import AllProduct from "../Leout/AllProduct/AllProduct";
import ManageFoods from "../Leout/ManageMyFoods/ManageFoods";
import SingalFood from "../Leout/AllProduct/SingalFood";
import FoodRe from "../Recived-Food/FoodRe";
import SentReQ from "../Leout/SentFoodRequst/SentReQ";
import Update from "../Leout/ManageMyFoods/Update";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path:'/singUp',
          element:<SingUp/>
        },
        {
          path:'/singIn',
          element:<SingIn/>
        },
        {
          path:'/AddFood',
          element:<AddFood/>,
          
        },
        {
          path:'/AllFood',
          element:<AllProduct/>
        },
        {
          path:'/ManageFoods',
          element:<ManageFoods/>
        },
        {
          path:'/requstFood',
          element:<FoodRe/>
        },
        {
          path:'/sentFood',
          element:<SentReQ/>
        },
        {
          path:'/SingalFood/:id',
          element:<SingalFood/> 
        },
        // Displa Singal Product.......
        {
          path:'/Update/:id',
          element:<SingalFood/> 
        },
        // Update Food----
        {
          path:'/Updatefood/:id',
          element:<Update/> 
        }












      ],
    },
  ]);
  
  export default router;