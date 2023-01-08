import './styles/normalize.css';
import { FC } from 'react';
import { MainPage, LoginPage } from '@pages';
export const App: FC = () => {
  return (
    <div className='App'>
      APP
      <MainPage />
      <LoginPage />
    </div>
  );
};
