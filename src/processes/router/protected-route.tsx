import { FC, ReactElement, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '@shared/services';

interface IProtectedRoute {
  children: ReactElement;
}

export const ProtectedRoute: FC<IProtectedRoute> = ({ children }) => {
  const location = useLocation();
  const { user } = useContext(auth.AuthProvider);
  const isAuthorized = Boolean(user);

  if (!isAuthorized) {
    return <Navigate to='/login' state={{ from: location }} />;
  }

  return children;
};
