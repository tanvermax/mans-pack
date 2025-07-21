import React from 'react';
import "./map.css"
import { RiUserLocationLine } from 'react-icons/ri';
import { FaMapLocationDot } from 'react-icons/fa6';
import { MdMarkEmailRead, MdOutlineContactMail, MdOutlinePermPhoneMsg } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io';
const Map = () => {
    return (
        <div className='grid md:grid-cols-2 w-11/12 mx-auto py-10'>
            <div className='responsive-map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14612.553621213934!2d90.44161161761207!3d23.706751007700177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b7993e1f5747%3A0x8b5d0de11efc90a5!2sMANS%20PRINTING%20%26%20PACKAGING%20(Office)!5e0!3m2!1sen!2sbd!4v1741553208162!5m2!1sen!2sbd" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div>
                <h2 className='text-center md:text-5xl font-bold text-2xl py-2'>Get in touch</h2>

                <address className='grid grid-cols-2 px-10 gap-5'>
                    <div>
                        <h3 className='text-xl '>Location</h3>
                        <ul className='text-gray-600 py-3 flex'><FaMapLocationDot   className='text-5xl mr-5'/> Sonir Akhra, Midhra bari Road

                            Jatrabari, Dhaka-1362</ul>
                    </div>
                    <div>
                        <h2 className='text-xl'>Contact Us</h2>
                        <ul  className='text-gray-600 py-3 space-y-2'>
                            <li className='flex gap-4'><MdOutlinePermPhoneMsg className='text-3xl' />  +8801787-108216</li>
                            <li className='flex gap-4'><IoLogoWhatsapp className='text-3xl' /> +8801787-108216</li>
                            <li className='flex gap-4'><MdMarkEmailRead className='text-3xl' /> contact@manspackaging.com</li>
                            <li className='flex gap-4'><MdOutlineContactMail className='text-3xl' />manspacking@gmail.com                            </li>
                        </ul>
                    </div>
                </address>

            </div>
        </div>
    );
};

export default Map;