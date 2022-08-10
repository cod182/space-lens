import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  useMediaQuery,
} from '@mui/material';
import { Menu } from '@mui/icons-material';
import useStyles from './styles';
import { Sidebar } from '../index';
import logo from '../../assets/images/logo.png';

const NavBar = () => {
  const classes = useStyles();

  const isMobile = useMediaQuery('(max-width:600px)');
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {isMobile ? (
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.mobileNavContainer}>
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: 'none' }}
              onClick={() => setMobileOpen(true)}
            >
              <Menu />
            </IconButton>
            <Link to="/">
              <img className={classes.logo} src={logo} alt="Space Lens Logo" />
            </Link>
          </Toolbar>
        </AppBar>
      ) : (
        ''
      )}
      <div>
        <nav className={classes.drawer}>
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="left"
              open={mobileOpen}
              onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              classes={{ paper: classes.greyBackground }}
              ModalProps={{ keepMounted: true }}
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer
              classes={{ paper: classes.greyBackground }}
              variant="permanent"
              open
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </nav>
      </div>
    </>
  );
};

export default NavBar;
