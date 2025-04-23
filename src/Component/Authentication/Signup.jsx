import React from 'react';
import Social from './Social';
import photo from './../../assets/manspackaginglogo.png';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import useAuth from '../../Provider/useAuth';
import useAxiosSecure from '../../Hook/useAxiosSecure';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const { setUser, handlenewuser } = useAuth();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const password = watch("password");
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    const user = {
      email: data.email,
      userName: data.fullName,
      role: "user",
      password: data.password,
    };
    const result = await handlenewuser(data.email, data.password)
    if (result.user) {
      console.log(result.user);

      setUser(result.user)
    }
    axiosSecure.post('/user', user)
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


    alert("Form submitted successfully! Check console for data.");
  };





  return (
    <div className="hero bg-teal-100 min-h-screen flex items-center justify-center">
      <motion.div
        className="max-w-4xl max-sm:max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="text-center sm:mb-12">
          <a>
            <motion.img
              src={photo}
              alt="logo"
              className="w-44 inline-block mx-auto"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
            />
          </a>
          <h4 className="text-slate-600 text-base mt-6 font-medium">
            Sign up for your account
          </h4>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="col-span-2">
              <label className="text-slate-800 text-sm font-medium mb-2 block">
                Name
              </label>
              <motion.input
                {...register("fullName", { required: "Name is required" })}
                type="text"
                className={`w-full text-slate-800 text-sm px-4 py-3 rounded focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300 ${errors.fullName ? "border-red-500 border" : "bg-slate-100"
                  }`}
                placeholder="Enter full name"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
              )}
            </div>
            <div>
              <label className="text-slate-800 text-sm font-medium mb-2 block">
                Email
              </label>
              <motion.input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    // value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                className={`w-full text-slate-800 text-sm px-4 py-3 rounded focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300 ${errors.email ? "border-red-500 border" : "bg-slate-100"
                  }`}
                placeholder="Enter email"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label className="text-slate-800 text-sm font-medium mb-2 block">
                Mobile No.
              </label>
              <motion.input
                {...register("mobile", {
                  required: "Mobile number is required",
                  pattern: {
                    value: /^[0-9]{11}$/,
                    message: "Invalid mobile number (11 digits required)",
                  },
                })}
                type="tel"
                className={`w-full text-slate-800 text-sm px-4 py-3 rounded focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300 ${errors.mobile ? "border-red-500 border" : "bg-slate-100"
                  }`}
                placeholder="Enter mobile number"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              />
              {errors.mobile && (
                <p className="text-red-500 text-xs mt-1">{errors.mobile.message}</p>
              )}
            </div>
            <div>
              <label className="text-slate-800 text-sm font-medium mb-2 block">
                Password
              </label>
              <motion.input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                type="password"
                className={`w-full text-slate-800 text-sm px-4 py-3 rounded focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300 ${errors.password ? "border-red-500 border" : "bg-slate-100"
                  }`}
                placeholder="Enter password"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
              )}
            </div>
            <div>
              <label className="text-slate-800 text-sm font-medium mb-2 block">
                Confirm Password
              </label>
              <motion.input
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                type="password"
                className={`w-full text-slate-800 text-sm px-4 py-3 rounded focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300 ${errors.confirmPassword ? "border-red-500 border" : "bg-slate-100"
                  }`}
                placeholder="Confirm password"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>
              )}
            </div>
          </div>

          <motion.div
            className="mt-12 text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <button
              type="submit"
              className="py-3 px-8 text-sm font-medium tracking-wider rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition-colors duration-300"
            >
              Sign up
            </button>
          </motion.div>
        </form>

        <Social />
      </motion.div>
    </div>
  );
};

export default Signup;