import { motion } from 'framer-motion';
import React from 'react';
import { BsBoxes } from 'react-icons/bs';
import { FaBoxOpen } from 'react-icons/fa';
import { GiBoxUnpacking } from 'react-icons/gi';
import { PiCodesandboxLogoLight } from 'react-icons/pi';

const Section1 = () => {
    const data = [
        {
            icone: <PiCodesandboxLogoLight />,
            heading: "Starting From 1000 Quantity",
            description: "All kinds of Paper-based packaging solutions"

        },
        {
            icone: <BsBoxes />,
            heading: "Custom Design & Size",
            description: "Made cardboard boxes to your exact specifications."

        },
        {
            icone: <GiBoxUnpacking />,
            heading: "Competitive Price",
            description: "Get top-notch carton boxes at budget-friendly prices."

        }, {
            icone: <FaBoxOpen />,
            heading: "High-Quality Ensure",
            description: "Guaranteeing top-notch carton boxes for secure and reliable packaging."

        }
    ]
    return (
        <div className='grid lg:grid-cols-4 grid-cols-2 gap-5 w-11/12 mx-auto lg:py-20 py-5'>
            {

                data.map((d, index) =>
                    
                    <motion.div 
                    className="border-[1px] border-blue-400 rounded-md text-center lg:space-y-4 space-y-2 p-4 shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 2, y: 0 }}
                    transition={{ duration: 0.9, delay: index * 0.3, ease: "easeOut" }}
                    key={index} >
                        <div className='lg:text-5xl text-3xl place-items-center text-[#e69f06] '>{d.icone}</div>
                        <h1 className='text-[10px] lg:text-2xl'>{d.heading}</h1>
                        <p className='text-[8px] lg:text-base' >{d.description}</p>
                    </motion.div>
                )
            }
        </div>
    );
};

export default Section1;