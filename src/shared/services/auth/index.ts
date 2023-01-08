import { createContext, useState } from 'react';
import { loginWithEmail, logout } from '@shared/api/firebase';

interface Auth {
  userName: string | null;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
}
const AuthProvider = createContext<Auth>({
  userName: null,
  signIn: () => {},
  signOut: () => {},
});

const useAuth = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const signIn = async (email: string, password: string) => {
    // TODO show error
    const { user, errorCode } = await loginWithEmail(email, password);

    if (user) {
      setUserName(user);
    }
  };

  const signOut = async () => {
    const success = await logout();

    if (success) {
      setUserName(null);
    }
  };

  return {
    userName,
    signIn,
    signOut,
  };
};

export { useAuth, AuthProvider };
