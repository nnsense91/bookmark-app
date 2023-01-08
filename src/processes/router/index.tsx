import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from '@processes/router/protected-route';
import { LoginPage } from '@pages/login-page';
import { MainPage } from '@pages/main-page';

export const Router: FC = () => {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <MainPage />
            </ProtectedRoute>
          }
        />
        <Route path='/login' element={<LoginPage />} />
        <Route path='*' element={<div>NOT FOUND</div>} />
      </Routes>
    </>
  );
};
