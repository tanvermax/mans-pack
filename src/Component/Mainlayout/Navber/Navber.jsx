import React, { useState } from "react";
import logo from "./../../../assets/manspackaginglogo.png"
import { FaChevronDown, FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsChevronBarContract, BsLayoutSidebarReverse } from "react-icons/bs";
import { HiMiniBarsArrowUp } from "react-icons/hi2";
import { VscThreeBars } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { CiInstagram } from "react-icons/ci";

const Navber = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navber = (
        <>
            <ul className="menu menu-horizontal px-1 z-10">
                <li className="hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] "><a className="hover:bg-white"> Home</a></li>
                <li>
                    <details>
                        <summary>Service</summary>
                        <ul className="p-2">
                            <li><a>E-commerce Packaging</a></li>
                            <li><a>Industrial Packaging</a></li>
                            <li><a>Food Packaging</a></li>
                            <li><a>Garments Packaging</a></li>
                        </ul>
                    </details>
                </li>
                <li><a>Portfolio</a></li>
                <li><a>Contact Us</a></li>
                <li><a>About Us</a></li>
                <li><a>Knowledge</a></li>
                <li><a>Enquiry Cart</a></li>
            </ul></>
    )

    return (
        <>
            <div className="border-b-[1px] ">
                <div className="">

                    <ul className="lg:text-[15px] text-[6px] flex lg:gap-10 gap-1 justify-center lg:py-2 py-1 items-center w-11/12 mx-auto">
                        <li> +8801787-108216</li>
                        <li>contact:@manspackaging.com</li>
                        <li>Sonir Akhra, Jatrabari, Dhaka</li>
                        <li className="text-blue-700 lg:text-xl"><FaFacebook /></li>
                        <li className="text-[#0077B5] lg:text-xl"><FaLinkedin /></li>
                        <li className="text-[#c13584] lkg:text-xl"><CiInstagram /></li>
                    </ul>

                </div>
            </div>
            {/* new */}



            <div className="navbar justify-between   w-11/12 mx-auto">
                <div className="navbar-start">

                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img
                            src={logo}
                            className=" lg:w-[300px] md:w-[250px] w-[150px]"
                            alt=""
                        />
                        {/* <span className="self-center text-2xl font-semibold whitespace-nowrap ">
                        Flowbite
                    </span> */}
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    {navber}
                </div>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu -left-40 menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a> Home</a></li>
                        <li>

                            <details>
                                <summary>Service
                                </summary>
                                <ul className="p-2">
                                    <li><a>E-commerce Packaging</a></li>
                                    <li><a>Industrial Packaging</a></li>
                                    <li><a>Food Packaging</a></li>
                                    <li><a>Garments Packaging</a></li>
                                    {/* <li><a>Industrial Packaging</a></li> */}
                                </ul>
                            </details>
                        </li>
                        <li><a>Portfolio</a></li>
                        <li><a>Contact Us</a></li>
                        <li><a>About Us</a></li>
                        <li><a>Knowledge</a></li>
                        <li><a>Enquiry Cart</a></li>
                    </ul>
                </div>
            </div>


            {/* old */}

            
        </>
    );
};

export default Navber;
