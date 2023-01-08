import { createContext, useState } from 'react';
import { loginWithEmail, logout } from '@shared/api/firebase';

interface Auth {
  user: string | null;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
}
const AuthProvider = createContext<Auth>({
  user: null,
  signIn: () => {},
  signOut: () => {},
});

const useAuth = () => {
  const [user, setUser] = useState<string | null>(null);
  const signIn = async (email: string, password: string) => {
    const userData = await loginWithEmail(email, password);

    if (userData) {
      setUser(userData);
    }
  };

  const signOut = () => logout();

  return {
    user,
    signIn,
    signOut,
  };
};

export { useAuth, AuthProvider };
