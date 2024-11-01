import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../stores/store';
import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRouteProps {

}

const ProtectedRoute: React.FC<ProtectedRouteProps> = (): JSX.Element => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;