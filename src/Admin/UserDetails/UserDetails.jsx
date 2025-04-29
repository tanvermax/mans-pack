import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hook/useAxiosSecure';

const UserDetails = () => {
  const axiosSecure = useAxiosSecure();
  const users = useLoaderData() || [];

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This user will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axiosSecure.delete(`/user/${id}`);
          if (response.data.deletedCount > 0) {
            Swal.fire("Deleted!", "User has been deleted.", "success");
          }
        } catch (error) {
          console.error("Error deleting user:", error);
          Swal.fire("Error!", "Failed to delete user.", "error");
        }
      }
    });
  };

  const handleMakeUser = (user) => {
    axiosSecure.patch(`/user/user/${user._id}`)
      .then(res => {
        if (res.data.success) {
          Swal.fire("Updated!", res.data.message, "success");
        } else {
          Swal.fire("Error!", res.data.message || "Could not update role.", "error");
        }
      })
      .catch(() => Swal.fire("Error!", "Role update failed.", "error"));
  };

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/user/admin/${user._id}`)
      .then(res => {
        if (res.data.success) {
          Swal.fire("Updated!", res.data.message, "success");
        } else {
          Swal.fire("Error!", res.data.message || "Could not update role.", "error");
        }
      })
      .catch(() => Swal.fire("Error!", "Role update failed.", "error"));
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-6">All Users</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-200 bg-white shadow-md">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3 border">#</th>
              <th className="p-3 border">Photo</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Role</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user._id} className="hover:bg-gray-50">
                <td className="p-3 border text-center">{idx + 1}</td>
                <td className="p-3 border">
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    src={user.photoURL || "https://i.ibb.co/0jqHpnp/default-user.png"}
                    alt={user.userName}
                  />
                </td>
                <td className="p-3 border font-medium">{user.userName}</td>
                <td className="p-3 border text-sm text-gray-600">{user.email}</td>
                <td className="p-3 border text-center">
                  {user.role === 'admin' ? (
                    <span className="bg-green-200 text-green-800 text-xs px-3 py-1 rounded-full font-semibold cursor-pointer" onClick={() => handleMakeUser(user)}>
                      Admin
                    </span>
                  ) : (
                    <span className="bg-blue-200 text-blue-800 text-xs px-3 py-1 rounded-full font-semibold cursor-pointer" onClick={() => handleMakeAdmin(user)}>
                      {user.role || 'User'}
                    </span>
                  )}
                </td>
                <td className="p-3 border text-center space-x-2">
                  {/* Edit button could be added here if needed */}
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-xs"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDetails;
