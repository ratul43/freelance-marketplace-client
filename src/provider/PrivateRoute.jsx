import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from './AuthContext';
import { ClimbingBoxLoader } from 'react-spinners';

const PrivateRoute = ({children}) => {

    const location = useLocation()

    const {user, loading} = useContext(AuthContext)

if(loading){
        return <div className='h-[97vh] flex items-center justify-center'>
            <ClimbingBoxLoader color="#e74c3c" />

        </div>
    }
    
    if(user){
        return children
    }


      return <Navigate state={location.pathname} to={"/login"}></Navigate>

};

export default PrivateRoute;