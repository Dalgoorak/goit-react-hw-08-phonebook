import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

// для не зарегестрированных
export default function PublicRoutes() {
  const token = useSelector(state => state.auth.token);
  return token ? <Navigate to="/contacts" /> : <Outlet />;
}
