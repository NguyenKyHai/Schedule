import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer, { DrawerProps } from '@mui/material/Drawer';
import HomeIcon from '@mui/icons-material/Home';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Typography } from '@mui/material';
import PushPinIcon from '@mui/icons-material/PushPin';

export default function Sidebar() {
    const [open, setOpen] = React.useState<boolean>(false);
    const [variant, setVariant] = React.useState<'temporary' | 'permanent' | 'persistent'>('temporary');

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };
    const handleVariantChange = () => () => {
        if (variant === 'temporary'){
            setVariant('permanent');
        }
        else {
            setVariant('temporary');
            toggleDrawer(false);
        }
    };


    const DrawerList = (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box>
                <List>
                    <ListItemButton>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItemButton>
                </List>
            </Box>
            <Box sx={{ position: 'fixed', bottom: 0 }}>
                <IconButton
                    onClick={handleVariantChange()}
                    size="large"
                    aria-label="toggle pin"
                    color="inherit"
                    
                >
                    <PushPinIcon fontSize="small" />
                </IconButton>
            </Box>
        </Box>
    );

    return (
        <div>
            <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                    mx: 2,
                    display: { md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                <MenuIcon onClick={toggleDrawer(true)} fontSize="large" />
            </Typography>
            <Drawer open={open} onClose={toggleDrawer(false)} variant={variant}
                sx={{
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: 200, boxSizing: 'border-box', marginTop: '48px' },
                }}>
                {DrawerList}
            </Drawer>
        </div>
    );
}