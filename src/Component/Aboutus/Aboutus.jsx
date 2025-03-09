import React from 'react';
import photo1 from "./../../assets/IMG-20230909-WA0019-1024x576.jpg"
import photo2 from "./../../assets/mans-packaging-factory--1024x768.jpg"
import photo3 from "./../../assets/mans-packaging-printing-factory-1-1024x759.png"
import photo4 from "./../../assets/mans-printing-and-packaging.jpg"

const Aboutus = () => {
    return (
        <>
        <div className='lg:flex lg:py-10 w-10/12 mx-auto'>
            <div className='grid grid-cols-2 lg:gap-5 gap-2 lg:p-10'>
                <img className='shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-2xl' src={photo1} alt="" />
                <img className='mt-5 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-2xl' src={photo2} alt="" />
                <img src={photo3} className='shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-2xl' alt="" />
                <img className='shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-2xl' src={photo4} alt="" />
            </div>
            <div className=' lg:p-10 mt-10'>
                <h2 className='border-l-4 border-blue-600  lg:text-5xl text-2xl px-6 font-bold'>About Us</h2>
                <p className='py-5 lg:text-base  text-xs'>Mans Printing and Packaging is a packaging manufacturing company located in Dhaka, Bangladesh. Our mission is to provide customized and sustainable packaging solutions to businesses of all sizes.

                    <br /> <br /> Established in 2020, we are a young and ambitious company with a passion for innovation and excellence. we offer a wide range of carton box packaging solutions for e-commerce, food, and industrial applications. <br /> <br />As a carton box manufacturing company, we are provider of customized, sustainable, and high-quality packaging solutions and dedicated to serving businesses of all sizes in Dhaka and beyond. And we pride ourselves on our ability to provide fast and reliable service to our clients. </p>
            </div>
        </div>
        
        </>
    );
};

export default Aboutus;