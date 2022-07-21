import React, { useEffect } from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
} from '@mui/material';
import { Link } from 'react-router-dom';

import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import PublicIcon from '@mui/icons-material/Public';

import useStyles from './styles';
import logo from '../../assets/images/logo.png';
import { SearchBar } from '../index';

const rovers = [
  { name: 'Curiosity', value: 'curiosity' },
  { name: 'Opportunity', value: 'opportunity' },
  { name: 'Spirit', value: 'spirit' },
  { name: 'Perseverance', value: 'perseverance' },
];

const planets = [
  { name: 'Mercuery', value: 'mercuery' },
  { name: 'Venus', value: 'venus' },
  { name: 'Eath', value: 'earth' },
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
      <Link to="/" className={classes.logoContainer}>
        <img className={classes.logo} src={logo} alt="Space Lens Logo" />
      </Link>
      <Divider />
      <div className={classes.searchBarContainer}>
        <SearchBar />
      </div>
      <Divider />
      <List className={classes.sidebarCategories}>
        <ListSubheader className={classes.sidebarSubheader}>
          <Link to="/rovers">Rovers</Link>
        </ListSubheader>
        {rovers.map(({ name, value }) => (
          <Link
            key={value}
            className={classes.links}
            to={`/rovers/${value}`}
            onClick={() => setMobileOpen(false)}
          >
            <ListItem>
              <ListItemIcon>
                <ElectricCarIcon className={classes.sidebarIcon} />
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List className={classes.sidebarCategories}>
        <ListSubheader className={classes.sidebarSubheader}>
          Planets
        </ListSubheader>
        {planets.map(({ name, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem button>
              <ListItemIcon>
                <PublicIcon className={classes.sidebarIcon} />
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
