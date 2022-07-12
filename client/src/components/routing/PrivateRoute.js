import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
  const authed = localStorage.getItem("authToken"); // isauth() returns true or false based on localStorage
  
  return authed ? children : <Navigate to="/login" />;
}

export default PrivateRoute