import React, { useEffect, useState } from 'react';
import { FaRegUserCircle, FaSellsy, FaThList } from 'react-icons/fa';
import { SiHomebridge } from "react-icons/si";
import { Link } from 'react-router-dom';
import useAuth from '../../Provider/useAuth';
import useAxiosSecure from '../../Hook/useAxiosSecure';
import { PiFlagBannerFoldDuotone } from 'react-icons/pi';
import { CiImport } from 'react-icons/ci';
import { BsClipboardCheck } from 'react-icons/bs';
import { MdHomeRepairService } from "react-icons/md";


const Dashitem = () => {
    const { user } = useAuth();
    const [userData, setUserData] = useState({});


    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        if (user?.email) {
            axiosSecure.get(`/user?email=${user.email}`)
                .then((res) => {
                    setUserData(res.data);
                });
        }
    }, [user?.email]);


    // console.log(user);
    // console.log(userData);

    return (
        <div className="h-screen bg-gradient-to-b from-white to-gray-100 p-6 flex flex-col">
            {/* User Info */}
            <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md mb-8">
                {
                    userData ? (
                        <>
                            <FaRegUserCircle className="lg:text-5xl text-3xl  mb-2 text-[#25AAE1]" />
                            <p className="text-lg font-semibold text-gray-800">{userData.displayName}</p>
                            <p className="lg:text-sm text-[10px]  text-gray-500">{userData.email}</p>
                            <p className="text-sm lg:text-sm text-[10px] text-[#25AAE1] font-bold mt-1">Role: {userData.role}</p>
                        </>
                    ) : (
                        <>
                            <FaRegUserCircle className="text-5xl text-gray-400 mb-2" />
                            <p className="text-lg text-gray-400">Guest User</p>
                            <p className="text-sm text-gray-300">No Email</p>
                        </>
                    )
                }
            </div>

            {/* Dashboard Title */}
            <h1 className="lg:text-2xl font-bold text-center text-gray-700 mb-6">Dashboard Menu</h1>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-6">
                <Link
                    to="/dashboard/adminhome"
                    className="flex items-center gap-4 text-gray-600 hover:text-green-600 text-lg font-medium lg:px-4 py-2 rounded-lg hover:bg-green-50 transition duration-300"
                >
                    <SiHomebridge className="text-2xl text-[#25AAE1]" />
                    Home
                </Link>

                <Link
                    to="/dashboard/itemdetails"
                    className="flex items-center gap-4 text-gray-600 hover:text-green-600 text-lg font-medium px-4 py-2 rounded-lg hover:bg-green-50 transition duration-300"
                >
                    <FaThList className="text-2xl text-[#25AAE1]" />
                    Blog
                </Link>

                <Link
                    to="/dashboard/userdetails"
                    className="flex items-center gap-4 text-gray-600 hover:text-green-600 text-lg font-medium px-4 py-2 rounded-lg hover:bg-green-50 transition duration-300"
                >
                    <FaRegUserCircle className="text-2xl text-[#25AAE1]" />
                    User
                </Link>
                <Link to={"/dashboard/dynamicbanner"} className='flex items-center lg:gap-4 gap-2 text-gray-600 hover:text-green-600 text-lg font-medium lg:px-4 py-2 rounded-lg hover:bg-green-50 transition duration-300'>
                    <PiFlagBannerFoldDuotone className="text-2xl text-[#25AAE1]" />
                    Banner
                </Link>
                <Link to={"/dashboard/portfolio"} className='flex items-center lg:gap-4 gap-2 text-gray-600 hover:text-green-600 text-lg font-medium lg:px-4 py-2 rounded-lg hover:bg-green-50 transition duration-300'>
                <CiImport  className="text-2xl text-[#25AAE1] " />
                    Portfolio
                </Link>
                <Link to={"/dashboard/clinet"} className='flex items-center lg:gap-4 gap-2 text-gray-600 hover:text-green-600 text-lg font-medium lg:px-4 py-2 rounded-lg hover:bg-green-50 transition duration-300'>
                <BsClipboardCheck  className="text-2xl  text-[#25AAE1]" />
                    Client
                </Link>
                
                <Link to={"/dashboard/serive"} className='flex items-center lg:gap-4 gap-2 text-gray-600 hover:text-green-600 text-lg font-medium lg:px-4 py-2 rounded-lg hover:bg-green-50 transition duration-300'>
                <MdHomeRepairService  className="text-2xl  text-[#25AAE1]" />
                    Service
                </Link>
                <Link to={"/dashboard/sales"} className='flex items-center lg:gap-4 gap-2 text-gray-600 hover:text-green-600 text-lg font-medium lg:px-4 py-2 rounded-lg hover:bg-green-50 transition duration-300'>
                <FaSellsy  className="text-2xl  text-[#25AAE1]" />
                    sales
                </Link>
                
            </nav>
        </div>
    );
};

export default Dashitem;
