import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
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
const loginWithEmail = async (email: string, password: string) => {
  try {
    const data = await signInWithEmailAndPassword(auth, email, password);

    return data.user.email;
  } catch (e) {
    console.error(e);
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

export { auth, loginWithEmail, logout };
