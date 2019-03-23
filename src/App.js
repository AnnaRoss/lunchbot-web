import React from 'react';
import { Router } from '@reach/router';
import Restaurants from './views/Restaurants/Restaurants';
import Restaurant from './views/Restaurant/Restaurant';

const App = () => {
  return (
    <Router>
      <Restaurants exact path="/" />
      <Restaurant path="/restaurant/:id" />
    </Router>
  );
};

export default App;
