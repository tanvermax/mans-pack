import React from 'react';
import photo1 from "./../../../src/assets/service1.png"
import photo2 from "./../../../src/assets/servce2.png"
import photo3 from "./../../../src/assets/service3.png"
import photo4 from "./../../../src/assets/service4.png"
import { motion } from 'framer-motion';

const Ourservice = () => {
    const data = [
        {
            id: 1,
            service: photo1,
            heading: "Ecommerce Packaging",
            descritpion: "Transform your online business with our premium E-commerce Packaging solution."
        },
        {
            id: 2,
            service: photo2,
            heading: "Industrial Packaging",
            descritpion: "Revolutionize your industrial packaging with our durable and customizable solutions."
        }
        , {
            id: 3,
            service: photo3,
            heading: "Food Packaging",
            descritpion: "Protect and preserve your food with our innovative food packaging solutions."
        },
        {
            id: 4,
            service: photo4,
            heading: "garments Packaging",
            descritpion: "Elevate your garment packaging with our premium and sustainable options."
        }
    ]
    return (
        <div className='bg-gray-100'>
            <div className='w-11/12 mx-auto place-items-center py-10'>
                <h2 className='lg:text-5xl md:text-3xl text-xl font-bold lg:py-4'>Our Service</h2>
                <p className='lg:text-xl text-xs text-gray-700 pb-10'>Packaging We Offer</p>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 '>
                    {
                        data.map(d =>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                whileDrag={{ scale: 0.9, rotate: 10 }}
                                drag
                                key={d.id} className=' place-content-center place-items-center p-5'>
                                <img className='rounded-xl p-1 lg:w-[310px] w-[210px] shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]' src={d.service} alt="" />
                                <h3 className='lg:py-5 py-3 lg:text-2xl font-semibold'>{d.heading}</h3>
                                <p className='text-center text-xs lg:text-base text-gray-600'>{d.descritpion}</p>

                            </motion.div>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Ourservice;