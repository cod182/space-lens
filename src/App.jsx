import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components/index';
import { Home, Rovers, Rover, Planet, Attribution } from './Routes/index';

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
          <Route path="/planets">
            <Route path=":planet" element={<Planet />} />
          </Route>
          <Route path="/attribution" element={<Attribution />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
