import React, { useEffect, useState } from 'react';
import useaxiospublic from '../../Hook/useaxiospublic';

const EditClinet = () => {
    const [data, setData] = useState([]);

    const axiosPublic = useaxiospublic();

    useEffect(()=>{
        axiosPublic.get('/clinet')
        .then((res) => {
            setData(res.data);
        })
        .catch((err) => {
            console.error("Error fetching banner data:", err);
        });
    },[axiosPublic])

    return (
        <div className='py-5 px-6'>
            <p className='font-semibold'>Total clinet : {data.length}</p>
            <div>
                {
                    data.map((item,index)=> <>
                    <div  className='grid grid-cols-10 gap-3' key={index}>
                    <img src={item.imageUrl} alt={item.altText} />
                    </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default EditClinet;