// import React, { useState } from "react";
import logo from "./../../../assets/manspackaginglogo.png"
import { FaChevronDown, FaFacebook, FaLinkedin } from "react-icons/fa";
// import { BsChevronBarContract, BsLayoutSidebarReverse } from "react-icons/bs";
// import { HiMiniBarsArrowUp } from "react-icons/hi2";
// import { VscThreeBars } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { CiInstagram } from "react-icons/ci";
import useAuth from "../../../Provider/useAuth";
import HoverButton from "./HoverButton";

const Navber = () => {
    const { user } = useAuth();
    console.log(user);





    const navber = (
        <>
            <ul className="menu menu-horizontal px-1 z-10 gap-10 text-base ">
                <li className="hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] "><Link to={"/"} className="hover:bg-white"> Home</Link></li>
                <li className="hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] ">
                    <details>
                        <summary>Service</summary>
                        <ul className="p-2 lg:w-[250px]">
                            <li><Link to={"/e-commerce-packaging"}>E-commerce Packaging</Link></li>
                            {/* <li><a></a></li> */}
                            <li><Link to={"/industrial"}>Industrial Packaging</Link></li>
                            <li><Link>Food Packaging</Link></li>
                            <li><Link>Garments Packaging</Link></li>
                        </ul>
                    </details>
                </li>
                <li className="hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] "><Link>Portfolio</Link></li>
                <li className="hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] "><Link to={"/contactus"}>Contact Us</Link></li>
                <li className="hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] "><Link to={"/aboutus"}>About Us</Link></li>
                <li className="hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] "><Link to={"/aboutus"}>Knowledge</Link></li>
                <li className="hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] "><Link to={"/aboutus"}>Enquiry Cart</Link></li>
                {/* <li className="hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] "><HoverButton></HoverButton></li> */}
                <div className="flex gap-2 ">
                <HoverButton></HoverButton>
                </div>
            </ul></>
    )

    return (
        <>
            <div className="border-b-[1px] ">
                <div className="">

                    <ul className="lg:text-[15px] md:text-[10px] text-[6px] flex lg:gap-10 gap-1 md:gap-10 justify-center lg:py-2 py-1 items-center w-11/12 mx-auto">
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



            <div className=" navbar  justify-between   w-11/12 mx-auto">
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
                                    <li><Link to={"/e-commerce-packaging"}>E-commerce Packaging</Link></li>
                                    <li><Link>Industrial Packaging</Link></li>
                                    <li><Link>Food Packaging</Link></li>
                                    <li><Link>Garments Packaging</Link></li>
                                    {/* <li><a>Industrial Packaging</a></li> */}
                                </ul>
                            </details>
                        </li>
                        <li><Link>Portfolio</Link></li>
                        <li><Link to={"/contactus"}>Contact Us</Link></li>
                        <li><Link to={"/aboutus"}>About Us</Link></li>
                        <li><Link>Knowledge</Link></li>
                        <li><Link>Enquiry Cart</Link></li>
                        <div className="flex gap-2 ">
                        <HoverButton></HoverButton>

                        </div>
                    </ul>
                </div>
            </div>


            {/* old */}


        </>
    );
};

export default Navber;
