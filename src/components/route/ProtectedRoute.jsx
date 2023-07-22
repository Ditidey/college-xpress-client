import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import { contextProvider } from '../../AuthProvider';

const ProtectedRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = useContext(contextProvider);
    
    if(loading){
        <p>Loading...</p>
    }
    if(user){
        return children;
    }
    if(!user){
        Swal.fire({
            text: 'Login First',
            timer: 1500,
            icon: 'warning',
            showCloseButton: false
        })
    }
    return (
        <Navigate to='/login' state={{from:location}} replace></Navigate>
    );
};

export default ProtectedRoute;