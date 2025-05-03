import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const PrivateAuth = ({ children }) => {
  const { user, load } = use(AuthContext)
  const location = useLocation()
  if (load) {
    return <span className='loading mx-auto absolute  loading-infinity loading-xl'></span>

  }
  if (!user) {
    return <Navigate state={location?.pathname} to='/login'></Navigate>
  }
  return children
};

export default PrivateAuth;