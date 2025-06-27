import React, { useEffect, useState } from 'react';
import useaxiospublic from '../../Hook/useaxiospublic';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const BannerEdit = () => {
    const [data, setData] = useState([]);
    const axiospublic = useaxiospublic();

    // Fixed useEffect with proper dependency array
    useEffect(() => {
        axiospublic.get('/banner')
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.error("Error fetching banner data:", err);
            });
    }, [axiospublic]); // Moved dependency array outside catch

    // Single delete function (removed duplicate)
    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This banner will be permanently deleted!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await axiospublic.delete(`/banner/${id}`);
                    console.log(response);
                        console.log(response.data);
                    if (response.data.success = true) {
                        
                        Swal.fire("Deleted!", "Banner has been deleted.", "success");
                        // Refresh the data after deletion
                        const updatedData = data.filter(item => item._id !== id);
                        setData(updatedData);
                    }
                } catch (error) {
                    console.error("Error deleting banner:", error);
                    Swal.fire("Error!", "Failed to delete banner.", "error");
                }
            }
        });
    };

    return (
        <div>
            Edit Banner info
            <div>
                {data.length > 0 && (
                    <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
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
                                <div className="absolute inset-0 m-auto rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                                    <Link className='bg-blue-300 p-2 m-2 rounded-xl' to={`/dashboard/banner/${item._id}`}>
                                        Edit
                                    </Link>
                                    {/* Fixed: Pass function reference instead of calling immediately */}
                                    <button 
                                        onClick={() => handleDelete(item._id)} 
                                        className='bg-[#8d2032] rounded-xl p-2 text-white'
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default BannerEdit;