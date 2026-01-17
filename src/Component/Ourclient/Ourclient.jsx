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

