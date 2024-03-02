import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Logo.png"
import { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";

const NavBar = () => {
    const {user, logOut} = useContext(authContext);
    const navItem = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/Services'}>Services</NavLink></li>
        <li><NavLink to={'/About'}>About Us</NavLink></li>
        <li><NavLink to={'/Contact'}>Contact</NavLink></li>
    </>;
    const logout = ()=>{
        logOut()
        .then()
        
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <Link to={'/'}><img src={logo} alt="logo" className="w-32 md:w-40" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                {/* ................................. */}
                {
                    user?<>
                    <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li onClick={logout}><a>Logout</a></li>
                    </ul>
                </div>
                
                    </>:<>
                    <div className="space-x-2">
                    <Link to={'/singUp'}><button className="btn btn-sm ">Sing Up</button></Link>
                    <Link to={'/singIn'}><button className="btn btn-sm ">Sing In</button></Link>
                    </div>
                    
                    </>
                }
                
            

            {/* ................................. */}
        </div>
</div >
    );
};

export default NavBar;