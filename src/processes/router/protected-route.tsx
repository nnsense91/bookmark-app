import { FC, ReactElement } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface IProtectedRoute {
  children: ReactElement;
}

export const ProtectedRoute: FC<IProtectedRoute> = ({ children }) => {
  const location = useLocation();
  const isAuthorized = false;

  if (!isAuthorized) {
    return <Navigate to='/login' state={{ from: location }} />;
  }

  return children;
};
