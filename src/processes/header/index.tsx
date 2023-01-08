import { Box, AppBar, Toolbar, Typography } from '@mui/material';
import { FC, useContext } from 'react';
import { Logout } from '@features';
import { auth } from '@shared/services';
export const HEADER_HEIGHT = 48;

export const Header: FC = () => {
  const { userName } = useContext(auth.AuthProvider);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar variant='dense' sx={{ height: `${HEADER_HEIGHT}px` }}>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Bookmark-app
          </Typography>
          {userName && <Logout />}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
