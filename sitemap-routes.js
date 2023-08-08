import React from 'react';
import { Routes, Route } from 'react-router-dom';




const App = () => {
  return (
    <Routes>
      <Route path="/" />
      <Route path="rovers" />
      <Route path="/rovers/:rover">
        <Route path="/planets" />
        <Route path="/planets/:planet" />
      </Route>
      <Route path="/attribution" />
    </Routes>
  );
};

export default App;
