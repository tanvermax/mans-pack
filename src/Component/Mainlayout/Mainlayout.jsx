import React from 'react';
import Navber from './Navber/Navber';
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import Amessage from '../Amessage/Amessage';
import Ourclient from '../Ourclient/Ourclient';
import Footer from '../Footer/Footer';
import { Link, Outlet } from 'react-router-dom';
import FloatingChat from './FloatingChat';
import { ToastContainer } from 'react-toastify';

const Mainlayout = () => {
    // const nodeaderfooter = location.pathname.includes('dashboard')
    return (
        <div className=' '>
            <ToastContainer></ToastContainer>
            <div className="border-b-[1px]">
                <div className="">

                    <ul className="lg:text-[15px] md:text-[10px] text-[6px] flex lg:gap-10 gap-1 md:gap-10  lg:py-2 py-1 items-center w-11/12 mx-auto justify-between">
                        <div className="flex lg:gap-5 gap-2 lg:text-sm text-[5px]">
                        <li> +8801787-108216</li>
                        <li>contact:manspacking@gmail.com</li>
                        <li>Sonir akhra, mridha bari road, Dhaka-1362</li>
                        </div>
                        <div className="  lg:block hidden">
                        <div className='flex gap-7'>
                        <Link to={"https://www.facebook.com/manspacking"} className="text-blue-700 lg:text-xl"><FaFacebook /></Link>
                        <Link to={"https://www.linkedin.com/company/manspackaging/"} className="text-[#0077B5] lg:text-xl"><FaLinkedin /></Link>
                        <Link  to={"https://www.instagram.com/manspackaging/"} className="text-[#c13584] lg:text-xl"><CiInstagram /></Link>
                        </div>
                        </div>
                    </ul>

                </div>
            </div>
            <div className='sticky -top-1 lg:top-0 z-10  backdrop-blur-3xl'>

            <Navber></Navber>
            </div>
            <div className='min-h-[70vh] '>
            <Outlet></Outlet>
            </div>
            <FloatingChat></FloatingChat>
           <Footer></Footer>
            {/* <Mothercompany></Mothercompany> */}
        </div>
    );
};

export default Mainlayout;