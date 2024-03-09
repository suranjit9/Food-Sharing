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
import PrivedRoute from "../PrivedRoute/PrivedRoute";


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
          element:<PrivedRoute><AddFood/></PrivedRoute>,
          
        },
        {
          path:'/AllFood',
          element:<AllProduct/>
        },
        {
          path:'/ManageFoods',
          element:<PrivedRoute><ManageFoods/></PrivedRoute>
        },
        {
          path:'/requstFood',
          element:<PrivedRoute><FoodRe/></PrivedRoute>
        },
        {
          path:'/sentFood',
          element:<PrivedRoute><SentReQ/></PrivedRoute> 
        },
        {
          path:'/SingalFood/:id',
          element:<PrivedRoute><SingalFood/> </PrivedRoute>
        },
        // Displa Singal Product.......
        // {
        //   path:'/Update/:id',
        //   element:<SingalFood/> 
        // },
        // Update Food----
        {
          path:'/Updatefood/:id',
          element:<PrivedRoute><Update/></PrivedRoute> 
        }












      ],
    },
  ]);
  
  export default router;