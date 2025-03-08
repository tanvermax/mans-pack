import React from 'react';
import { FaEnvelope, FaFacebookF, FaFax, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import photo1 from "./../../../src/assets/MansPackaging2.png"
const Footer = () => {
    return (
        <div>
            <footer className="bg-gradient-to-b from-[#0F172A] to-[#1E293B] text-gray-300 py-10">
                <div className="container mx-auto px-6 lg:px-20 text-center">
                    {/* Logo & Description */}
                    <div className="flex flex-col items-center">
                        <img src={photo1} alt="" />
                        <p className="mt-2 max-w-xl lg:text-base text-xs text-gray-400">
                            Mans Packaging is a paper-based packaging manufacturing company in Bangladesh. We provide packaging service for Food , Cosmetics, ecommerce, Jewelry, Ceramics, Glassware’s, Pharmaceuticals, Bakery & pastry, Agriculture, & etc.
                        </p>
                        {/* <a href="#" className="text-blue-400 hover:text-blue-300 mt-2 inline-block font-semibold">
                            Read more...
                        </a> */}
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center space-x-9 mt-5">
                        <a href="#" className="text-blue-500 hover:scale-110 transition duration-300">
                            <FaFacebookF size={24} />
                        </a>
                        <a href="#" className="text-blue-700 hover:scale-110 transition duration-300">
                            <FaLinkedinIn size={24} />
                        </a>
                        <a href="#" className="text-pink-500 hover:scale-110 transition duration-300">
                            <FaInstagram size={24} />
                        </a>
                        <a href="#" className="text-gray-300 hover:scale-110 transition duration-300">
                            <FaXTwitter size={24} />
                        </a>
                    </div>

                    {/* Contact Details */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-center lg:text-base text-xs">
                        <div className="flex gap-5  items-center">
                            <FaPhoneAlt size={22} className="text-blue-400 mb-2" />
                            <div className='text-left'>
                                <p className="text-sm text-gray-400">Tel</p>
                                <p className="text-white font-medium">+8801787-108216</p>
                            </div>
                        </div>
                        <div className="flex  gap-5 items-center">
                            <FaEnvelope size={22} className="text-blue-400 mb-2" />
                            <div className='text-left'>
                                <p className="text-sm text-gray-400">Mail</p>
                                <p className="text-white font-medium">contact@manspackaging.com</p>
                            </div>
                        </div>
                        <div className="flex gap-5 items-center">
                            <FaMapMarkerAlt size={22} className="text-blue-400 mb-2" />
                            <div className=' text-left'>
                                <p className="text-sm text-gray-400">Address</p>
                                <p className="text-white font-medium">Sonir Akhra, Midhra bari Road

Jatrabari, Dhaka-1362</p>
                            </div>
                        </div>
                        {/* <div className="flex gap-5 items-center">
                            <FaFax size={22} className="text-blue-400 mb-2" />
                            <div className=' text-left '>
                                <p className="text-sm text-gray-400">Fax</p>
                                <p className="text-white font-medium">+1-548-2588</p>
                            </div>
                        </div> */}
                    </div>

                    {/* Footer Bottom */}
                    <div className="border-t border-gray-700 mt-6 pt-4 flex flex-col md:flex-row justify-between text-gray-400 lg:text-base text-xs">
                        <p className="text-center md:text-left">&copy; 2022 Copyright by Mans Packaging</p>
                        <div className="flex justify-center md:justify-end space-x-4 mt-2 md:mt-0">
                            <a href="#" className="hover:text-white">Terms of Service</a>
                            <a href="#" className="hover:text-white">Privacy Policy</a>
                            <a href="#" className="hover:text-white">Security</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;