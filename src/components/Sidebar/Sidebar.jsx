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
  { key: 1, name: 'Rover 1', value: 'rover1' },
  { key: 2, name: 'Rover 2', value: 'rover2' },
  { key: 3, name: 'Rover 3', value: 'rover3' },
];

const planets = [
  { key: 1, name: 'Mercuery', value: 'mercuery' },
  { key: 2, name: 'Venus', value: 'venus' },
  { key: 3, name: 'Eath', value: 'earth' },
  { key: 4, name: 'Mars', value: 'mars' },
  { key: 5, name: 'Jupiter', value: 'jupiter' },
  { key: 6, name: 'Saturn', value: 'saturn' },
  { key: 7, name: 'Uranus', value: 'uranus' },
  { key: 8, name: 'Neptune', value: 'neptune' },
  { key: 9, name: 'Pluto', value: 'pluto' },
];

const Sidebar = () => {
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
          Rovers
        </ListSubheader>
        {rovers.map(({ key, name, value }) => (
          <Link key={key} className={classes.links} to="/">
            <ListItem button>
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
        {planets.map(({ key, name, value }) => (
          <Link key={key} className={classes.links} to="/">
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
