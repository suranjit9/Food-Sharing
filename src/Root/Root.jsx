import { Outlet } from "react-router-dom";
import NavBar from "../Leout/NavBar/NavBar";


const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="w-[80%] m-auto">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;