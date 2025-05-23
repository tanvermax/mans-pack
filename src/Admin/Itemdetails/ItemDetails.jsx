import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hook/useAxiosSecure';

const ItemDetails = () => {
  const data = useLoaderData();
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axiosSecure.delete(`/newspost/${id}`);
          if (response.data.success > true) {
            Swal.fire({
              title: "Deleted!",
              text: "Your post has been deleted.",
              icon: "success",
            });
          }
        } catch (error) {
          console.error("Error deleting post:", error);
          Swal.fire({
            title: "Error!",
            text: "Something went wrong while deleting the post.",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-8">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">All News Posts</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((alldata) => (
          <div 
            key={alldata._id} 
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition duration-300 flex flex-col"
          >
            {alldata.photoUrl && (
              <img 
                src={alldata.photoUrl} 
                alt="News Photo" 
                className="w-full h-48 object-cover"
              />
            )}

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-700">{alldata.headline}</h3>
                <p className="text-gray-600 mb-4">
                  {alldata.description?.slice(0, 100)}...
                </p>
              </div>

              <button 
                onClick={() => handleDelete(alldata._id)} 
                className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition duration-300 mt-auto"
              >
                <FaTrash /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemDetails;
