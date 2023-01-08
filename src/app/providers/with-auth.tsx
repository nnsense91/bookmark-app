import { ReactNode } from 'react';
import { auth } from '@shared/services';

const { AuthProvider, useAuth } = auth;

// eslint-disable-next-line react/display-name
export const withAuth = (component: () => ReactNode) => () => {
  const { signIn, signOut, userName } = useAuth();

  return (
    <AuthProvider.Provider value={{ userName, signIn, signOut }}>
      {component()}
    </AuthProvider.Provider>
  );
};
