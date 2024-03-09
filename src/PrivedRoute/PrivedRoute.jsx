import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";


const PrivedRoute = ({children}) => {
    const {user,loder} = useContext(authContext);
    const locetion = useLocation();
    // console.log(locetion.pathname)
    if (user?.email) {
        return children
    }
    if (loder) {
        return <span className="loading loading-dots loading-lg"></span>
    }
    return <Navigate state={locetion} to={"/singin"} replace></Navigate>
};

export default PrivedRoute;