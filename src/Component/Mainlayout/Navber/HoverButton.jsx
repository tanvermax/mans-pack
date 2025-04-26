import React, { useEffect, useState } from 'react';
import useAuth from '../../../Provider/useAuth';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import useAxiosSecure from '../../../Hook/useAxiosSecure';

const HoverButton = () => {
    const { user, logout } = useAuth();
    const [userData, setUserData] = useState({});
    const [isShown, setIsShown] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // Handle click to toggle visibility
    const handleClick = () => {
        setIsShown(prev => !prev);
    };

    const token = localStorage.getItem("access-token");
    const axiosSecure = useAxiosSecure();
    // const [userDa] = userMange();
    useEffect(() => {
        if (user?.email && token) {
            axiosSecure(`/user?email=${user.email}`).then((res) => {
                setUserData(res.data);
            });
        }
    }, [user?.email, token]);

    console.log(user);
    console.log(userData);





    return (
        <>
            {
                user ? (<>
                    <div className='flex'>
                        <div className="relative inline-block ">
                            {/* Primary Button */}
                            <button
                                className="px-5 transition-all duration-300"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                onClick={handleClick}
                            >
                                {

                                    user.photoURL ? <img className="lg:h-10 h-6 w-6 lg:w-10 rounded-full" src={user.photoURL}></img> : <FaUserCircle className="h-6 w-6" />

                                }
                            </button>



                            {/* Secondary Button - Appears on hover OR when clicked */}
                            <div
                                className={`absolute top-full mt-2 left-0 transition-all duration-300 ${(isHovered || isShown)
                                    ? 'opacity-100 transform translate-y-0 pointer-events-auto'
                                    : 'opacity-0 transform -translate-y-2 pointer-events-none'
                                    }`}
                            >
                                {
                                    userData.role === 'admin' ? (<Link to="/dashboard/adminhome" className="btn btn-primary w-full">
                                        Dashboard
                                    </Link>) : null
                                }
                            </div>
                        </div>
                        <div className='lg:flex'>
                            <div>
                                <p className="lg:text-base text-[6px]">{user.email}</p>
                                <p className="lg:text-base text-[6px]">{user.displayName}</p>
                            </div>
                            <button
                                onClick={logout}
                                className="btn btn-xs p-2 lg:btn-md bg-red-300 hover:bg-red-600 text-black">
                                Log Out
                            </button>
                        </div>
                    </div></>) : <><>
                        <Link to={"/signup"} className="btn">SignUp</Link>
                        <Link to={"/login"} className="btn">Login</Link>
                    </></>
            }

        </>
    );
};

export default HoverButton;