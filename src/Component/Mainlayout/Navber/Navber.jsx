import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../../assets/manspackaginglogo.png";

import HoverButton from "./HoverButton";

const Navber = () => {
    const navItems = (
        <ul className="menu items-center menu-horizontal gap-6 text-[16px] font-medium">
            <li><Link to="/">Home</Link></li>
            <li>
                <details>
                    <summary>Services</summary>
                    <ul className="p-2 bg-white shadow rounded w-56 z-50">
                        <li><Link to="/e-commerce-packaging">E-commerce Packaging</Link></li>
                        <li><Link to="/industrial">Industrial Packaging</Link></li>
                        <li><Link to="/foodpack">Food Packaging</Link></li>
                        <li><Link to="/garmentpack">Garments Packaging</Link></li>
                    </ul>
                </details>
            </li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/knowledge">Knowledge</Link></li>
            <li><Link to="/enquiry">Enquiry Cart</Link></li>
            <li><HoverButton /></li>
        </ul>
    );

    return (
        <>
            {/* Top Info Bar */}
           


            {/* Navbar Main */}
            <div className="flex  w-10/12 mx-auto py-1 items-center lg:px-4">
                <div className="navbar-start">
                    <Link to="/" className="flex items-center ">
                        <img src={logo} alt="Logo" className="lg:w-72 md:w-52 w-32" />
                    </Link>
                </div>

                <div className="navbar-center  hidden lg:flex">
                    {navItems}
                </div>

                {/* Mobile Dropdown */}
                <div className="navbar-end  lg:hidden">
                    <div className="dropdown dropdown-end">
                        <button tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </button>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-56"
                        >
                            <li><Link to="/">Home</Link></li>
                            <li>
                                <details>
                                    <summary>Services</summary>
                                    <ul className="p-2 bg-white shadow rounded">
                                        <li><Link to="/e-commerce-packaging">E-commerce Packaging</Link></li>
                                        <li><Link to="/industrial">Industrial Packaging</Link></li>
                                        <li><Link to="/foodpack">Food Packaging</Link></li>
                                        <li><Link to="/garmentpack">Garments Packaging</Link></li>
                                    </ul>
                                </details>
                            </li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/contactus">Contact Us</Link></li>
                            <li><Link to="/aboutus">About Us</Link></li>
                            <li><Link to="/knowledge">Knowledge</Link></li>
                            <li><Link to="/enquiry">Enquiry Cart</Link></li>
                            <li><HoverButton /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navber;
