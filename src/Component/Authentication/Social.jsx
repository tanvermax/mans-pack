
import { FaGoogle } from "react-icons/fa";

import useAuth from "../../Provider/useAuth";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Swal from "sweetalert2";

const Social = () => {

    const { handegooglelogin } = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();


    const handlegooglein = async () => {
        try {
            const result = await handegooglelogin();
            const user = result.user;

            const userinfo = {
                userName: user.displayName,
                email: user.email,
                role: "user",
            };

            // Try to save the user
            const res = await axiosSecure.post('/user', userinfo).catch(err => err.response);

            if (res?.data?.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "New user created!",
                    showConfirmButton: false,
                    timer: 1500
                });
            } else if (res?.data?.message === 'User already exists') {
                console.log("User already exists, skipping insert.");
            } else {
                console.warn("Unexpected response while inserting user:", res.data);
            }

            console.log("User signed in:", user);
            navigate('/');

        } catch (error) {
            console.error("Google sign-in error:", error);
        }
    };



    return (
        <div>
            <div className="mt-6 flex items-center justify-between">
                <span className="border-b w-1/5 lg:w-1/4"></span>
                <span className="text-xs text-gray-500 uppercase">or login with</span>
                <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <div className='flex  mt-2 items-center place-content-center'>
                <div className='flex mt-2 items-center place-content-center'>
                    <button
                        onClick={handlegooglein}
                        className="text-blue-500 text-2xl"
                    >
                        <FaGoogle />
                    </button>
                </div>
                {/* <Link className="">facebook</Link> */}
                {/* <Link>Lnkedin</Link> */}
            </div>
        </div>
    );
};

export default Social;