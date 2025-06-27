import React, { useEffect, useState } from 'react';
import useaxiospublic from '../../Hook/useaxiospublic';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Dyportfolio = () => {
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


    const handleDelete =async (id) => {
      Swal.fire({
                 title: "Are you sure?",
                 text: "This portfolio will be permanently deleted!",
                 icon: "warning",
                 showCancelButton: true,
                 confirmButtonColor: "#d33",
                 cancelButtonColor: "#3085d6",
                 confirmButtonText: "Yes, delete!",
             }).then(async (result) => {
                 if (result.isConfirmed) {
                     try {
                         const response = await axiospublic.delete(`/portfolio/${id}`);
                         console.log(response);
                             console.log(response.data);
                         if (response.data.success = true) {
                             
                             Swal.fire("Deleted!", "portfolio has been deleted.", "success");
                             // Refresh the data after deletion
                             const updatedData = data.filter(item => item._id !== id);
                             setData(updatedData);
                         }
                     } catch (error) {
                         console.error("Error deleting banner:", error);
                         Swal.fire("Error!", "Failed to delete portfolio.", "error");
                     }
                 }
             });
    }


    return (
        <div>
            <p className='py-3'>
                Total data : {data.length}
            </p>
            <div className='grid grid-cols-10 gap-3'>
                {
                    data.map((item, index) =>
                        <>
                            <div
                                key={index}
                                className="relative group bg-white rounded-lg shadow p-4 space-y-3"
                            >
                                <div className='group-hover:blur-sm transition-all duration-200'>
                                    <img
                                        src={item.name}
                                        alt="Card"
                                        className=" rounded"
                                    />
                                </div>
                                <div className="absolute inset-0 m-auto rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">

                                    {/* Fixed: Pass function reference instead of calling immediately */}
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className='bg-[#8d2032] rounded-xl lg:p-2 p-1 text-[8px] lg:text-base  text-white'
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default Dyportfolio;