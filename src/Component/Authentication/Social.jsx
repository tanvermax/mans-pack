
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
            const result = await handegooglelogin()

                .then(result => {
                    const user = result.user;
                    const userinfo = {
                        userName: user.displayName,
                        email: user.email,
                        role: "user",
                    }
                    axiosSecure.post('/user', userinfo)
                        .then(res => {
                            console.log(res.data);
                            if (res.data.insertedId) {
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "Your work has been saved",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            }
                            navigate('/')

                        })

                })
            // toast.success(" Success! Operation completed.");
            console.log("User signed in:", result.user);


            navigate('/')
        } catch (error) {
            // toast.error(" Error! Something went wrong.");
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
                <Link onClick={handlegooglein} className="  text-blue-500 text-2xl"><FaGoogle /></Link>
                {/* <Link className="">facebook</Link> */}
                {/* <Link>Lnkedin</Link> */}
            </div>
        </div>
    );
};

export default Social;