import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
// import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



import { useNavigate } from 'react-router-dom';

const pages = ['Home', 'Mens', 'Womens', 'About',];
const settings = ['LogIn'];

function Navbar() {

  const [name, setName] = React.useState("")
  const [pass, setPass] = React.useState("")



  let navigate = useNavigate();
  // var arr = []

  var count = 10
  let local = JSON.parse(localStorage.getItem("name1"));

  if (local === null) {
    count = 0
    // alert(local)
  } else {
    count = local.length
  }

 

  // console.log(local.length);


  function HandleSubmit() {


    if (name === "admin" && pass === "8000") {
      localStorage.setItem("name", name)
      localStorage.setItem("pass", pass)

      navigate("admin/dashboard")

    } else {
      alert("Something Went Wrong")
    }
  }



  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [state, setState] = React.useState({

    Login: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 380 }}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, true)}
    >
      <List>
        {[''].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <div className='text-center'>
          <img height={"80px"} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAACUCAMAAAAgTdyMAAAAY1BMVEUAAAD////8/Pzw8PCcnJz29va3t7enp6e8vLyYmJjMzMzU1NTa2tri4uJra2s2NjbExMQoKCjo6OhWVlZdXV0ODg5iYmKurq55eXmKiopLS0sfHx9AQEBQUFCAgIBzc3MXFxdkdF0PAAACxElEQVR4nO3a2XaCMBAGYEISUfZFRASx7/+UDSBWAS2LLOH8340XNefMNNskUVEAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5hUuHUAHtqec0gHtnEyLva9H82WOtb/RqH+7s0EIib8fz3cxQijh8aVnM42L5MiA/8qckkjNoySqyo1z0r2dW7Qih+ki+wadPFHZpeNCEZUNjCHzdT6hSl5QrdMIjctm+mnq+EZJXVJndRhsgV9+05k+wjEYURvpqe5/y3yoiWZqvPLcFMUzG8nlw/P8udUxn3HzBDhS1JYe0T52346ou7niGydke43pr7mJ0ep+WFwS8eef2QIcSWxyqd7oPfP9csiIdZ0xvtF+9i2Tz373bU7YnMEN59kuVbnpNldO8raGzIg5b5BDOS199oS1VWahsf7SuXQvOR49V+/CXcuWlnE+f6CDaCKhvfaXUz071WzUkakhy6xTAotQsfQfeJWOvauPzlpdloi9bvUn1kq604rPWLco9Y1AFFn1/jPtp2xEckRbKNYxUvsW5J+JVhucou7MqvyOouimxwWjHC1kjbWTG1EWpOkt8vMjoAxXRR/ELZsDp5TKcNXQgaPzlgSLJCXZ6j6zXas1Qann3JNrxna66fuUPG+D8o/Lh8S5XIPgxPhTen3vBdfP04la5acvHcwE/ioYKk2h0sPj+oX/c+UipdsW15UH73E14S4dyhQe9YvR461BGmk185onvi2ojg5WsHQkU0hpmZ2/lWLs1WHT2SnGprPzimct/+0lruRuxdRb+VvycIe8lva3d0y4Y3l61hYL6UJ587nu1/IRzqY4ysrx7jrERWwMkrwBDSFOspbkV5rvhfv8xnbpKCaT30LI9bLcR7TV+4dCvqVv85CXy39FJc8POnoT51h9i9cPd8zQNpyd4m220gQAAAAAAAAAAAAAAAAAAAAAAFjcL50oFW6Ep3mVAAAAAElFTkSuQmCC" alt="" />
          <h5>Quick Login</h5>
          <br />
          <input type="text" style={{ marginLeft: "40px" }} onChange={(e) => setName(e.target.value)} className='form-control w-75 text-center align-items-center' placeholder='Enter Your Email' />
          <br />
          <input type="Password" style={{ marginLeft: "40px" }} onChange={(e) => setPass(e.target.value)} className='form-control w-75 text-center' placeholder='Enter Your Password' />
          <br />
          <button onClick={(() => HandleSubmit())} className='btn btn-danger'>Login</button>
          <br />
          <br />
          <h6 className='fs--5'>By clicking continue, you agree with our Privacy Policy</h6>
        </div>
        {[].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (



    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Puma
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* {pages.map((page) => ( */}
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
              {/* ))} */}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Home
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Mens
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Womens
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              About
            </Button>


          </Box>


          <Box sx={{ flexGrow: 0 }}>
            <Tooltip >

              <div >
                {['right'].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <Button className='me-5' variant='contained' size="small" startIcon={<ShoppingCartIcon />}>{count}</Button>

                    <Button onClick={toggleDrawer(anchor, true)}>{anchor}
                      <button className='btn btn-dark btn-outline-warning'>Login</button>
                    </Button>


                    <Drawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                    >
                      {list(anchor)}
                    </Drawer>
                  </React.Fragment>
                ))}
              </div>

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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}

            </Menu>
          </Box>
        </Toolbar>
      </Container>


    </AppBar>


  );
}
export default Navbar;