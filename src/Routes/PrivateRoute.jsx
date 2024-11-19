import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
    const { user, loader } = useAuth()
    const location = useLocation()
    
    if (loader) {
        return <span className="loading loading-bars loading-lg text-[#1abc9c] text-center h-[500px] flex items-center mx-auto"></span>
    }
    if (!user) {
        return (
            <Navigate to="/login" state={location.pathname} replace={true}></Navigate>
        )
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    children: PropTypes.object
}