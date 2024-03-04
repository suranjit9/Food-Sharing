import { Outlet } from "react-router-dom";
import NavBar from "../Leout/NavBar/NavBar";


const Root = () => {
    return (
        <div className="max-w-full m-auto ">
            <NavBar></NavBar>
            <div >
            <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Root;