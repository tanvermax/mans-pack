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

    const handleClick = () => {
        setIsShown(prev => !prev);
    };

    const token = localStorage.getItem("access-token");
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        if (user?.email && token) {
            axiosSecure.get(`/user?email=${user.email}`)
                .then((res) => setUserData(res.data));
        }
    }, [user?.email, token]);

    return (
        <>
            {user ? (
                <div className="flex items-center gap-4">
                    {/* Avatar with Hover/Click Menu */}
                    <div className="relative">
                        <button
                            className="rounded-full border-2 border-gray-300 overflow-hidden hover:shadow-lg transition"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            onClick={handleClick}
                        >
                            {user.photoURL ? (
                                <img src={user.photoURL} alt="User" className="h-10 w-10 rounded-full" />
                            ) : (
                                <FaUserCircle className="text-3xl text-gray-600" />
                            )}
                        </button>

                        {/* Dropdown */}
                        <div
                            className={`absolute top-full left-0 mt-2 bg-white rounded-md shadow-md w-44 p-3 z-50 transition-all duration-300 ${
                                isHovered || isShown ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                            }`}
                        >
                            {userData.role === 'admin' && (
                                <Link to="/dashboard/adminhome" className="block text-sm py-1 px-3 rounded hover:bg-gray-100">
                                    Admin Dashboard
                                </Link>
                            )}
                            <p className="text-xs text-gray-500 mt-2">{user.email}</p>
                            <p className="text-xs text-gray-600">{user.displayName}</p>
                            <button
                                onClick={logout}
                                className="mt-3 w-full bg-red-500 hover:bg-red-600 text-white text-sm py-1 rounded"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex gap-2">
                    <Link to="/signup" className="btn btn-outline btn-sm">Sign Up</Link>
                    <Link to="/login" className="btn btn-primary btn-sm">Login</Link>
                </div>
            )}
        </>
    );
};

export default HoverButton;
