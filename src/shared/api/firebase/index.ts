import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  AuthError,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyA9gj9KjI6VhUog5aRMs6DdpHpUYpmIhwc',
  authDomain: 'bookmark-app-eea75.firebaseapp.com',
  projectId: 'bookmark-app-eea75',
  storageBucket: 'bookmark-app-eea75.appspot.com',
  messagingSenderId: '388211065020',
  appId: '1:388211065020:web:72ffbd082d255c49dc50b9',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const loginWithEmail = async (email: string, password: string) => {
  try {
    const data = await signInWithEmailAndPassword(auth, email, password);

    return {
      user: data.user.email,
    };
  } catch (error) {
    const firebaseError = error as AuthError;

    return {
      errorCode: firebaseError.code,
    };
  }
};

const logout = async () => {
  try {
    await signOut(auth);

    return true;
  } catch (e) {
    console.error(e);
  }
};

export { auth, loginWithEmail, logout, db };
