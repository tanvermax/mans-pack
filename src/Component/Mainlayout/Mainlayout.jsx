import React from 'react';
import Navber from './Navber/Navber';
import Banner from '../Banner/Banner';
import Section1 from '../Section1/Section1';
// import Section2 from '../Section2/Section2';
import Aboutus from '../Aboutus/Aboutus';
import Ourservice from '../Ourservice/Ourservice';
import Mothercompany from '../Mothercompany/Mothercompany';
import Amessage from '../Amessage/Amessage';
import Ourclient from '../Ourclient/Ourclient';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const Mainlayout = () => {
    return (
        <div>
            <Navber></Navber>
            <div className='min-h-[70vh]'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            {/* <Mothercompany></Mothercompany> */}
        </div>
    );
};

export default Mainlayout;