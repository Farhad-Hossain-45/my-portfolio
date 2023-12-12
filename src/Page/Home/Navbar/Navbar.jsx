import { Link, NavLink } from "react-router-dom";
import Logo from "../../../components/Logo/Logo";


const Navbar = () => {
    const navLink = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About Me</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/skills">Skills</NavLink></li>
     </>
    return (
        <div>
            <div className="navbar flex md:justify-evenly">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <Link><Logo></Logo></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-sky-500">
                        {navLink}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;