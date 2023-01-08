import { Box, AppBar, Toolbar, Typography } from '@mui/material';
import { FC, useContext } from 'react';
import { Logout } from '@features';
import { auth } from '@shared/services';

export const Header: FC = () => {
  const { user } = useContext(auth.AuthProvider);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Bookmark-app
          </Typography>
          {user && <Logout />}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
