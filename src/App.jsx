import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { NavBar } from './components/index';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar />
    </div>
  );
};

export default App;
