import React, { useEffect, useState } from 'react';
import useaxiospublic from '../../Hook/useaxiospublic';

const HomePortfolio = () => {

    const [data, setData] = useState([]);

    const axiospublic = useaxiospublic();

    useEffect(() => {
        axiospublic.get("/portfolio")
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.error("Error fetching banner data:", err);
            });
    }, [axiospublic])
    console.log(data)
    return (
        <div className=''>
            <div className=' mx-auto place-items-center lg:py-10 py-5'>
                <h2 className='lg:text-5xl md:text-3xl text-xl font-bold lg:py-4 '>Our Portfolio</h2>
                <p className='lg:text-xl text-xs text-gray-700 pb-10'>Portfolio We Have done</p>
                <div className='grid  grid-cols-4 gap-5'>
                    {
                        [...data].reverse().slice(0, 8).map((clinet) => <div className='group-hover:blur-sm transition-all duration-200'>
                        <img
                            src={clinet.name}
                            alt="Card"
                            className=" rounded"
                        />
                    </div>)
                    }

                </div>
            </div>
        </div>
    );
};

export default HomePortfolio;