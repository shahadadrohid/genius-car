import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://server-genius-car.vercel.app',
    withCredentials: true
})

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;