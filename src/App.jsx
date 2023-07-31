import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components/index';
import { Home, Rovers, Rover, Planet, Attribution } from './Routes/index';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';


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
        <Canvas style={{ height: '100vh', width: '100vw', backgroundColor: 'black', zIndex: '-10', position: 'absolute', top: 0, left:0}}>
          <ambientLight intensity={0.5} />
          <Stars />
      </Canvas>
      </main>
    </div>
  );
};

export default App;
