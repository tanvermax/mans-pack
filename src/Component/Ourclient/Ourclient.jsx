import React from 'react';
import photo1 from './../../../src/assets/client/pran-logo-416D020A91-seeklogo.com.png'
import photo2 from './../../../src/assets/client/gazi-group.jpg'
import photo3 from './../../../src/assets/client/Star Ciramics.png'
import photo4 from './../../../src/assets/client/Amar Food.png'
import photo5 from './../../../src/assets/client/Partex Group.png'
import photo6 from './../../../src/assets/client/autocom_logo_white_bg-e1518896407425-1-600x137.png'
import photo7 from './../../../src/assets/client/Jennys___Logo_1.jpg'
import photo8 from './../../../src/assets/client/Robi_Axiata.svg.png'
import photo9 from './../../../src/assets/client/Chaldal.com_logo.png'
import photo10 from './../../../src/assets/client/Pacific Pharma.png'
import photo11 from './../../../src/assets/client/Pacific Pharma logo.jpg'
import photo12 from './../../../src/assets/client/1617800247ATXME_s.jpg'
import photo13 from './../../../src/assets/client/images2.png'
import photo14 from './../../../src/assets/client/1693720984.Logo-Final.png'
import photo15 from './../../../src/assets/client/images3.png'
import photo16 from './../../../src/assets/client/khadim-ceramics.jpg'
import photo17 from './../../../src/assets/client/images3.jpeg'
import photo18 from './../../../src/assets/client/Mirpur Ciramics.jpeg'
import photo19 from './../../../src/assets/client/Asian Battery.jpeg'
import photo20 from './../../../src/assets/client/Asian Battery.png'
import photo21 from './../../../src/assets/client/Argus Metals.jpeg'
import photo22 from './../../../src/assets/client/MEP Group.png'
import photo23 from './../../../src/assets/client/Coppertech.jpeg'
import photo24 from './../../../src/assets/client/pacific-pharmaceuticals-ltd-logo-77E80B4FBF-seeklogo.com.png'
import photo25 from './../../../src/assets/client/Pacific Pharma logo2.jpg'
import photo26 from './../../../src/assets/client/Pacific Pharma logo3.jpg'
import photo27 from './../../../src/assets/client/Tank.png'
import photo28 from './../../../src/assets/client/Madina Group.jpeg'
import photo29 from './../../../src/assets/client/AB Group.jpg'
import photo30 from './../../../src/assets/client/AB Group1.jpg'
import photo31 from './../../../src/assets/client/Bangladesg Army.jpg'
import photo32 from './../../../src/assets/client/BRAC Log.png'
import photo33 from './../../../src/assets/client/Daraz.png'
import photo34 from './../../../src/assets/client/Jadroo Logo.png'
import photo35 from './../../../src/assets/client/Panda Shoes.png'
import photo36 from './../../../src/assets/client/VIctory Footwear.jpeg'
import photo37 from './../../../src/assets/client/seiko-watch2671.jpg'
import photo38 from './../../../src/assets/client/Circle Cable.png'
import photo39 from './../../../src/assets/client/Circle Cable2.png'
import photo40 from './../../../src/assets/client/Daraz Logo.png'

import { motion } from "framer-motion";

const Ourclient = () => {
    const logos = [
        { "id": 1, photoname: photo1 },
        { "id": 2, photoname: photo2 },
        { "id": 3, photoname: photo3 },
        { "id": 4, photoname: photo4 },
        { "id": 5, photoname: photo5 },
        { "id": 6, photoname: photo6 },
        { "id": 7, photoname: photo7 },
        { "id": 8, photoname: photo8 },
        { "id": 9, photoname: photo9 },
        { "id": 10, photoname: photo10 },
        { "id": 11, photoname: photo11 },
        { "id": 12, photoname: photo12 },
        { "id": 13, photoname: photo13 },
        { "id": 14, photoname: photo14 },
        { "id": 15, photoname: photo15 },
        { "id": 16, photoname: photo16 },
        { "id": 17, photoname: photo17 },
        { "id": 18, photoname: photo18 },
        { "id": 19, photoname: photo19 },
        { "id": 20, photoname: photo20 },
        { "id": 21, photoname: photo21 },
        { "id": 22, photoname: photo22 },
        { "id": 23, photoname: photo23 },
        { "id": 24, photoname: photo24 },
        { "id": 25, photoname: photo25 },
        { "id": 26, photoname: photo26 },
        { "id": 27, photoname: photo27 },
        { "id": 28, photoname: photo28 },
        { "id": 29, photoname: photo29 },
        { "id": 30, photoname: photo30 },
        { "id": 31, photoname: photo31 },
        { "id": 32, photoname: photo32 },
        { "id": 33, photoname: photo33 },
        { "id": 34, photoname: photo34 },
        { "id": 35, photoname: photo35 },
        { "id": 36, photoname: photo36 },
        { "id": 37, photoname: photo37 },
        { "id": 38, photoname: photo38 },
        { "id": 39, photoname: photo39 },
        { "id": 40, photoname: photo40 }
    ]

    return (
        <div className=' mx-auto place-items-center py-15 bg-gray-100'>
            <h2 className='lg:text-5xl text-xl font-bold lg:py-4'>Our Clients</h2>
            <p className='lg:text-xl text-xs text-gray-500 pb-10'>Pleasure to work with</p>
            <div>
                <div className="overflow-hidden  py-6">
                    <motion.div
                        className="flex space-x-10 w-[98vw] "
                        initial={{ x: "10%" }}
                        animate={{ x: "-10%" }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 5, // Adjust speed
                        }}
                    >
                        {[...logos, ...logos].map((logo, index) => (
                            <motion.img
                                whileHover={{ scale: 1.1 }}
                                
                               
                                src={logo.photoname} alt="Client Logo" className="h-16 " />
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Ourclient;