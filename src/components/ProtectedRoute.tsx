import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: ('buyer' | 'manager' | 'appraisal')[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
  const { user, isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles && user && !allowedRoles.includes(user.role)) {
    // Redirect to appropriate dashboard based on user's role
    if (user.role === 'buyer') {
      return <Navigate to="/buyer" replace />;
    } else if (user.role === 'manager') {
      return <Navigate to="/manager" replace />;
    } else if (user.role === 'appraisal') {
      return <Navigate to="/appraisal" replace />;
    }
  }

  return <>{children}</>;
};

export default ProtectedRoute;
