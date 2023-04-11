import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

// для  зарегестрированных
export default function PrivateRoutes() {
  const token = useSelector(state => state.auth.token);
  return token ? <Outlet /> : <Navigate to="/login" />;
}
