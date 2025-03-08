import React from 'react';
import photo from "./../../../src/assets/jz_printing_and_packaging_logo.png"

const Mothercompany = () => {
    return (
        <div className='grid grid-cols-2 w-10/12 mx-auto py-20'>
            <div className='p-10 place-content-center '>
                <h3 className='text-5xl font-bold py-2'>Our Mother Company</h3>
                <p  className='text-base text-gray-600'>JZ Printing & packaging is in the packaging industry since 2012. We have come a long in this short time and become a key player in the local market. JZ is now focusing on expanding and that’s where the idea of creating mans printing & packaging came. We always had the honest intention and belief to give our clients quality and committed service. Now with mans printing & packaging, we are targeting small enterprises to offer our service.</p>
            </div>
            <div className='border-[1px]  place-items-center mx-auto' >
                <img className='h-[300px]' src={photo} alt="" />
            </div>
        </div>
    );
};

export default Mothercompany;