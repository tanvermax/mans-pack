import axios from 'axios';

const axiosPublic = axios.create({
    baseURL: "https://mans-server.vercel.app",
    // baseURL: "https://mans-server.vercel.app",
    
    // baseURL: "http://localhost:5000",
    
  });
const useaxiospublic = () => {
    return axiosPublic;
};

export default useaxiospublic;

// https://man-pack-server.vercel.app
// https://man-pack-server.vercel.app