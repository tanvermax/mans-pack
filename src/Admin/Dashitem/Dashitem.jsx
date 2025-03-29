import React from 'react';
import { Link } from 'react-router-dom';

const Dashitem = () => {
    return (
        <div className='bg-[#4292dd] h-screen'>
            <h1 className='text-3xl font-bold bg-green-900'><Link to={"/dashboard"}>Dashbord</Link></h1>
            <nav>
                <ul>
                    <li></li>
                    <li><Link to={'/'}>home</Link></li>
                    <li><Link to={'/dashboard/itemdetails'}>item</Link></li>
                    <li><Link to={'/dashboard/itemdetails'}>item</Link></li>

                    <li>home</li>
                    <li>home</li>
                    <li>home</li>
                </ul>
            </nav>
        </div>
    );
};

export default Dashitem;