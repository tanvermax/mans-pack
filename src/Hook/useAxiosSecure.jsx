import axios from "axios";
import useAuth from "../Provider/useAuth";
import { useNavigate } from "react-router-dom";

export const axiosSecure= axios.create({
    baseURL: "https://man-pack-server.vercel.app",
  
})


const useAxiosSecure = () => {
    const {logout} = useAuth()
    const navigate= useNavigate();

    axiosSecure.interceptors.request.use(
        function (config) {
          const token = localStorage.getItem("access-token");
          // console.log(token);
          
          // console.log("request stopped by interceptor", token);
    
          config.headers.authorization = `Bearer ${token}`;
          // console.log('request stopeb by intercepter');
    
          return config;
        }, async (error) =>{
            const status = error.response.status;
            console.log("statsus error in the interceptor" , status);
            if (status===401 || status === 403) {
                await logout();
                 navigate('/login')
            }
          return Promise.reject(error);
        }
      );

      axiosSecure.interceptors.response.use(
        function (response) {
          return response;
        },
        function (error) {
          return Promise.reject(error);
        }
      );
      return axiosSecure;
   
};

export default useAxiosSecure;