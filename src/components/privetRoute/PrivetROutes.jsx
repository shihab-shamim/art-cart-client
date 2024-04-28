import { useContext } from "react";
// import { AuthContext } from "../provider/Authprovider";

import {Navigate,useLocation} from 'react-router-dom'
import { AuthContext } from "../../provider/AuthProvider";

const PrivetRoute = ({children}) => {
    // const {loading}=useContext(AuthContext)
    const location =useLocation()
    console.log(location.pathname)
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <div className="mx-auto">
            <span className=" loading loading-spinner loading-lg"></span>
        </div>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivetRoute;