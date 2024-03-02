import { Outlet } from "react-router-dom";
import NavBar from "../Leout/NavBar/NavBar";


const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="w-[1200px] m-auto">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;