import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-base-100 shadow-sm">
            <div className="navbar max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor"> <path strokeLinecap="round"
                                    strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link to="/applied jobs">Applied Jobs</Link></li>
                        </ul>
                    </div>
                    <a href='/' className="font-extrabold text-3xl">CareerHub</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href="#" className="font-medium" >Applied Jobs</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn py-5 rounded-lg px-7 h-[50px] text-white bg-gradient-to-r from-blue-500 to-purple-500">Start Applying</button>

                </div>
            </div>
        </nav>
    );
}
export default Navbar;