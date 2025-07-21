import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import useaxiospublic from '../../Hook/useaxiospublic';

const Ourclient = () => {
    const [clients, setClients] = useState([]);
    const axiosPublic = useaxiospublic();

    const fetchClients = async () => {
        try {
            const res = await axiosPublic.get('/client');
            setClients(res.data);
        } catch (err) {
            console.error("Error fetching client data:", err);
        }
    };

    useEffect(() => {
        fetchClients();
    }, []);

    // Duplicate the clients array to create seamless loop
    const duplicatedClients = [...clients, ...clients];

    return (
        <div className='mx-auto py-15 overflow-hidden bg-gray-100'>
            <div className='max-w-7xl mx-auto px-4'>
                <h2 className='lg:text-5xl text-3xl font-bold lg:py-4 text-center'>Our Clients</h2>
                <p className='lg:text-xl text-base text-gray-500 pb-10 text-center'>Pleasure to work with</p>
                
                <div className="relative py-6 overflow-hidden">
                    {/* First Marquee */}
                    <motion.div
                        className="flex space-x-10 min-w-max"
                        animate={{ x: ["0%", "-100%"] }}
                        transition={{
                            ease: "linear",
                            duration: 20,
                            repeat: Infinity,
                        }}
                    >
                        {duplicatedClients.map((logo, index) => (
                            <motion.div
                                key={`first-${index}`}
                                whileHover={{ scale: 1.1 }}
                                className="flex-shrink-0 px-4"
                            >
                                <img 
                                    src={logo.imageUrl} 
                                    alt="Client Logo" 
                                    className="h-16 max-w-[120px] object-contain" 
                                />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Second Marquee (for continuous effect) */}
                    <motion.div
                        className="flex space-x-10 min-w-max absolute top-6"
                        animate={{ x: ["100%", "0%"] }}
                        transition={{
                            ease: "linear",
                            duration: 20,
                            repeat: Infinity,
                        }}
                    >
                        {duplicatedClients.map((logo, index) => (
                            <motion.div
                                key={`second-${index}`}
                                whileHover={{ scale: 1.1 }}
                                className="flex-shrink-0 px-4"
                            >
                                <img 
                                    src={logo.imageUrl} 
                                    alt="Client Logo" 
                                    className="h-16 max-w-[120px] object-contain" 
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Ourclient;



// import photo1 from './../../../src/assets/client/pran-logo-416D020A91-seeklogo.com.png'
// import photo2 from './../../../src/assets/client/gazi-group.jpg'
// import photo3 from './../../../src/assets/client/Star Ciramics.png'
// import photo4 from './../../../src/assets/client/Amar Food.png'
// import photo5 from './../../../src/assets/client/Partex Group.png'
// import photo6 from './../../../src/assets/client/autocom_logo_white_bg-e1518896407425-1-600x137.png'
// import photo7 from './../../../src/assets/client/Jennys___Logo_1.jpg'
// import photo8 from './../../../src/assets/client/Robi_Axiata.svg.png'
// import photo9 from './../../../src/assets/client/Chaldal.com_logo.png'
// import photo10 from './../../../src/assets/client/Pacific Pharma.png'
// import photo11 from './../../../src/assets/client/Pacific Pharma logo.jpg'
// import photo12 from './../../../src/assets/client/1617800247ATXME_s.jpg'
// import photo13 from './../../../src/assets/client/images2.png'
// import photo14 from './../../../src/assets/client/1693720984.Logo-Final.png'
// import photo15 from './../../../src/assets/client/images3.png'
// import photo16 from './../../../src/assets/client/khadim-ceramics.jpg'
// import photo17 from './../../../src/assets/client/images3.jpeg'
// import photo18 from './../../../src/assets/client/Mirpur Ciramics.jpeg'
// import photo19 from './../../../src/assets/client/Asian Battery.jpeg'
// import photo20 from './../../../src/assets/client/Asian Battery.png'
// import photo21 from './../../../src/assets/client/Argus Metals.jpeg'
// import photo22 from './../../../src/assets/client/MEP Group.png'
// import photo23 from './../../../src/assets/client/Coppertech.jpeg'
// import photo24 from './../../../src/assets/client/pacific-pharmaceuticals-ltd-logo-77E80B4FBF-seeklogo.com.png'
// import photo25 from './../../../src/assets/client/Pacific Pharma logo2.jpg'
// import photo26 from './../../../src/assets/client/Pacific Pharma logo3.jpg'
// import photo27 from './../../../src/assets/client/Tank.png'
// import photo28 from './../../../src/assets/client/Madina Group.jpeg'
// import photo29 from './../../../src/assets/client/AB Group.jpg'
// import photo30 from './../../../src/assets/client/AB Group1.jpg'
// import photo31 from './../../../src/assets/client/Bangladesg Army.jpg'
// import photo32 from './../../../src/assets/client/BRAC Log.png'
// import photo33 from './../../../src/assets/client/Daraz.png'
// import photo34 from './../../../src/assets/client/Jadroo Logo.png'
// import photo35 from './../../../src/assets/client/Panda Shoes.png'
// import photo36 from './../../../src/assets/client/VIctory Footwear.jpeg'
// import photo37 from './../../../src/assets/client/seiko-watch2671.jpg'
// import photo38 from './../../../src/assets/client/Circle Cable.png'
// import photo39 from './../../../src/assets/client/Circle Cable2.png'
// import photo40 from './../../../src/assets/client/Daraz Logo.png'


//  const logos = [
//     { "id": 1, photoname: photo1 },
//     { "id": 2, photoname: photo2 },
//     { "id": 3, photoname: photo3 },
//     { "id": 4, photoname: photo4 },
//     { "id": 5, photoname: photo5 },
//     { "id": 6, photoname: photo6 },
//     { "id": 7, photoname: photo7 },
//     { "id": 8, photoname: photo8 },
//     { "id": 9, photoname: photo9 },
//     { "id": 10, photoname: photo10 },
//     { "id": 11, photoname: photo11 },
//     { "id": 12, photoname: photo12 },
//     { "id": 13, photoname: photo13 },
//     { "id": 14, photoname: photo14 },
//     { "id": 15, photoname: photo15 },
//     { "id": 16, photoname: photo16 },
//     { "id": 17, photoname: photo17 },
//     { "id": 18, photoname: photo18 },
//     { "id": 19, photoname: photo19 },
//     { "id": 20, photoname: photo20 },
//     { "id": 21, photoname: photo21 },
//     { "id": 22, photoname: photo22 },
//     { "id": 23, photoname: photo23 },
//     { "id": 24, photoname: photo24 },
//     { "id": 25, photoname: photo25 },
//     { "id": 26, photoname: photo26 },
//     { "id": 27, photoname: photo27 },
//     { "id": 28, photoname: photo28 },
//     { "id": 29, photoname: photo29 },
//     {
//         "id": 30,
//         photoname: photo30
//     },
//     { "id": 31, photoname: photo31 },
//     { "id": 32, photoname: photo32 },
//     { "id": 33, photoname: photo33 },
//     { "id": 34, photoname: photo34 },
//     { "id": 35, photoname: photo35 },
//     { "id": 36, photoname: photo36 },
//     { "id": 37, photoname: photo37 },
//     { "id": 38, photoname: photo38 },
//     { "id": 39, photoname: photo39 },
//     { "id": 40, photoname: photo40 }
// ]