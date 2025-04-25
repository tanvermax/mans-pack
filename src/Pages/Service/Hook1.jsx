import React from 'react';

const Hook1 = ({mainheading,photo,photo2, headin1,headin2,description1,description12,description13,description14,description2,description22,description23,description24}) => {
    return (
       <div className=' py-10'>
                   <h1 className='md:text-3xl text-xs font-bold w-11/12 mx-auto'>{mainheading}</h1>
                   <div className='md:grid flex  flex-col-reverse md:grid-cols-2 md:py-10 py-5  gap-10 w-10/12 mx-auto'>
                       <div className='place-content-center '>
                           <h2 className='md:text-2xl font-bold mb-5'>{headin1}</h2>
                           <p className='text-gray-700 md:text-base text-xs'>
                               <p>
                                   {description1}
                               </p>
                               <br />
                               <p>
                                   {description12}
                               </p>
                               <br />
                               <p>
                                   {description13}
                               </p>
                           </p>
                           <br />
                           <p>
                              {description14} </p>
                       </div>
                       <div>
                           <img className='rounded-b-full lg:p-20' src={photo} alt="" />
                       </div>
                   </div>
                   <div className='bg-gray-100'>
                       <div className='md:grid   grid-cols-2 lg:py-5 w-10/12 mx-auto'>
                           <div className='md:p-20'>
                               <img src={photo2} alt="" />
                           </div>
                           <div className='place-content-center lg:px-10 p-2'>
                               <h2 className='md:text-4xl font-bold mb-10'>{headin2}</h2>
                               <p className='text-gray-700 md:text-base text-xs'>{description2}</p>
                               <br />
                               <p>
                                   {description22}
                               </p>
                               <br />
                               <p>
                                {description23}
                               </p>
                               <br />
                               <p>
                                   {description24}
                               </p>
       
                           </div>
                       </div>
                   </div>
                   {/* <Faq></Faq> */}
               </div>
    );
};

export default Hook1;