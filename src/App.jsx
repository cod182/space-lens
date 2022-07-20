import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components/index';
import { Home, Rovers, Rover } from './Routes/index';

import useStyles from './styles';

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rovers">
            <Route index element={<Rovers />} />
            <Route path=":rover" element={<Rover />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
};

export default App;
