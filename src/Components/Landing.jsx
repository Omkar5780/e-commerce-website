import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
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
import { Button } from '@mui/material';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function Landing() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    let navigate = useNavigate()

    function HandlePass() {
        navigate("/")
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">

                        {/* <div className=' d-flex  '>

                            <ul className='d-flex  '>
                                <li className='list-unstyled mt-3 ' >
                                    <a className='text-white me-3 text-decoration-none fw-bolder' href="">Home</a>
                                </li>
                                <li className='list-unstyled mt-3'>
                                    <a className='text-white me-3 text-decoration-none fw-bolder' href="">Mens</a>
                                </li>
                                <li className='list-unstyled mt-3'>
                                    <a className='text-white me-3 text-decoration-none fw-bolder' href="">Womens</a>
                                </li>
                                <li className='list-unstyled mt-3'>
                                    <a className='text-white me-3 text-decoration-none fw-bolder' href="">About</a>
                                </li>
                            </ul>
                            <div >
                            <button className='btn btn-danger m-2 mt-3 '>Logout</button>
                            </div>
                           
                               

                           
                        </div> */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button

                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Home
                            </Button>
                            <Button

                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Mens
                            </Button>
                            <Button

                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Womens
                            </Button>
                            <Button

                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                About
                            </Button>
                            <Button onClick={HandlePass}

                                sx={{ my: 2, color: 'white', display: 'block', bgcolor: 'red' }}
                            >
                                Logout
                            </Button>

                        </Box>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <br />
                    <ListItem disablePadding>
                        <Link to={"/admin/dashboard"} ><ListItemButton>
                            Dashboard
                        </ListItemButton>
                        </Link>
                    </ListItem>
                    <br />
                    <ListItem disablePadding>
                        <Link to={"/admin/products"}>
                            <ListItemButton>
                                Products
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <br />
                    <ListItem disablePadding>
                        <Link to={"/admin/addproducts"}>
                            <ListItemButton>

                                Add Product
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <br />
                    <ListItem disablePadding>
                        <ListItemButton>
                            Order
                        </ListItemButton>
                    </ListItem>
                    <br />

                </List>


            </Drawer>

            <Main open={open}>
                <DrawerHeader />

                <Outlet />


            </Main>


        </Box>
    );
}