import React from 'react';

const Ourclient = () => {
    const logos = [
        "/logos/company1.png",
        "/logos/company2.png",
        "/logos/company3.png",
        "/logos/company4.png",
        "/logos/company5.png",
      ];
    return (
        <div className='w-11/12 mx-auto place-items-center '>
            <h2 className='lg:text-5xl text-xl font-bold lg:py-4'>Our Service</h2>
            <p className='lg:text-xl text-xs text-gray-700 pb-10'>Packaging We Offer</p>
            <div>
                <div className="overflow-hidden bg-gray-100 py-6">
                    <motion.div
                        className="flex space-x-10 w-max"
                        initial={{ x: "100%" }}
                        animate={{ x: "-100%" }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 10, // Adjust speed
                        }}
                    >
                        {[...logos, ...logos].map((logo, index) => (
                            <img key={index} src={logo} alt="Client Logo" className="h-16" />
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Ourclient;