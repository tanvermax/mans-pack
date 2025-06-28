import React, { useEffect, useState } from 'react';
import useaxiospublic from '../../Hook/useaxiospublic';
import Swal from 'sweetalert2';

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


    const handleDelete = async (id) => {
           Swal.fire({
               title: "Are you sure?",
               text: "This clinet will be permanently deleted!",
               icon: "warning",
               showCancelButton: true,
               confirmButtonColor: "#d33",
               cancelButtonColor: "#3085d6",
               confirmButtonText: "Yes, delete!",
           }).then(async (result) => {
               if (result.isConfirmed) {
                   try {
                       const response = await axiosPublic.delete(`/clinet/${id}`);
                       console.log(response);
                           console.log(response.data);
                       if (response.data.success = true) {
                           
                           Swal.fire("Deleted!", "clinet has been deleted.", "success");
                           // Refresh the data after deletion
                           const updatedData = data.filter(item => item._id !== id);
                           setData(updatedData);
                       }
                   } catch (error) {
                       console.error("Error deleting clinet:", error);
                       Swal.fire("Error!", "Failed to delete clinet.", "error");
                   }
               }
           });
       };

    return (
        <div className='py-5 px-6'>
            <p className='font-semibold'>Total clinet : {data.length}</p>
            <div className='grid grid-cols-10'>
                {
                    data.map((item,index)=> <>
                   <div
                                key={index}
                                className="relative group bg-white rounded-lg shadow p-4 space-y-3"
                            >
                                <div className='group-hover:blur-sm transition-all duration-200'>
                                    <img
                                        src={item.imageUrl}
                                        alt={item.altText}
                                        className=" rounded"
                                    />
                                   
                                    <p className="text-gray-700">Alter text : {item.altText}</p>
                                </div>
                                <div className="absolute inset-0 m-auto rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                                    
                                    {/* Fixed: Pass function reference instead of calling immediately */}
                                    <button 
                                        onClick={() => handleDelete(item._id)} 
                                        className='bg-[#8d2032] rounded-xl lg:text-base text-[8px] text-white'
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default EditClinet;