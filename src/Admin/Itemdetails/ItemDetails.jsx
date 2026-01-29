import React, { useState } from 'react'; // Added useState for local UI updates
import { useLoaderData } from 'react-router-dom';
import { FaTrash, FaEdit } from 'react-icons/fa'; // Added FaEdit
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hook/useAxiosSecure';

const ItemDetails = () => {
  const initialData = useLoaderData();
  const [data, setData] = useState(initialData); // Use state to reflect changes instantly
  const axiosSecure = useAxiosSecure();

  // --- EDIT FUNCTION ---
  const handleEdit = async (item) => {
    const { value: formValues } = await Swal.fire({
      title: "Edit News Post",
      html:
        `<input id="swal-headline" class="swal2-input" placeholder="Headline" value="${item.headline}">` +
        `<textarea id="swal-description" class="swal2-textarea" placeholder="Description">${item.description}</textarea>` +
        `<input id="swal-photo" class="swal2-input" placeholder="Photo URL" value="${item.photoUrl}">`,
      focusConfirm: false,
      showCancelButton: true,
      preConfirm: () => {
        return {
          headline: document.getElementById("swal-headline").value,
          description: document.getElementById("swal-description").value,
          photoUrl: document.getElementById("swal-photo").value,
        };
      },
    });

    if (formValues) {
      try {
        const response = await axiosSecure.patch(`/newspost/${item._id}`, formValues);
        if (response.data.success) {
          // Update local state so the UI changes immediately
          const updatedData = data.map(post => 
            post._id === item._id ? { ...post, ...formValues } : post
          );
          setData(updatedData);

          Swal.fire("Saved!", "Your post has been updated.", "success");
        }
      } catch (error) {
        Swal.fire("Error", "Failed to update post", "error");
      }
    }
  };

  // --- DELETE FUNCTION ---
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
          // Note: Changed from response.data.success > true to simple check
          if (response.data) {
            setData(data.filter(post => post._id !== id)); // Remove from UI
            Swal.fire("Deleted!", "Your post has been deleted.", "success");
          }
        } catch (error) {
          Swal.fire("Error!", "Something went wrong.", "error");
        }
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">All News Posts</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((alldata) => (
          <div key={alldata._id} className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col">
            {alldata.photoUrl && (
              <img src={alldata.photoUrl} alt="News" className="w-full h-48 object-cover" />
            )}

            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold mb-2 text-gray-700">{alldata.headline}</h3>
              <p className="text-gray-600 mb-4">{alldata.description?.slice(0, 100)}...</p>

              <div className="flex gap-2 mt-auto">
                {/* Edit Button */}
                <button 
                  onClick={() => handleEdit(alldata)} 
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition"
                >
                  <FaEdit /> Edit
                </button>

                {/* Delete Button */}
                <button 
                  onClick={() => handleDelete(alldata._id)} 
                  className="flex-1 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition"
                >
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemDetails;