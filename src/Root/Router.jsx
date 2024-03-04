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












      ],
    },
  ]);
  
  export default router;