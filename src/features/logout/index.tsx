import { Button, Typography, Stack } from '@mui/material';
import { FC, useContext } from 'react';
import { auth } from '@shared/services';

export const Logout: FC = () => {
  const { user, signOut } = useContext(auth.AuthProvider);
  const logoutHandler = () => {
    signOut();
  };

  return (
    <Stack direction='row' spacing={1} alignItems='center'>
      <Typography color='inherit'>{user}</Typography>
      <Button variant='outlined' color='inherit' onClick={logoutHandler}>
        Logout
      </Button>
    </Stack>
  );
};
