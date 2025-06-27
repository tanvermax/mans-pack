import React from 'react';
import { FaEnvelope, FaFacebookF, FaFax, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaPinterest, FaTiktok } from 'react-icons/fa';
import photo1 from "./../../../src/assets/MansPackaging2.png"
import { IoLogoYoutube } from 'react-icons/io';
const Footer = () => {
    return (
        <div>
            <footer className="bg-gradient-to-b from-[#0F172A] to-[#1E293B] text-gray-300 py-10">
                <div className="container mx-auto px-6 lg:px-20 text-center  ">
                    {/* Logo & Description */}
                    <div className="flex flex-row  justify-between">
                        <div className='flex flex-col'>
                            <img src={photo1} className='w-52 mx-auto' alt="mans packaging" />
                            {/* Social Icons */}

                            <div className="flex justify-center lg:space-x-9 space-x-5 mt-5">
                                <a href="https://www.facebook.com/manspacking" className="text-blue-500 hover:scale-110 transition duration-300">
                                    <FaFacebookF size={24} />
                                </a>
                                <a href="https://www.linkedin.com/company/manspackaging/" className="text-blue-700 hover:scale-110 transition duration-300">
                                    <FaLinkedinIn size={24} />
                                </a>
                                <a href="https://www.instagram.com/manspackaging/" className="text-pink-500 hover:scale-110 transition duration-300">
                                    <FaInstagram size={24} />
                                </a>
                                <a href="https://www.pinterest.com/manspacking/" className="text-gray-300 hover:scale-110 transition duration-300">
                                    <FaPinterest size={24} />

                                </a>
                                <a href="https://www.youtube.com/@MansPackaging" className="text-gray-300 hover:scale-110 transition duration-300">
                                    <IoLogoYoutube size={24} />


                                </a>
                                <a href="=https://www.tiktok.com/@mans.packaging" className="text-gray-300 hover:scale-110 transition duration-300">
                                    <FaTiktok size={24} />


                                </a>
                            </div>
                            {/* Contact Details */}
                            <div className=" grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 text-center lg:text-base text-xs">
                                <div className="flex gap-5  items-center">
                                    <FaPhoneAlt size={22} className="text-blue-400 mb-2" />
                                    <div className='text-left'>
                                        <p className="lg:text-sm text-gray-400">Tel</p>
                                        <p className="lg:text-sm md:text-[10px] text-white font-medium">+8801787-108216</p>
                                    </div>
                                </div>
                                <div className="flex  gap-5 items-center">
                                    <FaEnvelope size={22} className="text-blue-400 mb-2" />
                                    <div className='text-left'>
                                        <p className="lg:text-sm text-gray-400">Mail</p>
                                        <p className="lg:text-sm md:text-[10px] text-white font-medium">manspacking@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex gap-5 items-center">
                                    <FaMapMarkerAlt size={22} className="text-blue-400 mb-2" />
                                    <div className=' text-left'>
                                        <p className="lg:text-sm text-gray-400">Address</p>
                                        <p className="lg:text-sm md:text-[10px] text-white font-medium">Sonir akhra, mridha bari road, Dhaka-1362</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <p className="lg:mt-2 hidden md:block mt-14 lg:leading-9 leading-7 px-2 max-w-xl lg:text-base text-xs text-gray-400 ">
                            Mans Packaging is a paper-based packaging manufacturing company in Bangladesh. We provide packaging service for Food , Cosmetics, ecommerce, Jewelry, Ceramics, Glassware’s, Pharmaceuticals, Bakery & pastry, Agriculture, & etc.
                        </p>
                        {/* <a href="#" className="text-blue-400 hover:text-blue-300 mt-2 inline-block font-semibold">
                            Read more...
                        </a> */}
                    </div>





                    {/* Footer Bottom */}
                    <div className="border-t  border-gray-700 md:mt-6 lg:pt-4  text-gray-400 lg:text-base text-xs">
                        <div className="flex justify-between mt-5  md:px-20 ">
                            <a href="#" className="hover:text-white">Terms of Service</a>
                            <a href="#" className="hover:text-white">Privacy Policy</a>
                            <a href="#" className="hover:text-white">Security</a>
                        </div>

                    </div>

                </div>
            </footer>
            <div className=' bg-[#1E293B]'>
                <p className="md:px-40 text-[6px] md:text-[10px] lg:text-base lg:w-xl mx-auto text-gray-500 text-center md:text-left">&copy; 2025 Copyright by Mans Packaging | Developed by <a href="https://portfolio-e021a.web.app" target="_blank">tanver</a> </p>
            </div>
        </div>
    );
};

export default Footer;