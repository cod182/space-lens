import React, { useEffect, useState } from 'react';
import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  useMediaQuery,
} from '@mui/material';

import { Menu } from '@mui/icons-material';

import { Sidebar, SearchBar } from '../index';

import useStyles from './styles';

const NavBar = () => {
  const classes = useStyles();

  const isMobile = useMediaQuery('(max-width:600px)');
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {isMobile ? (
        <div>
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
              <SearchBar />
            </Toolbar>
          </AppBar>
        </div>
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
