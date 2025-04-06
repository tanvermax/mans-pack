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
                    <div key={index} className='border-[1px] border-blue-400 rounded-md text-center lg:space-y-3.5  space-y-1 p-3 shadow-2xl'>
                        <div className='lg:text-5xl text-3xl place-items-center text-[#e69f06] '>{d.icone}</div>
                        <h1 className='text-[10px] lg:text-2xl'>{d.heading}</h1>
                        <p className='text-[8px] lg:text-xl' >{d.description}</p>
                    </div>
                )
            }
        </div>
    );
};

export default Section1;