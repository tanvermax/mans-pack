import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useaxiospublic from '../../Hook/useaxiospublic';

const Ourservice = () => {

    const axiosPublic = useaxiospublic();

    const [sata, setData] = useState([]);
    const fetchClients = async () => {
        try {
            const res = await axiosPublic.get('/service');
            setData(res.data);
        } catch (err) {
            console.error("Error fetching client data:", err);
        }
    };

    useEffect(() => {
        fetchClients();
    }, []);

    // console.log(sata)
    return (
        <div className='bg-gray-100'>
            <div className='lg:w-11/12 mx-auto place-items-center lg:py-10 py-5'>
                <h2 className='lg:text-5xl md:text-3xl text-xl font-bold lg:py-4 '>Our Service</h2>
                <p className='lg:text-xl text-xs text-gray-700 pb-10'>Packaging We Offer</p>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 '>
                    {
                        sata.map((d,index) =>
                            <motion.div
                                whileHover={{ scale: 1.1 }}


                                key={index} className=' place-content-center place-items-center p-5'>
                                <img className='rounded-xl p-1 lg:w-[310px] w-[160px] shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]' src={d.service} alt="" />
                                <h3 className='lg:py-5 py-3 lg:text-2xl font-semibold'>{d.heading}</h3>
                                <p className='text-center text-xs lg:text-base text-gray-600'>{d.description}</p>

                            </motion.div>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Ourservice;