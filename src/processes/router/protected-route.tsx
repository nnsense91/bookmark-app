import { FC, ReactElement, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '@shared/services';

interface IProtectedRoute {
  children: ReactElement;
}

export const ProtectedRoute: FC<IProtectedRoute> = ({ children }) => {
  const location = useLocation();
  const { userName } = useContext(auth.AuthProvider);
  const isAuthorized = Boolean(userName);

  if (!isAuthorized) {
    return <Navigate to='/login' state={{ from: location }} />;
  }

  return children;
};
