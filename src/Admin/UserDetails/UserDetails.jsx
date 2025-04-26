import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hook/useAxiosSecure';


const UserDetails = () => {


  const axiosSecure = useAxiosSecure();

  const users = useLoaderData() || [];

  console.log(users);
  
  // console.log(users);
  const handledelete = async (id) => {
    console.log(id);

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
          const response = await axiosSecure.delete(`/user/${id}`);
          console.log(response.data);
          // deleteUser1();

          if (response.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your user has been deleted.",
              icon: "success",
            });
          }
        } catch (error) {
          console.error("Error deleting user:", error);
          Swal.fire({
            title: "Error!",
            text: "Something went wrong while deleting the user.",
            icon: "error",
          });
        }
      }
    });
  };


   const handleMakeUser=(alluser)=>{
    console.log(alluser._id);
    
    axiosSecure.patch(`/user/user/${alluser._id}`)
      .then(res => {
        console.log(res.data);
        if (res.data.success) {  // Check if the response was successful
          Swal.fire({
            title: "Success!",
            text: res.data.message, // Use the message from the server response
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: res.data.message || "Unable to update the role.",
            icon: "error",
          });
        }
      })
      .catch(error => {
        console.error("Error making user admin:", error);
        Swal.fire({
          title: "Error!",
          text: "Something went wrong while updating the user role.",
          icon: "error",
        });
      });
   }


  const handleMakeAdmin = (alluser) => {
    console.log(alluser._id);
    
    axiosSecure.patch(`/user/admin/${alluser._id}`)
      .then(res => {
        console.log(res.data);
        if (res.data.success) {  // Check if the response was successful
          Swal.fire({
            title: "Success!",
            text: res.data.message, // Use the message from the server response
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: res.data.message || "Unable to update the role.",
            icon: "error",
          });
        }
      })
      .catch(error => {
        console.error("Error making user admin:", error);
        Swal.fire({
          title: "Error!",
          text: "Something went wrong while updating the user role.",
          icon: "error",
        });
      });
  };
  



  return (
    <div>
      <ul className="list bg-base-100  shadow-md p-10" >
        <h2 className='text-3xl'> All Users</h2>
        {/* <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Most played songs this week</li> */}

        {
          users.map((alluser, index) =>
           <li key={alluser._id} className="list-row">
            <div className="text-4xl font-thin opacity-30 tabular-nums">{index + 1}</div>
            <div>

              <img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp" />
            </div>
            <div className="list-col-grow">
              <div>{alluser.userName}</div>
              <div className="text-xs uppercase font-semibold opacity-60">{alluser.email}</div>
            </div>

            {alluser.role === 'admin' ? <button onClick={() => handleMakeUser(alluser)} className='btn text-xs uppercase font-semibold opacity-60 place-content-center'>
            Admin
              </button> :
              <button onClick={() => handleMakeAdmin(alluser)} className='btn text-xs uppercase font-semibold opacity-60 place-content-center'>
                {alluser.role}
              </button>
            }
            {/* <button className="btn bg-teal-500">
                            Edit

                        </button> */}
            <button
              onClick={() => handledelete(alluser._id)}
              className="btn  bg-red-500 "
            >
              Delete user
            </button>
          </li>)
        }





      </ul>
    </div>
  );
};

export default UserDetails;