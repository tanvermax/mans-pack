import React, { useEffect, useState } from 'react';
import useaxiospublic from '../../Hook/useaxiospublic';
import { Link } from 'react-router-dom';

const BannerEdit = () => {

    const [data, setData] = useState([]);
    const axiospublic = useaxiospublic();

    useEffect(() => {
        axiospublic.get('/banner')
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.error("Error fetching banner data:", err);
            }, [axiospublic])
    });



    return (
        <div>
            Edit Banner info
            <div>
                {data.length > 0 && (
                    <div className=" max-w-7xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className="relative group bg-white rounded-lg shadow p-4 space-y-3"
                            >
                                <div className='group-hover:blur-sm transition-all duration-200'>
                                    <img
                                        src={item.image}
                                        alt="Card"
                                        className="w-full h-48 object-cover rounded"
                                    />
                                    <h3 className="text-xl font-semibold">{item.heading}</h3>
                                    <p className="text-gray-700">{item.description}</p>
                                </div>
                                <Link to={`/dashboard/banner/${item._id}`} className="absolute inset-0 m-auto w-20 h-10 bg-[#000A64] text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                                    Edit
                                </Link>

                            </div>
                        ))}
                    </div>
                )}
            </div>


        </div>
    );
};

export default BannerEdit;