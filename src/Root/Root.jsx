import { Outlet } from "react-router-dom";
import NavBar from "../Leout/NavBar/NavBar";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <div className="max-w-full m-auto ">
            <NavBar></NavBar>
            <div >
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;