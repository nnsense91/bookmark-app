import { Box } from '@mui/material';
import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HEADER_HEIGHT } from '@processes';
import { ProtectedRoute } from '@processes/router/protected-route';
import { LoginPage } from '@pages/login-page';
import { MainPage } from '@pages/main-page';

export const Router: FC = () => {
  return (
    <Box
      minHeight={`calc(100vh - ${HEADER_HEIGHT}px)`}
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
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
    </Box>
  );
};
