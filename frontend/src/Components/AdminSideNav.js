import React from 'react'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Tooltip from '@mui/material/Tooltip';
import { Grid } from '@mui/material';
// import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
// import Link from 'next/link';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ReplyIcon from '@mui/icons-material/Reply';
import BarChartIcon from '@mui/icons-material/BarChart';

import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import NewReleasesOutlinedIcon from '@mui/icons-material/NewReleasesOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';

import { Link } from 'react-router-dom';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const settings = ['Profile', 'Account', 'name', 'Logout'];

const AdminSideNav = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [anchorElUsers, setAnchorElUsers] = React.useState(null);
  const handleOpenUsersDropdown = (event) => {
    setAnchorElUsers(!anchorElUsers);
  };

  const [anchorElReleases, setAnchorElReleases] = React.useState(null);
  const handleOpenReleasesDropdown = (event) => {
    setAnchorElReleases(!anchorElReleases);
  };

  const [anchorElLabels, setAnchorElLabels] = React.useState(null);
  const handleOpenLabelsDropdown = (event) => {
    setAnchorElLabels(!anchorElLabels);
  };

  return (
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <AppBar position="fixed" open={open} style={{
        backgroundColor:'#02003E',
    }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Grid container>
            <Grid item xs={8} lg={8}>
            <Typography variant="h6" noWrap component="div" style={{
                // color:'orange',
                color:'white',
                fontWeight:'bolder',
                fontSize:'30px'
            }}>
                ByLaw
            </Typography>
            </Grid>
            <Grid item xs={4}>
            <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 , float:'right'}}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          
            <MenuItem  onClick={handleCloseUserMenu}>
              <Typography textAlign="center">Name</Typography>
            </MenuItem>
            <Divider/>

            <MenuItem  onClick={handleCloseUserMenu}>
                <LogoutOutlinedIcon/>
              <Link to='/'><Typography textAlign="center">Log out</Typography></Link>
            </MenuItem>
          
        </Menu>
      </Box>
            </Grid>
        </Grid>
        
        
      </Toolbar>
    </AppBar>
    <Drawer variant="permanent" open={open} >
      <DrawerHeader>
        <Avatar style={{ position: 'absolute', left: '20px' }}/>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
          <Link to='/admin/requests'>
          <ListItem disablePadding sx={{ display: 'block' }}  onClick={handleDrawerOpen}>
            <ListItemButton
              onClick={handleOpenUsersDropdown}
              className='list-items' // Open Dashboard dropdown
              sx={{
                minHeight: '10vh',
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
               
              >
                <PersonIcon/>
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                User Requests
                
              </ListItemText>
            </ListItemButton>
           
          </ListItem>
          </Link>
          
        
       
          <Link to='/admin/dashboard'>
          <ListItem disablePadding sx={{ display: 'block' }} >
            <ListItemButton
              // onClick={handleOpenLabelsDropdown} 
              className='list-items'// Open Dashboard dropdown
              sx={{
                minHeight: '10vh',
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <DashboardIcon/>
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                
              Lawyer Dashboard
              </ListItemText>
            </ListItemButton>
           
          </ListItem>
          </Link>
          
          
          <Link to='/admin/analytics'>
          <ListItem disablePadding sx={{ display: 'block' }} >
            <ListItemButton
              className='list-items' // Open Dashboard dropdown
              sx={{
                minHeight: '10vh',
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <BarChartIcon/>
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                Analytics
              </ListItemText>
            </ListItemButton>
          </ListItem>
          </Link>
          
      </List>
      
      
    </Drawer>
    </Box>
  )
}


export default AdminSideNav