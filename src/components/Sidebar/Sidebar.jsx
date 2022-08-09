import React from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

import roverIcon from '../../assets/images/rover.png';

import useStyles from './styles';
import logo from '../../assets/images/logo.png';
import planetImages from '../../assets/images';

const rovers = [
  { name: 'Curiosity', value: 'curiosity' },
  { name: 'Opportunity', value: 'opportunity' },
  { name: 'Spirit', value: 'spirit' },
  { name: 'Perseverance', value: 'perseverance' },
];

const planets = [
  { name: 'Mercury', value: 'mercury' },
  { name: 'Venus', value: 'venus' },
  { name: 'Earth', value: 'earth' },
  { name: 'Mars', value: 'mars' },
  { name: 'Jupiter', value: 'jupiter' },
  { name: 'Saturn', value: 'saturn' },
  { name: 'Uranus', value: 'uranus' },
  { name: 'Neptune', value: 'neptune' },
  { name: 'Pluto', value: 'pluto' },
];

const Sidebar = ({ setMobileOpen }) => {
  let classes = useStyles();

  return (
    <div className={classes.sidebarContainer}>
      <Link
        to="/"
        className={classes.logoContainer}
        onClick={() => setMobileOpen(false)}
      >
        <img className={classes.logo} src={logo} alt="Space Lens Logo" />
      </Link>
      <Divider />
      <List className={classes.sidebarCategories}>
        <ListSubheader
          className={classes.sidebarSubheader}
          sx={{ padding: '0' }}
        >
          <Link
            to="/rovers"
            className={classes.subHeaders}
            onClick={() => setMobileOpen(false)}
          >
            <ListItem button>Rovers</ListItem>
          </Link>
        </ListSubheader>
        {rovers.map(({ name, value }) => (
          <Link
            key={value}
            className={classes.links}
            to={`/rovers/${value}`}
            onClick={() => setMobileOpen(false)}
          >
            <ListItem button>
              <ListItemIcon>
                <img
                  src={roverIcon}
                  alt="Icon of a rover"
                  className={classes.sidebarIcon}
                ></img>
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List className={classes.sidebarCategories}>
        <ListSubheader className={classes.sidebarSubheader}>
          <div className={classes.subHeaders}>Planets</div>
        </ListSubheader>
        {planets.map(({ name, value }) => (
          <Link
            key={value}
            className={classes.links}
            to={`/planets/${value}`}
            onClick={() => setMobileOpen(false)}
          >
            <ListItem button>
              <ListItemIcon>
                <img
                  src={planetImages[name.toLowerCase()]}
                  alt={name}
                  className={classes.sidebarIcon}
                ></img>
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List className={classes.sidebarCategories}>
        <Link to="/attribution" className={classes.links}>
          <ListItem button>Attribution</ListItem>
        </Link>
      </List>
    </div>
  );
};

export default Sidebar;
