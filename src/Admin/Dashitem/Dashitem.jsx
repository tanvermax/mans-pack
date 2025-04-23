import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { SiHomebridge } from "react-icons/si";
import { VscGraphLine } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import { RiAlignItemLeftLine } from "react-icons/ri";
import { TiCalendar, TiCogOutline } from "react-icons/ti";
import useAuth from '../../Provider/useAuth';


const Dashitem = () => {
    const { user } = useAuth();
    return (
        <div className=' h-screen '>
            <div className='place-items-center p-5 '>
                {
                    user ? <>
                    <p>User:{user.displayName}</p>
                    <p className='text-xs'>Email: {user.email}</p>
                    <p>Role: admin</p>

                    </> : <> <FaRegUserCircle />
                        <p>user:name</p>
                        <p>email</p>
                       
                        </>
                }
            </div>
            <h1 className='text-3xl font-bold '><Link to={"/dashboard"}>Dashbord</Link></h1>
            <nav>
                <ul className=' flex flex-col gap-5'>
                    {/* <li ></li> */}
                    <li className='w-5 mx-auto '>Home<Link className=' text-3xl hover:text-green-600' to={'/dashboard/adminhome'}><SiHomebridge /></Link></li>
                    {/* <li className='w-5 mx-auto '>client<Link className=' text-3xl hover:text-green-600' to={'/dashboard/itemdetails'}><RiAlignItemLeftLine /></Link></li> */}
                    <li className='w-5 mx-auto '>User<Link className=' text-3xl hover:text-green-600' to={'/dashboard/userdetails'}><FaRegUserCircle /></Link></li>
                    {/* <li className='w-5 mx-auto '>Sales<Link to={"/dashboard/sales"} className=' text-3xl hover:text-green-600'><VscGraphLine /></Link></li> */}
                    {/* <li className='w-5 mx-auto '>Date<Link className=' text-3xl hover:text-green-600'><TiCalendar /></Link></li> */}
                    {/* <li className='w-5 mx-auto '>Setting<Link className=' text-3xl hover:text-green-600'><TiCogOutline /></Link></li> */}

                </ul>
            </nav>
        </div>
    );
};

export default Dashitem;