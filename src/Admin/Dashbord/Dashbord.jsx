import React from 'react';
import Dashitem from '../Dashitem/Dashitem';
import { Link, Outlet } from 'react-router-dom';


const Dashbord = () => {
    return (
        <div className=' bg-[#F8F9FA] text-center'>
            
            <div className='grid grid-cols-12 '>
                <div className='col-span-2 '>
                    <Dashitem></Dashitem>
                </div>
                <div className='col-span-10 bg-gray-400'>
                    {/* <ItemDetails></ItemDetails> */}
                    
                    <Outlet></Outlet>
                </div> 
            </div>
        </div>
    );
};

export default Dashbord;