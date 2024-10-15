import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box, Container, Divider, IconButton, ListItemIcon, Menu, MenuItem, TextField } from '@mui/material';
import Sidebar from './Sidebar';
import HomeIcon from '@mui/icons-material/Home';
import Avatar from '@mui/material/Avatar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Logout, Settings } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../utils/hooks';
import { logout, selectLoginState } from '../pages/auth/authSlice';
import { styled, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';

const MyAppBar: React.FC = () => {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const state = useAppSelector(selectLoginState);
  const dispatch = useAppDispatch();
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));


  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ background: '#4B4B4B', height: 48, justifyContent: 'center' }}>
        <Toolbar>
          <Sidebar />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { md: 'flex' },
              color: 'inherit',
            }}>
            <HomeIcon fontSize="large" />
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ ml: 1, display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              aria-label="notifications"
              color="inherit"
            >
              <NotificationsIcon fontSize="large" />
            </IconButton>
          </Box>
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 1 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}>
            <Avatar sx={{ width: 32, height: 32 }}></Avatar>
          </IconButton>
          <Typography>
            {state.userName}
          </Typography>
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={() => dispatch(logout())}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>

    </Box>
  );
};


const Header: React.FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <MyAppBar />
      <Box component="main" sx={{ flexGrow: 1, p: 1, marginTop: '1px' }}>
        <Toolbar />
        <Container
          sx={{
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            backgroundColor: 'lightgray',
            padding: '16px',
          }}
        >
          <Grid container spacing={2}>
          <Grid >
              <TextField 
              fullWidth
                id="outlined-required"
                label='Mã thiết bị'
                variant="outlined"
                size='small'
                sx={{
                  backgroundColor: 'white',
                }} />
           
            </Grid>
            <Grid >
              <TextField 
              fullWidth
                id="outlined-required"
                label='Tên thiết bị'
                variant="outlined"
                size='small'
                sx={{
                  backgroundColor: 'white',
                }} />
                 </Grid>
                 
                 </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Header;