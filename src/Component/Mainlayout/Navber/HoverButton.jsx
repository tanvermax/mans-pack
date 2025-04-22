import React, { useState } from 'react';
import useAuth from '../../../Provider/useAuth';
import { Link } from 'react-router-dom';

const HoverButton = () => {
    const { user, logout } = useAuth();
    const [isShown, setIsShown] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // Handle click to toggle visibility
    const handleClick = () => {
        setIsShown(prev => !prev);
    };
// console.log(user);


    return (
        <>
            {
                user ? (<>
                    <div className='flex'>
                        <div className="relative inline-block ">
                            {/* Primary Button */}
                            <button
                                className="btn transition-all duration-300"
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
                                <Link to="/dashboard/adminhome" className="btn btn-primary w-full">
                                    Dashboard
                                </Link>
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