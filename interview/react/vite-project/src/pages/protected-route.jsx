import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    // write auth logic
    // make login API call, check if token valid
    const isAuthenticated = false;

  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}

export default ProtectedRoute