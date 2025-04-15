
import { FaGoogle } from "react-icons/fa";

import useAuth from "../../Provider/useAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Social = () => {

    const { handegooglelogin } = useAuth();
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
                    fetch("http://localhost:5000/user", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(userinfo),
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            ("inside the body", data);
                            if (data.insertedId) {
                                alert("Account created");
                                navigate("/");
                            }
                        });
                })
            toast.success(" Success! Operation completed.");
            console.log("User signed in:", result.user);


            navigate('/')
        } catch (error) {
            toast.error(" Error! Something went wrong.");
            console.error("Google sign-in error:", error);
        }
    };


    return (
        <div>
            <h3>Dont have account? continue with</h3>
            <div className='flex gap-5 mt-2'>
                <button onClick={handlegooglein} className="flex text-blue-500"><FaGoogle /></button>
                <button>facebook</button>
                <button>Lnkedin</button>
            </div>
        </div>
    );
};

export default Social;