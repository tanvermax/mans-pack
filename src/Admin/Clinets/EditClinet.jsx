import React from 'react';
import useaxiospublic from '../../Hook/useaxiospublic';
import Swal from 'sweetalert2';

const EditClinet = ({ data, refresh }) => {
    const axiosPublic = useaxiospublic();

    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This client will be permanently deleted!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await axiosPublic.delete(`/client/${id}`);
                    if (response.data.success === true) {
                        Swal.fire("Deleted!", "Client has been deleted.", "success");
                        refresh(); // ✅ Call parent's fetch function
                    }
                } catch (error) {
                    console.error("Error deleting client:", error);
                    Swal.fire("Error!", "Failed to delete client.", "error");
                }
            }
        });
    };

    return (
        <div className='py-5 px-6'>
            <p className='font-semibold'>Total client : {data.length}</p>
            <div className='grid lg:grid-cols-7 md:grid-cols-5 grid-cols-3 gap-4'>
                {
                    data.map((item) => (
                        <div
                            key={item._id}
                            className="relative group bg-white rounded-lg shadow p-4 space-y-3"
                        >
                            <div className='group-hover:blur-sm transition-all duration-200'>
                                <img
                                    src={item.imageUrl}
                                    alt={item.altText}
                                    className="rounded"
                                />
                                <p className="text-gray-700 md:text-base text-[8px]" >Alt text: {item.altText}</p>
                            </div>
                            <div className="absolute inset-0 m-auto rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                                <button 
                                    onClick={() => handleDelete(item._id)} 
                                    className='bg-[#8d2032] rounded-xl lg:text-base text-[8px] text-white px-3 py-1'
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default EditClinet;
