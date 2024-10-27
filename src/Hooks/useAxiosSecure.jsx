import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
})
const UseAxiosSecure = () => {
    const { logout } = useAuth()
    const navigate = useNavigate()

    // interceptor
    axiosSecure.interceptors.response.use(res => {
        
        return res
    },
        async error => {
            console.log("error inside axios interceptor: ", error.response);
            if (error.response.status === 401 || error.response.status === 403) {
                await logout()
                navigate('/login')
            }
            return Promise.reject(error)
        }
    )
    return axiosSecure
};

export default UseAxiosSecure;