import React from 'react';
import photo from "./../../../../src/assets/industrial-packaging-boxes-1024x759.jpg"
import photo2 from "./../../../../src/assets/Foresters-in-the-Woods-1024x683.jpg"

const Industrial = () => {
    return (
        <div className=' py-10'>
            <h1 className='md:text-3xl text-xs font-bold w-11/12 mx-auto'>E-COMMERCE PACKAGING | CUSTOM SHIPPING CARTON BOXES</h1>
            <div className='md:grid flex  flex-col-reverse md:grid-cols-2 md:py-10 py-5  gap-10 w-10/12 mx-auto'>
                <div className='place-content-center '>
                    <h2 className='md:text-2xl font-bold mb-5'>Revolutionizing Industrial Packaging. Cutting-Edge Solutions for Your Business</h2>
                    <p className='text-gray-700 md:text-base text-xs'>
                        <p>
                            As a leading manufacturer of packaging products
                            in Bangladesh, we understands the importance
                            of industrial packaging for the safe and
                            efficient transport of goods. From heavy
                            machinery to delicate electronics, industrial
                            packaging is designed to protect and preserve
                            products during transit, ensuring they arrive at
                            their destination
                            in the same condition as when they left
                            the factory.
                        </p>
                        <br />
                        <p>
                            Our industrial packaging options
                            include wooden crates, corrugated
                            boxes, custom foam inserts, pallets,
                            and more. Our state-of-the-art
                            production facility and experienced
                            workforce ensure that every product
                            we manufacture is of the highest
                            quality, ensuring the safety and
                            protection of your goods.
                        </p>
                        <br />
                        <p>
                            At Mans Printing and Packaging,
                            we understand the importance of sustainability
                            in ecommerce packaging. That’s why we offer
                            eco-friendly options that not only reduce
                            your environmental impact, but also help to
                            differentiate your brand and promote a positive image.
                        </p>
                    </p>
                    <br />
                    <p>
                        Whether it’s a one-time shipment or a regular order, we work closely with our clients to develop the right packaging solution to meet their needs. With our commitment to sustainability and responsible manufacturing practices, we aim to
                        minimize waste and reduce our impact on the environment. </p>
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
                        <h2 className='md:text-4xl font-bold mb-10'>Be good to the environment</h2>
                        <p className='text-gray-700 md:text-base text-xs'>Saving the environment and preserving our planet for future generations is a responsibility and we take it seriously. </p>
                        <br />
                        <p>
                            One of the ways we contribute to environmental protection is by promoting the use of corrugated packaging materials. Not only is corrugated one of the most recycled packaging materials, but it also offers a wide range of design and printing options that can help businesses meet the growing
                            demand for sustainable products and packaging solutions.
                        </p>
                        <br />
                        <p>
                            Furthermore, we are constantly researching and developing new technologies and methods to minimize waste and maximize efficiency in our manufacturing processes.


                        </p>
                        <br />
                        <p>
                            At Mans Printing & Packaging, we’re united in making a positive impact.
                        </p>

                    </div>
                </div>
            </div>
            {/* <Faq></Faq> */}
        </div>
    );
};

export default Industrial;